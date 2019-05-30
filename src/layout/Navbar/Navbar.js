import React from "react";
import NavLink from "./NavLink/NavLink";
import SiteId from "../../components/SiteId/SiteId";
import Button from "../../UI/Button/Button";
import styles from "./Navbar.css";

const Navbar = props => {
  return (
    <nav className={styles.Navbar}>
      <SiteId name={props.name} />
      <ul>
        {props.navigation.map(nav => (
          <NavLink key={nav.label} url={nav.url}>
            {nav.label}
          </NavLink>
        ))}
        <Button>Contact Me</Button>
      </ul>
    </nav>
  );
};

export default Navbar;
