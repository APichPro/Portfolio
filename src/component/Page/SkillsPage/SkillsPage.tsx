import { useState } from 'react';
import './SkillsPage.css';
import { motion } from 'framer-motion';
import PageTitle from '../../common/PageTitle/PageTitle';
import { useIntl } from 'react-intl';
import { skills } from '../../../data/constant';
import { CustomCloud } from '../../common/Cloud/CustomCloud';
import SkillsFilter from '../../common/SkillsFilter/SkillsFilter';


const SkillsPage = () => {
  const [context, setContext] = useState(null);

  const [type, setType ] = useState(null);

  const [current, setCurrent] = useState(false);

  return (
    <motion.div
      className='skillspage' id='skills'
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
        <PageTitle title={useIntl().formatMessage({ id: 'skills' })}></PageTitle>
        <SkillsFilter
          filterContext={context}
          setFilterContext={setContext}
          filterType={type}
          setFilterType={setType}
          current={current} 
          setCurrent={setCurrent}
        />
      <div className='skills_content'>
        <CustomCloud
          skills={skills.filter((skill) =>
           ( !context || skill.context===context)
            &&  (!type || skill.type===type)
            &&  ( !current || skill.current===true)
            )}/>
      </div>
    </motion.div>
  )
}

export default SkillsPage;