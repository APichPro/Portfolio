import './SkillCard.css';

const SkillCard = (
  { skill } : any
) => {
  return (
    <div className="skill_card">
      <skill.icon height={100} width={100}/>
    </div>
  )
}

export default SkillCard;
