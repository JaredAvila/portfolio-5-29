import React from "react";
import Logo from "../../UI/Logo/Logo";

import styles from "./SiteId.css";

const SiteId = props => {
  return (
    <a href="https://www.jaredavila.com/" className={styles.siteId}>
      <Logo />
      <h1 className={styles.title}>{props.name}</h1>
    </a>
  );
};

export default SiteId;
