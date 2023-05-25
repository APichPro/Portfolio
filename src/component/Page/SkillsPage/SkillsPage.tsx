import React, { useState } from 'react';
import './SkillsPage.css';
import { motion } from 'framer-motion';
import PageTitle from '../../common/PageTitle/PageTitle';
import { useIntl } from 'react-intl';
import { skills } from '../../../data/constant';
import { CustomCloud } from '../../common/Cloud/CustomCloud';


const SkillsPage = () => {

  const [filteredSkills, setFilteredSkills] = useState(skills);

  const [filterText, setFilterText] = useState('');

  const handleFilterChange = (event: any) => {
    setFilterText(event.target.value);
    setFilteredSkills(skills.filter( skill => skill.name.toLowerCase().includes(event.target.value.toLowerCase())));
  };

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
      <div className='skill_filter'>
        <label>
          <PageTitle title={useIntl().formatMessage({ id: 'skills' })}></PageTitle>
          <input
            type="text"
            value={filterText}
            onChange={handleFilterChange}
            placeholder="Search..."
          />
        </label>
      </div>
      <div className='skills_content'>
        <CustomCloud skills={filteredSkills}/>
      </div>
    </motion.div>
  )
}

export default SkillsPage;