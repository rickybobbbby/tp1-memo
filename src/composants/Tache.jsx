import './Tache.scss';
import { formaterDate } from '../code/helper';
import AlarmOffIcon from '@mui/icons-material/AlarmOff';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function Tache({id, titre, etat, dateModif}) {
  return (
    <div className="Tache">
      <AlarmOffIcon/>
      <span className="texte">{titre}</span>
      <span className="date">{formaterDate(dateModif.seconds)}</span>
      <RemoveCircleIcon/>
    </div>
  );
}