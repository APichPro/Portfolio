import './SkillCard.css';

const SkillCard = (
  { selectedSkill, setSelectedSkill } : any
) => {
  return (
    <div className="skill_card">
      {selectedSkill
        ? <img src={selectedSkill.icon} alt={selectedSkill.name} height={100} width={100}/>
        : 'No selected skill'}
    </div>
  )
}

export default SkillCard;
