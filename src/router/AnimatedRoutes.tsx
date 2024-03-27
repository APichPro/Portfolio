import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ProjectPage from '../component/Page/ProjectPage/ProjectPage';
import WorkPage from '../component/Page/WorkPage/WorkPage';
import AboutPage from '../component/Page/AboutPage/AboutPage';
import ContactPage from '../component/Page/ContactPage/ContactPage';
import HomePage from '../component/Page/HomePage/HomePage';
import ProjectsPage from '../component/Page/ProjectsPage/ProjectsPage';
import SkillsPage from '../component/Page/SkillsPage/SkillsPage';
import WorksPage from '../component/Page/WorksPage/WorksPage';
import ResumePage from '../component/Page/ResumePage/ResumePage';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/portfolio' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/works' element={<WorksPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/skills' element={<SkillsPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/resume' element={<ResumePage />} />
        <Route path='/works/:company' element={<WorkPage />} />
        <Route path='/projects/:name' element={<ProjectPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes