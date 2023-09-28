import { useState } from 'react';
import './ProjectsPage.css';

import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../../../data/constant';
import PageTitle from '../../common/PageTitle/PageTitle';
import ProjectCard from '../../common/ProjectCard/ProjectCard';
import { useIntl } from 'react-intl';


const ProjectsPage = () => {

  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const items = projects;

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
      className='projects_page'
      id='projects'
      
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <PageTitle title={useIntl().formatMessage({ id: 'projects' })} />
      <div className='projects_carousel'>
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map((item) => {
            return (
              <motion.div
                className="card"
                key={item.id}

                layout
                drag="x"
                dragConstraints={{left: 0, right: 0}}
                onDragEnd={
                  (event, info) => {
                    if ( info.offset.x > 50) {
                      handleClick(-1);
                    } else if (info.offset.x < -50) {
                      handleClick(1);
                    }
                  }
                }
                custom={{
                  direction,
                  position: () => {
                    if (item === visibleItems[0]) {
                      return 'left';
                    } else if (item === visibleItems[1]) {
                      return 'center';
                    } else {
                      return 'right';
                    }
                  }
                }}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                 <ProjectCard project={item}/>
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
    return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 };
  },
  center: ({ position, direction }: {position: any, direction: number}) => {
    return {
      scale: position() === 'center' ? 1 : 0.7,
      x: 0,
      zIndex: getZIndex({ position, direction }),
      opacity: position() === 'center' ? 1 : 0.35
    };
  },
  exit: ({ direction }: {direction: number}) => {
    return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 };
  }
};

function getZIndex({ position, direction }: {position: any, direction: number}) {
  const indexes: {
    left: number;
    center: number;
    right: number;
  } = {
    left: direction > 0 ? 2 : 1,
    center: 3,
    right: direction > 0 ? 1 : 2
  };
  return indexes[position() as keyof typeof indexes];
}

export default ProjectsPage;

