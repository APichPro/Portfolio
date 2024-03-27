import { useIntl } from 'react-intl';
import PageTitle from '../../common/PageTitle/PageTitle';
import './ResumePage.css';
import { motion } from 'framer-motion';


const ResumePage = () => {
  return (
    <motion.div
      className='resume_page'
      id='resume'
      
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <PageTitle title={useIntl().formatMessage({ id: 'resume' })}></PageTitle>
      <div className='resume_content'>
        <object className="resume_pdf" data="https://drive.google.com/file/d/1CQAFFG9yWwDf-MRBgLmuIQjZjpJizdpT/preview?usp=drive_link" type="application/pdf"/>
      </div>
    </motion.div>
  )
}

export default ResumePage;