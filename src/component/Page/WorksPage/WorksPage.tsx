import { useState } from 'react';
import './WorksPage.css';
import { AnimatePresence, motion } from 'framer-motion';
import PageTitle from '../../common/PageTitle/PageTitle';
import WorkCard from '../../common/WorkCard/WorkCard';
import { works } from '../../../data/constant';
import { useIntl } from 'react-intl';

const WorksPage = () => {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const items = works;

  // we want the scope to be always to be in the scope of the array so that the carousel is endless
  const indexInArrayScope =
    ((activeIndex % items.length) + items.length) % items.length;

  // so that the carousel is endless, we need to repeat the items twice
  // then, we slice the the array so that we only have 3 items visible at the same time
  const visibleItems = [...items, ...items].slice(
    indexInArrayScope,
    indexInArrayScope + 3
  );
  
  const handleClick = (newDirection : number) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };
  
  return (
    <motion.div
      className='workspage'
      id='works'

      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <PageTitle title={useIntl().formatMessage({ id: 'works' })}></PageTitle>
      <div className='works_carousel'>
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map((item) => {
            // The layout prop makes the elements change its position as soon as a new one is added
            // The key tells framer-motion that the elements changed its position
            return (
              <motion.div
                className="card"
                key={item.id}

                layout
                drag="y"
                dragConstraints={{top: 0, bottom: 0}}
                onDragEnd={
                  (event, info) => {
                    if ( info.offset.y > 50) {
                      handleClick(-1);
                    } else if (info.offset.y < -50) {
                      handleClick(1);
                    }
                  }
                }
                custom={{
                  direction,
                  position: () => {
                    if (item === visibleItems[0]) {
                      return 'top';
                    } else if (item === visibleItems[1]) {
                      return 'center';
                    } else {
                      return 'bottom';
                    }
                  }
                }}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                 <WorkCard work={item}/>
              </motion.div>
            );
          })}
          </AnimatePresence>
        </div>
    </motion.div>
  )
}

const variants = {
  enter: ({ direction }: {direction: number}) => {
    return { scale: 0.2, y: direction < 1 ? 50 : -50, opacity: 0 };
  },
  center: ({ position, direction }: {position: any, direction: number}) => {
    return {
      scale: position() === 'center' ? 1 : 0.7,
      y: 0,
      zIndex: getZIndex({ position, direction }),
      opacity: position() === 'center' ? 1 : 0.35
    };
  },
  exit: ({ direction }: {direction: number}) => {
    return { scale: 0.2, y: direction < 1 ? -50 : 50, opacity: 0 };
  }
};

function getZIndex({ position, direction }: {position: any, direction: number}) {
  const indexes: {
    top: number;
    center: number;
    bottom: number;
  } = {
    top: direction > 0 ? 2 : 1,
    center: 3,
    bottom: direction > 0 ? 1 : 2
  };
  return indexes[position() as keyof typeof indexes];
}
export default WorksPage;