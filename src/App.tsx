import NavBar from './component/NavBar/NavBar';
import { titles } from './data/constant';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './router/AnimatedRoutes';
import Links from './component/Links/Links';
import {IntlProvider} from "react-intl";


function App() {
  return (
    <IntlProvider locale='en' defaultLocale="en">
      <BrowserRouter>
        <NavBar titles={titles} />
        <div className='background_image' />
        <div className='app'>
            <AnimatedRoutes></AnimatedRoutes>
        </div>
        <div className='links'>
          <Links />
        </div>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
