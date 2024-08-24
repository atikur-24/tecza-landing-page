import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Responsive = ({ menuConfig }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setOpenSubmenu(null); // Close any open submenus when the menu toggles
  };

  const toggleSubmenu = (name) => {
    setOpenSubmenu(openSubmenu === name ? null : name); // Toggle the submenu
  };

  return (
    <div className="responsive-navbar-container">
      {isMobileMenuOpen ? <IoMdClose style={{ cursor: "pointer" }} size={24} onClick={toggleMobileMenu} /> : <HiOutlineMenu style={{ cursor: "pointer" }} size={24} onClick={toggleMobileMenu} />}

      {isMobileMenuOpen && (
        <nav className="mobile-menu">
          <ul className="mobile-menu-list">
            {menuConfig.map((menuItem) =>
              menuItem.submenu ? (
                <li key={menuItem.name} className="mobile-menu-item">
                  <span style={{ cursor: "pointer" }} onClick={() => toggleSubmenu(menuItem.name)}>
                    <span className="mobile-menu-link">{menuItem.name}</span>
                    <FiChevronDown size={20} />
                  </span>
                  {openSubmenu === menuItem.name && (
                    <ul className="mobile-submenu">
                      {menuItem.submenu.map((subItem) => (
                        <li className="submenu-item" key={subItem.name}>
                          <FiChevronRight />
                          <Link to={subItem.path} onClick={toggleMobileMenu} className="mobile-submenu-link">
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={menuItem.name} className="mobile-menu-item">
                  <Link to={menuItem.path} onClick={toggleMobileMenu} className="mobile-menu-link">
                    {menuItem.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Responsive;
