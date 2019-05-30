import React from "react";
import styles from "./NavLink.css";

const NavLink = props => {
  return (
    <a className={styles.navLink} href={props.url}>
      {props.children}
    </a>
  );
};

export default NavLink;
