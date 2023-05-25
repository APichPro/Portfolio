import { LOCALES } from "../../../i18n/locales";
import "./LocalChange.css";
import { useState } from "react";

const LocalChange = ({locale, setLocale}: any) => {
  const [options, setOptions] = useState(false);
  return (
    <div
      className="select_locales"
    >
      <div className={`options_locales ${options ? '': 'display'}`} >
        { Object.entries(LOCALES).map(([key, value]) =>
            <button
              key={key}
              onClick={() => {
                setLocale(value)
                setOptions(false)}}
            >
              {value.split("-",2)[1]}
            </button>
        )}
      </div>
      <div className='options_locales_div'/>
      <button
        onClick={() => options ? setOptions(false) : setOptions(true)}
      >
        {locale.split("-",2)[1]}
      </button>
    </div>
  )
}

export default LocalChange;
