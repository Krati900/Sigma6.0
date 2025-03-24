import React from "react";

function Header() {
  return (
    <div>
      <header>
        <div className="logo">
          <div className="icon-text">
            <i></i>Book Shell
          </div>
        </div>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>
              Books
              <ul>
                <li>Add Books</li>
                <li>Manage Books</li>
              </ul>
            </li>
            <li>Login/Log Out</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
