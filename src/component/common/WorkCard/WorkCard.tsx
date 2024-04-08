import { Link } from 'react-router-dom';
import './WorkCard.css';
import { FormattedMessage } from 'react-intl';

const WorkCard = (
  { work } : any
) => {
  return (
    <div className='work_card'>
      <img draggable="false" height="auto" width="150" src={work.logo} alt='logo'/>
      <div className='work_card_info'>
        <p className='work_card_company'>{work.company}</p>
        <div><p>{`${work?.start.getMonth()!}/${work?.start.getFullYear()!}-${work?.end.getMonth()!}/${work?.end.getFullYear()!}`}</p></div>
      </div>
      <Link to={`/works/${work.company}`} className='work_card_icon'>{`>`}</Link>
    </div>
  )
}

export default WorkCard;
