import { useIntl } from 'react-intl';
import PageTitle from '../../common/PageTitle/PageTitle';
import './ContactPage.css';
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
      <PageTitle title={useIntl().formatMessage({ id: 'contact' })}></PageTitle>
      <div className='contact_content'></div>
    </motion.div>
  )
}

export default ContactPage;