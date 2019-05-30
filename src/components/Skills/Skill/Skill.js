import React from "react";

import styles from "./Skill.css";

const Skill = props => {
  return (
    <div className={styles.Skill}>
      <h1>{props.children}</h1>
      <img src={props.img} alt="" />
    </div>
  );
};

export default Skill;
