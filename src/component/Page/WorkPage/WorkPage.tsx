import './WorkPage.css';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import PageTitle from '../../common/PageTitle/PageTitle';
import { FormattedMessage, useIntl } from 'react-intl';
import { works } from '../../../data/constant';
import { CalendarIcon, Detail, LocationIcon, TypeIcon } from '../../../assets';



const WorkPage = () => {
  let { company } = useParams();
  const intl = useIntl();
  console.log(intl.locale);
  const work = works.find(work => work.company === company);

  return (
    <motion.div
      className='work_page'
      id='work'

      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260, 
        damping: 20,
      }}
      >
      <PageTitle title={work?.company + ' - ' + useIntl().formatMessage({ id: work?.job }) || 'Work not found'}></PageTitle>
      <div className="overflow-scroll-gradient">
        <div className='work_content'>
          <img src={work?.logo} alt='Company logo'/>
          <p><FormattedMessage id={work?.company_desc}/></p>
          <div><LocationIcon height="75px"/><p>{work?.city}</p></div>
          <div><CalendarIcon height="75px"/><p>{`${work?.start.getMonth()!}/${work?.start.getFullYear()!}-${work?.start.getMonth()!}/${work?.end.getFullYear()!}`}</p></div>
          <div><TypeIcon height="75px"/><p><FormattedMessage id={work?.type}/></p></div>
          <label className='work_missions'><FormattedMessage id="missions"/></label>
          <ul className='work_missions_list'>
            {work?.missions.map((mission) =>
              <li>
                <details>
                  <summary>
                    <FormattedMessage id={mission}/>
                    <Detail className="animated-icon"/>
                  </summary>
                  <p>Contenu caché ou supplémentaire que vous souhaitez afficher lorsque le détail est ouvert.</p>
                </details>
              </li>
            )}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default WorkPage;
