import React from "react";
import './index.css';
import Logo from '../../images/logo.png'

const Header = () => {
  return (
    <div className="header_container">
        <a href="/"><img className="logo" src={Logo} alt="Logo" /></a>
        <h2 className="header-title">Discografia</h2>
    </div>
  );
};

export default Header;
