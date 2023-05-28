import './AboutPage.css';
import { motion } from 'framer-motion';
import { me } from '../../../assets';
import { FormattedMessage, useIntl } from 'react-intl';
import PageTitle from '../../common/PageTitle/PageTitle';


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
      <PageTitle title={useIntl().formatMessage({ id: 'about' })}></PageTitle>
      <div className='about_content'>
        <img src={me} alt='Me !'/>
        <p><FormattedMessage id="about_hi" /></p>
        <p><FormattedMessage id="about_me" /></p>
        <p><FormattedMessage id="about_studies" /></p>
        <p><FormattedMessage id="about_projects" /></p>
        <p><FormattedMessage id="about_discover" /></p>
      </div>
    </motion.div>
  )
}

export default AboutPage;