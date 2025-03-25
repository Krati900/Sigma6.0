import React from "react";
import Logo from './Logo.jsx';
import { HeaderData } from "./HeaderData.jsx";
import NavList from './Nav/NavList.jsx';

function Header() {
  return (
    <div>
      <header>
        <div className="logo">
         <Logo logoText={HeaderData[0].logo.text}></Logo>
        </div>
        <nav>
          <NavList navData={HeaderData[1].navItems}></NavList>
        </nav>
      </header>
    </div>
  );
}

export default Header;

