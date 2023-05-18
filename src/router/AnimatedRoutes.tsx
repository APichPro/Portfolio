import { Routes, Route, useLocation } from 'react-router-dom';
import AboutPage from '../component/AboutPage/AboutPage';
import ContactPage from '../component/ContactPage/ContactPage';
import ProjectsPage from '../component/ProjectsPage/ProjectsPage';
import SkillsPage from '../component/SkillsPage/SkillsPage';
import WorksPage from '../component/WorksPage/WorksPage';
import HomePage from '../component/HomePage/HomePage';

import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/works' element={<WorksPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/skills' element={<SkillsPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes