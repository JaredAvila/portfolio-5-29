import React, { Component } from "react";
import Project from "./Project/Project";

import freqFooding from "../../assets/img/projects/freq_fooding.png";
import meanMarketplace from "../../assets/img/projects/mean_marketplace.png";
import familyCoaching from "../../assets/img/projects/Family Coaching Solutions _ Certified Christian Counselor _ Life Coach - Google Chrome 5_9_2019 2_35_50 PM.png";
import burgerTime from "../../assets/img/projects/Burger Time.png";

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
        name: "Burger Time",
        github: "https://github.com/JaredAvila/Burger_Time-React-",
        webLink: "https://hardcore-hamilton-3cbc40.netlify.com/",
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
        name: "Family Coaching",
        github: "https://github.com/JaredAvila/family_coaching_site",
        webLink: "https://musing-kepler-2c0573.netlify.com/",
        img: familyCoaching,
        techUsed: ["HTML5", "CSS/Sass", "JavaScript"],
        desc:
          "A webpage I built for a client that wanted to boost his life coaching business. I used a CSS pre-processor, Sass, with modern HTML and Javascript to create a fully interactive user experience. Use of Sass mixins to create a responsive site that creates a great user experience on all devices."
      },
      {
        name: "Mean Marketplace",
        github: "https://github.com/JaredAvila/mean_store",
        webLink: "http://3.18.225.118/",
        img: meanMarketplace,
        techUsed: [
          "Angular 7",
          "TypeScript",
          "SCSS",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Paypal API",
          "Passport and JWT"
        ],
        desc:
          "An ecommerce application build using Angular, Node, Epxress and MongoDB. I use a CSS pre-processor, SCSS, to create dynamic styles and a responsive design. Fully validated login/registration system validated on the backend and a database to store customer data. Font-end authentication handled via Passport and JWT libraries. Also set up Paypal sandbox for payment handling."
      }
    ]
  };

  render() {
    return (
      <div id="projects" className={styles.Projects}>
        <h1 className={styles.title}>Projects</h1>
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
