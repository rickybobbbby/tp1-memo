import './Appli.scss';
import logo from '../images/memo-logo.png';
import Controle from './Controle';
import Taches from './Taches';
import Accueil from './Accueil';

import Utilisateur from './Utilisateur';
import { observerEtatConnexion } from '../code/user';

// Fonctionnalités requises
import { useState, useEffect } from 'react';

export default function Appli() {
  
  // État 'utilisateur'
  const [utilisateur, setUtilisateur] = useState(null);
  
  // Surveiller l'état de la connexion Firebase Auth
  useEffect(() => observerEtatConnexion(setUtilisateur),[]);
  
  return (
    utilisateur ?
        <div className="Appli">
          <header className='Appli'>
            <img src={logo} className="appli-logo" alt="Memo" />
            {/* <Entete utilisateur={utilisateur} /> */}
          </header>
          <Utilisateur />
        </div>
      :
        <Accueil /> 
  );
    // 1)  Si un utilisateur est connecté : 
      // <div className="Appli">
      //   <header className="appli-entete">
      //     <img src={logo} className="appli-logo" alt="Memo" />
      //     <Utilisateur />
      //   </header>
      //   <Taches />
      //   <Controle />
      // </div>

    // 2) Par contre si aucun utilisateur n'est connecté, on affiche plutôt le composant suivant : 
}
