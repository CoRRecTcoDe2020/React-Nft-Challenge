import React from "react";
import punkLogo from "../assets/header/logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";
import "./Header.css";

const Header = () => {
    return (

    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo" alt="" />
      </div>

    <div className="searchContainer">
      <div className="searchIconContainer">
        <img src={searchIcon} />
      </div>
      <input className="searchInput" placeholder="Collection, items or user..." />
      </div>

    <div>
      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>    
    </div>
      
    <div className="headerActions">
      <div className="themeSwitchContainer">
        <img src={themeSwitchIcon} />
      </div>
    </div>

    <div className="loginButton">GeT IN</div>
      
    </div>
    );
}

export default Header;