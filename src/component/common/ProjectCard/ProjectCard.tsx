import { Link } from 'react-router-dom';
import './ProjectCard.css';
import { FormattedMessage } from 'react-intl';

const ProjectCard = (
  { project } : any
) => {
  return (
    <div className='project_card'>
      <img draggable="false" src={project.image} alt='project'/>
      <div>
        <p className='project_card_title'>{project.name}</p>
        <p><FormattedMessage id={project.context}/> - <FormattedMessage id={project.type}/></p>
        <Link to={`/projects/${project.name}`}><p className='project_down_icon'>{`>`}</p></Link>
      </div>
    </div>
  )
}

export default ProjectCard;
