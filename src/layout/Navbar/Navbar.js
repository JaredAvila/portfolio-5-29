import React, { Fragment } from "react";

// components
import NavLink from "./NavLink/NavLink";
import SiteId from "../../components/SiteId/SiteId";
import Button from "../../UI/Button/Button";

// css style sheets
import styles from "./Navbar.css";

const Navbar = props => {
  return (
    <Fragment>
      <nav className={styles.Navbar}>
        <SiteId name={props.name} />
        <ul className={styles.List}>
          {props.navigation.map(nav => (
            <NavLink key={nav.label} url={nav.url}>
              {nav.label}
            </NavLink>
          ))}
          <Button>Contact Me</Button>
        </ul>
        <div className={styles.MenuBtn} onClick={props.clicked}>
          <i className="fas fa-bars" />
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
