import { authFirebase, authGoogle, bdFirestore } from './init';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

// Fonctionnalités requises
import { useState, useEffect } from 'react';

export function observerEtatConnexion(mutateurEtatUtilisateur) {
    onAuthStateChanged(authFirebase, 
        user => {
            // S'il y a un utilisateur autre que 'null', on sauvegarde dans Firestore
            if(user) {
                // La fonction sauvegarderProfil() est définie plus bas.
                sauvegarderProfil(user);
            }

            // Dans tous les cas (null ou utilisateur existant), on modifie
            // l'état pour permettre à React de mettre à jour le UI...
            mutateurEtatUtilisateur(user);
        }
    )
}
/**
 * Ouvre une connexion Firebase (avec Google)
 */
 export function connexion() {
    signInWithPopup(authFirebase, authGoogle);
}
/**
 * Ferme la connexion Firebase Auth
 */
 export function deconnexion() {
    authFirebase.signOut();
}

function sauvegarderProfil(user) {
    // Voir la documentation : 
    // https://firebase.google.com/docs/firestore/manage-data/add-data?hl=en&authuser=0
    setDoc(
        doc(bdFirestore, 'memos', user.uid), 
        {nom: user.displayName, courriel: user.email}, 
        {merge: true}
    );
}