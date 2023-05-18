import './AboutPage.css';
import PageTitle from '../PageTitle/PageTitle';
import { motion } from 'framer-motion';
import { me } from '../../assets';


const AboutPage = () => {
  return (
    <motion.div
      className='about_page'
      id='about'

      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260, 
        damping: 20,
      }}
      >
      <PageTitle title='about'></PageTitle>
      <div className='about_content'>
        <img src={me} alt='Me !'/>
        <p>Hi, I'm Aristide !</p>
      </div>
    </motion.div>
  )
}

export default AboutPage;