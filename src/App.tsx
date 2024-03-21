import { titles } from './data/constant';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './router/AnimatedRoutes';
import {IntlProvider} from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import { useState } from 'react';
import Links from './component/common/Links/Links';
import LocalChange from './component/common/LocalChange/LocalChange';
import NavBar from './component/common/NavBar/NavBar';


function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH)
  return (  
    <IntlProvider
    messages={messages[locale]}
    locale={locale}
    defaultLocale={LOCALES.ENGLISH}
  >
      <BrowserRouter>
        <NavBar titles={titles} />
        <div className='background_image' />
        <div className='app'>
            <AnimatedRoutes></AnimatedRoutes>
        </div>
        <div className='locales'>
          <LocalChange locale={locale} setLocale={setLocale}/>
        </div>
        <div className='links'>
          <Links locale={locale} setLocale={setLocale}/>
        </div>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;

