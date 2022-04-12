import Tache from './Tache';
import './Taches.scss';
import { useEffect } from 'react';
import * as tachesModele from '../code/crud-taches';

export default function Taches({utilisateur, dossiers, setDossiers}) {
  //console.log("Objet utilisateur retourné par le Provider GoogleAuth : ", utilisateur);

 // Lire les dossiers (de l'utilisateur connecté) dans Firestore
useEffect(
  () => tachesModele.lireTout(utilisateur.uid).then(
      lesDossiers => setDossiers(lesDossiers)
    )
    , [utilisateur, setDossiers]
);

// Gérer l'ajout d'un dossier
function gererAjoutDossier(actionForm) {

  actionForm.preventDefault();
  let titre = actionForm.target.texteTache.value;
  actionForm.target.reset();
  tachesModele.creer(utilisateur.uid, {
    titre: titre,
    etat: false 
  }).then(
    // On augmente les dossiers avec le nouveau document que nous 
    // venons d'ajouter dans Firestore
    // 'dateModif'
    doc => setDossiers([{id: doc.id, ...doc.data()}, ...dossiers])
  );
}

function changerTache() {
//changer l etat
}
function detruireTache() {
//changer 
}
  return (
    <section className="Taches">
      <form onSubmit={e => gererAjoutDossier(e)}>
        <input
          type="text"   
          placeholder="Ajoutez une tâche ..." 
          name="texteTache"
          autoComplete="off" 
        />
      </form>
      <div className="liste-taches">
      {
        dossiers.map( 
          // Remarquez l'utilisation du "spread operator" pour "étaler" les 
          // propriétés de l'objet 'dossier' reçu en paramètre de la fonction
          // fléchée dans les props du composant 'Dossier' !!
        dossier =>  <Tache key={dossier.id} {...dossier} />
        )
      }
      </div>
    </section>
  );
}