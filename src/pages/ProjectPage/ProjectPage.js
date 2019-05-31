import React from "react";

import { Link } from "react-router-dom";
import styles from "./ProjectPage.css";

const ProjectPage = props => {
  console.log(props.location.state);
  return (
    <div className={styles.ProjectPage}>
      <h1>Project page</h1>
      <Link to="/">Back</Link>
    </div>
  );
};

export default ProjectPage;
