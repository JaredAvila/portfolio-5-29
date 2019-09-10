import React, { Component } from "react";
import Project from "./Project/Project";
import { Waypoint } from "react-waypoint";

import freqFooding from "../../assets/img/projects/freq_fooding.png";
import ticTacToe from "../../assets/img/projects/tic-tac-toe.png";
import familyCoaching from "../../assets/img/projects/Family Coaching Solutions _ Certified Christian Counselor _ Life Coach - Google Chrome 5_9_2019 2_35_50 PM.png";
import burgerTime from "../../assets/img/projects/Burger Time.png";
import hcc from "../../assets/img/projects/hcc.png";

import styles from "./Projects.css";

class Projects extends Component {
  state = {
    projects: [
      {
        name: "Frequent Fooding",
        github: "https://github.com/JaredAvila/freq_fooding",
        webLink: "https://naughty-darwin-1026df.netlify.com/",
        img: freqFooding,
        techUsed: [
          "HTML5",
          "CSS/Sass",
          "JavaScript",
          "Webpack",
          "Axios",
          "Edamame API"
        ],
        desc:
          "A single page recipe app that utilizes modern core JavaScript, SCSS and HTML to access over 2 million recipes provided throught the Edamame API. I use Axios to access the api and I use Webpack to bundle the project and take care of config."
      },
      {
        name: "Family Coaching",
        github: "https://github.com/JaredAvila/family_coaching_site",
        webLink: "https://gifted-volhard-f55eeb.netlify.com/contact",
        img: familyCoaching,
        techUsed: ["React", "JSX", "JavaScript", "CSS Modules", "HTML5"],
        desc:
          "A webpage I built for a client that wanted to boost his life coaching business. I used React and JSX with modern semantic HTML5, CSS and Javascript to create a fully interactive user experience. Impelmentd React routing with advanced modular CSS to create a smooth and seamless user experience"
      },
      {
        name: "Tic-Tac-Toe",
        github: "https://github.com/JaredAvila/Tic-Tac-Toe",
        webLink: "https://reverent-spence-b9638e.netlify.com/",
        img: ticTacToe,
        techUsed: ["JavaScript", "CSS", "HTML"],
        desc:
          "A simple Tic-Tac-Toe game made with JavaScript, CSS and HTML. Play with a friend!"
      },
      {
        name: "Burger Time",
        github: "https://github.com/JaredAvila/Burger_Time-React-",
        webLink: "https://gracious-clarke-bc9281.netlify.com/",
        img: burgerTime,
        techUsed: [
          "React",
          "Redux",
          "JSX/HTML5",
          "CSS",
          "JavaScript",
          "Webpack",
          "Axios",
          "Firebase"
        ],
        desc:
          "A burger builder and order tracker appliction build with React and Redux. I use CSS modules (setup via Webpack config) to create modularized stylesheets. Axios is used to send and recieve data from a Firebase database."
      },
      {
        name: "Health Claims Concierge",
        github: "/",
        webLink: "https://www.healthclaimsconcierge.com/",
        img: hcc,
        techUsed: ["WordPress", "PHP", "CSS", "HTML"],
        desc:
          "A site that I built and deplployed for a client. Client wanted to use Wordpress so she could easily manager her content and hav easy access to anaylitics and other plug ins."
      }
    ],
    fadeClass: styles.hidden
  };

  onEnterHandler = () => {
    this.setState({ fadeClass: styles.Projects });
  };

  render() {
    return (
      <div id="projects" className={this.state.fadeClass}>
        <Waypoint onEnter={this.onEnterHandler}>
          <h1 className={styles.title}>Projects</h1>
        </Waypoint>
        <div className={styles.container}>
          {this.state.projects.map(proj => (
            <Project
              key={proj.name}
              name={proj.name}
              github={proj.github}
              webLink={proj.webLink}
              img={proj.img}
              techUsed={proj.techUsed}
              desc={proj.desc}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
