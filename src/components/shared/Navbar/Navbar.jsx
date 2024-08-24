import React from "react";
import menuConfig from "../../../../public/data/menuConfig";
import Button from "../../ui/Button";
import Logo from "./Logo";
import NavItems from "./NavItems";
import Responsive from "./Responsive";
import "./navbar.css";
import "./responsive.css";

const Navbar = () => {
  return (
    <header>
      <div className="navbar-container">
        <Logo />
        {/* for large screen */}
        <div className="navbar-right-side">
          <NavItems menuConfig={menuConfig} />
          <Button variant="outline">Company Profile</Button>
        </div>
        {/* for small screen */}
        <div id="responsive-navbar">
          <Responsive menuConfig={menuConfig} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
