import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavItems({ label, subItems, path }) {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuVisible(prevState => !prevState);
  };

  return (
    <div className="nav-item">
      <ul>
        <li onClick={toggleSubmenu}>
        <Link to={path}>{label}</Link>
        </li>
      </ul> 
      {subItems && subItems.length > 0 && isSubmenuVisible && (
        <ul className="submenu">
          {subItems.map((subItem, index) => (
            <li key={index}>
              {/* <a href="#">{subItem.label}</a> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavItems;
