import './Tache.scss';

export default function Tache() {
  return (
    <div className="Tache">
      Basculer
      <span className="texte">Texte de la tâche</span>
      <span className="date">(date formatée)</span>
      Supprimer
    </div>
  );
}