import React from "react";
import Logo from './Logo.jsx';
import { HeaderData } from "./HeaderData.jsx";
import NavList from './Nav/NavList.jsx';

function Header() {
  return (
    <div>
      <header className="main-header">
        <div className="logo">
         <Logo logoText={HeaderData[0].logo.text}></Logo>
        </div>
        <nav className="nav-items">
          <NavList navData={HeaderData[1].navItems}></NavList>
        </nav>
      </header>
    </div>
  );
}

export default Header;

