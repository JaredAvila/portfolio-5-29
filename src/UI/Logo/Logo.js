import React from "react";
import siteLogo from "../../assets/img/logo-jaredavila-com.png";
import classes from "./Logo.css";

const Logo = props => (
  <div className={classes.logo}>
    <img src={siteLogo} alt="JaredAvila.com" />
  </div>
);

export default Logo;
