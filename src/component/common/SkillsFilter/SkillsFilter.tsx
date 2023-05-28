import { useState } from 'react';
import './SkillsFilter.css';
import { contexts, types } from '../../../data/constant';

const SkillsFilter = (
  {
    filterContext,
    setFilterContext,
    filterType, 
    setFilterType,
    current,
    setCurrent,
  } : any) => {

  const [contextOptions, setContextOptions] = useState(false);
  //const [filterContext, setFilterContext] = useState('professional');

  const [typeOptions, setTypeOptions] = useState(false);
  //const [filterType, setFilterType] = useState('technology');
  
  return (
    <div className='skill_filter'>
      <div className="select">
        <div>
          <button
            onClick={() => contextOptions ? setContextOptions(false) : setContextOptions(true)}
          >
            {filterContext ? filterContext : 'No filter'}
          </button>
          <button
            onClick={() => setFilterContext(null)}
          >
            X
          </button>
        </div>
        <div className='options_div'/>
        <div className={`options ${contextOptions ? '': 'display'}`} >
          { contexts.map((context) =>
            <button
              title={context.id}
              key={context.id}
              onClick={() => {
                setFilterContext(context.id);
                setContextOptions(false);
              }}
            >
              <context.icon />
            </button>
          )}
        </div>
      </div>
      <div className="select">
        <div>
          <button
            onClick={() => typeOptions ? setTypeOptions(false) : setTypeOptions(true)}
          >
            {filterType ? filterType : 'No filter'}
          </button>
          <button
            onClick={() => setFilterType(null)}
          >
            X
          </button>
        </div>
        <div className='options_div'/>
        <div className={`options ${typeOptions ? '': 'display'}`} >
          { types.map((type) =>
            <button
              title={type.id}
              key={type.id}
              onClick={() => {
                setFilterType(type.id);
                setTypeOptions(false);
              }}
            >
              <type.icon />
            </button>
          )}
        </div>
      </div>
      <button
            onClick={() => current ? setCurrent(false) : setCurrent(true)}
          >
            X
      </button>
    </div>
  )
}

export default SkillsFilter