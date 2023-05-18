import './ProjectCard.css';

const ProjectCard = (
  { project } : any
) => {
  return (
    <div className='project_card'>
      <img draggable="false" src={project.image} alt='project'/>
      <div>
        <p className='project_card_title'>{project.name}</p>
        <p>{project.context} - {project.type}</p>
        <p className='project_down_icon'>{`>`}</p>
      </div>
    </div>
  )
}

export default ProjectCard;
