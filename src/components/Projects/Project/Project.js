import React from "react";

import { Link } from "react-router-dom";

import styles from "./Project.css";

const Project = props => {
  const techUsed = [];
  props.techUsed.map(tech => {
    return techUsed.push(tech);
  });
  return (
    <div className={styles.Project}>
      <img src={props.img} alt={props.name} />
      <h1 className={styles.title}>{props.name}</h1>
      <p>Tech Used: {techUsed.join(", ")}</p>
      <div className={styles.links}>
        <a href={props.webLink} target="_blank" rel="noopener noreferrer">
          <i className="fas fa-globe" />
        </a>
        <a href={props.github} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github" />
        </a>
        <Link
          className={styles.Link}
          to={{
            pathname: "/project",
            state: {
              ...props
            }
          }}
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default Project;
