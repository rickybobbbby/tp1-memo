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

  // État des 'dossiers' de l'utilisateur connecté
  const [dossiers, setDossiers] = useState([]);
  
  // Surveiller l'état de la connexion Firebase Auth
  useEffect(() => observerEtatConnexion(setUtilisateur),[]);



  return (
    // 1)  Si un utilisateur est connecté :
    utilisateur ?
        <div className="Appli">
          <header className='appli-entete'>
            <img src={logo} className="appli-logo" alt="Memo" />
          <Utilisateur utilisateur={utilisateur}/>
          </header>
          <Taches utilisateur={utilisateur} dossiers={dossiers} setDossiers={setDossiers}/>
          <Controle />
        </div>

        
      // 2) Par contre si aucun utilisateur n'est connecté, on affiche plutôt le composant suivant :
      :
        <Accueil /> 
  ); 
}
