import React from "react";

// css style sheets
import styles from "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={styles.Footer}>
      <p>
        Jared Avila Designs | <i className="far fa-copyright" /> {year}
      </p>
    </div>
  );
};

export default Footer;
