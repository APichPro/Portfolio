import './WorkCard.css';

const WorkCard = (
  { work } : any
) => {
  return (
    <div className='work_card'>
      <img draggable="false" height="auto" width="150" src={work.logo} alt='logo'/>
      <div className='work_card_info'>
        <p className='work_card_company'>{work.company}</p>
        <p>{work.position}</p>
      </div>
      <p className='work_card_icon'>{`>`}</p>
    </div>
  )
}

export default WorkCard;
