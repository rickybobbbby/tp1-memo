import { bdFirestore } from "./init";
import { getDocs, collection, addDoc, Timestamp, getDoc } from "firebase/firestore";

/* Obtenir tous les dossiers d'un utilisateur */
export async function lireTout(idUtilisateur) {
    return getDocs(collection(bdFirestore, 'memos', idUtilisateur, 'dossiers')).then(
        res => res.docs.map(doc => ({id: doc.id, ...doc.data()}))
    );
}
/* Ajouter un dossier pour un utilisateur */
export async function creer(idUtilisateur, dossier) {
    
    // On ajoute dateModif à l'objet dossier
    dossier.dateModif = Timestamp.now();

    // Référence à la collection dans laquelle on veut ajouter le dossier taches
    let coll = collection(bdFirestore, 'memos', idUtilisateur, 'dossiers');

    // Ajout du dossier avec addDoc : retourne une promesse contenant une 
    // "référence" Firestore au document ajouté
    let refDoc = await addDoc(coll, dossier);
    return await getDoc(refDoc);
}