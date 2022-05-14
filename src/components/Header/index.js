import React from "react";
import './index.css';
import Logo from '../../images/logo.png'

const Header = () => {
  return (
    <div className="header_container">
        <img className="logo" src={Logo} alt="Logo" />
        <h2 className="header_title">Discografia</h2>
    </div>
  );
};

export default Header;
