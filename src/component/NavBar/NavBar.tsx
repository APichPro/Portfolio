import { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import Links from '../Links/Links';

const NavBar = (
  { titles } : any
) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className='navbar'>
      <div
        className={`navbar_menu ${toggleMenu ? 'menu_overlay': ''}`}
        id="hamburger-menu"
        onClick={() => toggleMenu ? setToggleMenu(false) : setToggleMenu(true)}
      >
        <div className="menu-bar1"></div>
        <div className="menu-bar2"></div>
        <div className="menu-bar3"></div>
      </div>
      <div className={`navbar_titles ${toggleMenu ? '': 'overlay'}`}>
        <ul>
        {titles.map((title: any) => (
            <li key={title.text} className='navbar_title'>
              <div className='navbar_title_div'/>
              <title.icon className='navbar_title_icon' width="40" height="40" />
              <Link to={`/${title.text}`}>
                {title.text}
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