import React from 'react';
import './SkillsPage.css';
import PageTitle from '../PageTitle/PageTitle';
import { motion } from 'framer-motion';

const SkillsPage = () => {
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
      <PageTitle title='skills'></PageTitle>
      <div className='skills_content'></div>
    </motion.div>
  )
}

export default SkillsPage;