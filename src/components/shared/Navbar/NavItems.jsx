import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavItems = ({ menuConfig }) => {
  return (
    <nav className="navbar-wrap">
      <ul className="menu-container">
        {menuConfig?.map((item, idx) =>
          item?.submenu ? (
            <li key={idx} className="submenu-items">
              {item.name}
              <FiChevronDown />
              <ul className="submenu">
                {item?.submenu?.map((submenuItem, idx) => (
                  <li key={idx}>
                    <Link to={submenuItem.path}>{submenuItem.name}</Link>
                  </li>
                ))}
              </ul>{" "}
            </li>
          ) : (
            <li className="" key={idx}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default NavItems;
