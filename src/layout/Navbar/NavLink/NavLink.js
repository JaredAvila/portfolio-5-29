import React from "react";
import styles from "./NavLink.css";

const NavLink = props => {
  let classNames = [styles.navLink];
  if (props.type === "drawer") {
    classNames = [styles.drawerLink];
  }
  return (
    <a className={classNames} href={props.url}>
      {props.children}
    </a>
  );
};

export default NavLink;
