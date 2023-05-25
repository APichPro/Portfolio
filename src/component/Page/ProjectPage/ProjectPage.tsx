import './ProjectPage.css';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import PageTitle from '../../common/PageTitle/PageTitle';
import { FormattedMessage, useIntl } from 'react-intl';
import { projects } from '../../../data/constant';



const ProjectPage = () => {
  let { name } = useParams();
  const intl = useIntl();
  console.log(intl.locale);
  const project = projects.find(project => project.name === name);

  return (
    <motion.div
      className='project_page'
      id='project'

      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260, 
        damping: 20,
      }}
      >
      <PageTitle title={project?.name + ' - ' + useIntl().formatMessage({ id: project?.type }) || 'Work not found'}></PageTitle>
      <div className="overflow-scroll-gradient">
        <div className='project_content'>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectPage;
