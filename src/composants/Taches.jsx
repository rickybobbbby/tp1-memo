import Tache from './Tache';
import './Taches.scss';

export default function Taches() {

  return (
    <section className="Taches">
      <form onSubmit={e => alert('À compléter')}>
        <input 
          type="text"   
          placeholder="Ajoutez une tâche ..." 
          name="texteTache"
          autoComplete="off" 
        />
      </form>
      <div className="liste-taches">
        <Tache />
        <Tache />
        <Tache />
      </div>
    </section>
  );
}