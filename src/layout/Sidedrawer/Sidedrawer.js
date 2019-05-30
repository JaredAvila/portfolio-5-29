import React, { Fragment } from "react";

import NavLink from "../Navbar/NavLink/NavLink";
import Backdrop from "../../UI/Backdrop/Backdrop";

import styles from "./Sidedrawer.css";

const Sidedrawer = props => {
  let classNames = [styles.Sidedrawer, styles.Close];
  if (props.open) {
    classNames = [styles.Sidedrawer, styles.Open];
  }
  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={classNames.join(" ")}>
        <div className={styles.title}>
          <h1>Jared Avila</h1>
        </div>
        <nav className={styles.List}>
          {props.navigation.map(nav => (
            <NavLink key={nav.label} url={nav.url} type="drawer">
              {nav.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </Fragment>
  );
};

export default Sidedrawer;
