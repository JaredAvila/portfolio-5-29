import React from "react";

import styles from "./ProjectPage.css";

const ProjectPage = props => {
  return (
    <div className={styles.ProjectPage}>
      <div className={styles.top}>
        <img src={props.location.state.img} alt="" />
        <h1 className={styles.title}>{props.location.state.name}</h1>
        <ul className={styles.List}>
          <li className={styles.techUsed}>Technologies Used:</li>
          {props.location.state.techUsed.map(tech => (
            <li className={styles.Item} key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.bottom}>
        <div className={styles.desc}>
          <h1>Description:</h1>
          <p>{props.location.state.desc}</p>
        </div>
        <div className={styles.Links}>
          <a
            href={props.location.state.webLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.Link}
          >
            View Live Demo: <i className="fas fa-globe" />
          </a>
          <a
            href={props.location.state.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.Link}
          >
            View Code: <i className="fab fa-github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
