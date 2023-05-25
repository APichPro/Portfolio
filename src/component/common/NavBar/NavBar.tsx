import { useState } from 'react';
import './NavBar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Links from '../Links/Links';
import { FormattedMessage } from 'react-intl';

const NavBar = (
  { titles } : any
) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [detailPage, setDetailPage] = useState(location.pathname.startsWith('/works/'));

  return (
    <nav className='navbar'>
      <div
        className={`navbar_menu ${toggleMenu ? 'menu_overlay': ''}  ${detailPage ? 'detail_overlay': ''}`}
        id="hamburger-menu"
        onClick={
          () => toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
        }
      >
        <div className="menu-bar1"></div>
        <div className="menu-bar2"></div>
        <div className="menu-bar3"></div>
      </div>
      <div className={`navbar_titles ${toggleMenu ? '': 'overlay'}`}>
        <ul>
        {titles.map((title: any) => (
            <li key={title.id} className='navbar_title'>
              <div className='navbar_title_div'/>
              <Link to={`/${title.id}`}>
                <title.icon strokeWidth="1.5" className='navbar_title_icon' />
                <FormattedMessage id={title.id} />
              </Link>
            </li>
            
        ))}
        </ul>
        <div className='navbar_links'>
          <Links />
        </div>
      </div>
    </nav>
  )
}

export default NavBar;