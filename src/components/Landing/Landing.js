import React, { Component } from "react";

import styles from "./Landing.css";

class Landing extends Component {
  state = {
    headline: "",
    subline: ""
  };

  componentDidMount() {
    this.intro();
  }

  componentWillUnmount() {}

  intro = () => {
    let i = 0;
    let j = 0;
    let newHeadLine = "";
    let newSubLine = "";
    const txt = "Hello, my name is Jared Avila";
    const txt2 = "and I am a Software Developer.  =)";
    this.intro1(i, txt, newHeadLine);
    setTimeout(() => this.intro2(j, txt2, newSubLine), 3000);
  };

  intro1 = (i, txt, newHeadLine) => {
    if (i < txt.length) {
      newHeadLine += txt.charAt(i);
      this.setState({ headline: newHeadLine });
      i++;
      setTimeout(() => this.intro1(i, txt, newHeadLine), 80);
    }
  };

  intro2 = (j, txt2, newSubLine) => {
    if (j < txt2.length) {
      newSubLine += txt2.charAt(j);
      this.setState({ subline: newSubLine });
      j++;
      setTimeout(() => this.intro2(j, txt2, newSubLine), 80);
    }
  };

  render() {
    const gitHubClasses = [styles.links, styles.github];
    const linkedInClasses = [styles.links, styles.linkedin];

    return (
      <div className={styles.Landing}>
        <h1 className={styles.headLine}>{this.state.headline}</h1>
        <h2 className={styles.subLine}>{this.state.subline}</h2>
        <div className={styles.linkContainer}>
          <a
            className={gitHubClasses.join(" ")}
            href="https://github.com/JaredAvila"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
          </a>
          <a
            className={linkedInClasses.join(" ")}
            href="https://www.linkedin.com/in/jared-avila/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" />
          </a>
        </div>
        <a className={styles.projectLink} href="#projects">
          See my work <i className="fas fa-arrow-circle-right" />
        </a>
      </div>
    );
  }
}

export default Landing;
