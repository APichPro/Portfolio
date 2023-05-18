import './ContactPage.css';
import PageTitle from '../PageTitle/PageTitle';
import { motion } from 'framer-motion';


const ContactPage = () => {
  return (
    <motion.div
      className='contact_page'
      id='contact'
      
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <PageTitle title='contact'></PageTitle>
      <div className='contact_content'></div>
    </motion.div>
  )
}

export default ContactPage;