import React from 'react'
import './navbar.css'
import navbar_logo from '../../assets/assets/navbar.png'
import logo_light from '../../assets/assets/logo-white.png'
import logo_dark from '../../assets/assets/logo-black.png'
import search_icon_light from '../../assets/assets/search-w.png'
import search_icon_dark from '../../assets/assets/search-b.png'
import toggle_dark from '../../assets/assets/day.png'
import toggle_light from '../../assets/assets/night.png'

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div className='navbar'>
      <img src={theme == 'light'? logo_dark : logo_light} alt="" className='logo' />
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About Us</li>
      </ul>
      <div className='search-box'>
        <input type="text" placeholder='Search' />
        <img src={theme === 'light' ? search_icon_dark : search_icon_light} alt="" />
      </div>
      <img onClick={() => { toggle_mode() }} src={theme === 'light' ? toggle_light : toggle_dark} alt="" className='toggle-icon' />
    </div>
  );
};

export default Navbar;
