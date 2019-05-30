import React from "react";

import styles from "./Button.css";

const Button = props => {
  return (
    <button className={styles.Button} onClick={props.click}>
      {props.children}
    </button>
  );
};

export default Button;
