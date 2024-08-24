import React from "react";
import Button from "../../ui/Button";
import Logo from "./Logo";
import "./navbar.css";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <header>
      <div className="navbar-container">
        <Logo />
        <div className="navbar-right-side">
          <NavItems />
          <Button variant="outline">Company Profile</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
