import React, { Component } from "react";
import { Waypoint } from "react-waypoint";

// components
import Skill from "./Skill/Skill";

// images

// languages
import js from "../../assets/img/skills/javascript.png";
import html from "../../assets/img/skills/html.jpg";
import css from "../../assets/img/skills/css.jpg";
import sass from "../../assets/img/skills/sass.png";
import ts from "../../assets/img/skills/typescript.png";
import python from "../../assets/img/skills/python.jpg";
import java from "../../assets/img/skills/Java.jpg";

// frameworks
import angular from "../../assets/img/skills/angular.png";
import node from "../../assets/img/skills/node.jpg";
import django from "../../assets/img/skills/django.png";
import flask from "../../assets/img/skills/flask.png";
import spring from "../../assets/img/skills/springboot.png";

// libraries
import react from "../../assets/img/skills/react.png";
import redux from "../../assets/img/skills/redux.png";
import express from "../../assets/img/skills/express.png";
import jquery from "../../assets/img/skills/jquery.png";

// databases
import mysql from "../../assets/img/skills/mySQL.png";
import mongo from "../../assets/img/skills/MongoDB.png";

// css style sheets
import styles from "./Skills.css";

class Skills extends Component {
  state = {
    containerClasses: styles.hide,
    skills: [
      { img: js, name: "JavaScript" },
      { img: html, name: "HTML5" },
      { img: css, name: "CSS3" },
      { img: sass, name: "Sass" },
      { img: ts, name: "TypeScript" },
      { img: python, name: "Python" },
      { img: java, name: "Java" }
    ],
    langClass: styles.skillActive,
    frameClass: "",
    libClass: "",
    dataClass: ""
  };

  onSkillClickHandler = skill => {
    let skillArray = [];
    switch (skill) {
      case "lang":
        skillArray = [
          { img: js, name: "JavaScript" },
          { img: html, name: "HTML5" },
          { img: css, name: "CSS3" },
          { img: sass, name: "Sass" },
          { img: ts, name: "TypeScript" },
          { img: python, name: "Python" },
          { img: java, name: "Java" }
        ];
        this.setState({
          skills: skillArray,
          langClass: styles.skillActive,
          frameClass: "",
          libClass: "",
          dataClass: ""
        });
        break;
      case "frame":
        skillArray = [
          { img: angular, name: "Angular" },
          { img: node, name: "Node.js" },
          { img: django, name: "Django" },
          { img: flask, name: "Flask" },
          { img: spring, name: "SpringBoot" }
        ];
        this.setState({
          skills: skillArray,
          langClass: "",
          frameClass: styles.skillActive,
          libClass: "",
          dataClass: ""
        });
        break;
      case "lib":
        skillArray = [
          { img: react, name: "React" },
          { img: redux, name: "Redux" },
          { img: express, name: "Express" },
          { img: jquery, name: "jQuery" }
        ];
        this.setState({
          skills: skillArray,
          langClass: "",
          frameClass: "",
          libClass: styles.skillActive,
          dataClass: ""
        });
        break;
      case "data":
        skillArray = [
          { img: mysql, name: "MySQL" },
          { img: mongo, name: "MongoDB" }
        ];
        this.setState({
          skills: skillArray,
          langClass: "",
          frameClass: "",
          libClass: "",
          dataClass: styles.skillActive
        });
        break;
      default:
        return;
    }
  };

  onEnterHandler = () => {
    this.setState({ containerClasses: styles.show });
  };

  render() {
    return (
      <div className={styles.Skills} id="skills">
        <div id={styles.container} className={this.state.containerClasses}>
          <Waypoint onEnter={this.onEnterHandler}>
            <h1 className={styles.title}>Technical Skills</h1>
          </Waypoint>
          <div className={styles.skillNames}>
            <h3
              className={this.state.langClass}
              onClick={() => this.onSkillClickHandler("lang")}
            >
              Languages
            </h3>
            <h3
              className={this.state.frameClass}
              onClick={() => this.onSkillClickHandler("frame")}
            >
              Frameworks
            </h3>
            <h3
              className={this.state.libClass}
              onClick={() => this.onSkillClickHandler("lib")}
            >
              Libraries
            </h3>
            <h3
              className={this.state.dataClass}
              onClick={() => this.onSkillClickHandler("data")}
            >
              Databases
            </h3>
          </div>
          <div className={styles.skillList}>
            {this.state.skills.map(skill => {
              return (
                <Skill key={skill.name} img={skill.img}>
                  {skill.name}
                </Skill>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
