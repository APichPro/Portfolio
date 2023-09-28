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
            {filterContext ? (<filterContext.icon height={50} width={50} />) : 'No filter'}
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
                setFilterContext(context);
                setContextOptions(false);
              }}
            >
              <context.icon height={50} width={50}/>
            </button>
          )}
        </div>
      </div>
      <div className="select">
        <div>
          <button
            onClick={() => typeOptions ? setTypeOptions(false) : setTypeOptions(true)}
          >
            {filterType ? <filterType.icon height={50} width={50} /> : 'No filter'}
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
                setFilterType(type);
                setTypeOptions(false);
              }}
            >
              <type.icon height={50} width={50}/>
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