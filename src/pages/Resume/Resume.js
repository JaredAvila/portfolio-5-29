import React from "react";

import resume from "../../assets/resume/JaredAvilaResume.pdf";
import styles from "./Resume.css";

const Resume = () => {
  return (
    <div className={styles.Resume}>
      <iframe
        className={styles.doc}
        title="myResume"
        src={resume}
        height="800"
        width="600"
      />
      <iframe
        className={styles.phone}
        title="myResume"
        src={resume}
        height="500"
        width="300"
      />
    </div>
  );
};

export default Resume;
