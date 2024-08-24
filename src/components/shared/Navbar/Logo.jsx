import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../../../public/images/logo/logo.png";

const Logo = () => {
  return (
    <Link to="/" className="navbar-logo">
      <img src={logoImg} alt="Tecza" />
    </Link>
  );
};

export default Logo;
