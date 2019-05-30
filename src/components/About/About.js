import React, { Component } from "react";

import { Waypoint } from "react-waypoint";

import styles from "./About.css";
import myPhoto from "../../assets/img/about/meToo.jpg";
import camping from "../../assets/img/about/camping.jpg";
import coding from "../../assets/img/about/project.jpg";
import sammy from "../../assets/img/about/samnme.jpg";
import sophie from "../../assets/img/about/sophnme.jpg";

class About extends Component {
  render() {
    return (
      <div id="about" className={styles.About}>
        <div className={styles.Left}>
          <img className={styles.myPhoto} src={myPhoto} alt="Jared Avila" />
          <h1 className={styles.title}>Hi, my name is Jared</h1>
          <p>
            I am a full-stack software engineer and I live in beautiful
            Sunnyvale, CA with my wife and two kids where I was born and raised.
          </p>
          <p>
            I built my first webpage when I was fifteen years old and it has
            been a passion of mine since. I studied software engineering at West
            Valley College, and in 2018 I graduated from a coding bootcamp
            called Coding Dojo, where I learned three full technology stacks in
            three intense months.
          </p>
          <p>
            In my free time I enjoy spending time with my family, BBQing,
            playing guitar, cooking and hiking.
          </p>
          <div className={styles.Left_photos}>
            <img className={styles.camping} src={camping} alt="Me camping" />
            <img
              className={styles.coding}
              src={coding}
              alt="Me presenting a project"
            />
          </div>
        </div>
        <div className={styles.Right}>
          <div className={styles.Right_photos}>
            <img
              className={styles.sammy}
              src={sammy}
              alt="Me and Sammy, my son"
            />
            <img
              className={styles.sophie}
              src={sophie}
              alt="Me and Sophie, my daughter"
            />
          </div>
          <h2 className={styles.quote}>
            <i class="fas fa-quote-left" /> Eat the delicious food. Walk in the
            sunshine. Jump in the ocean. Say the truth that you're carrying in
            your heart like hidden treasure. Be silly. Be kind. Be weird.
            There's no time for anything else.
          </h2>
          <h3 className={styles.quote_name}>-Keanu Reeves</h3>
          <p>
            I am a very determined, hard-working individual that prides myself
            having strong integrity and character. When I put my will towards
            something there is little that can hold me back.
          </p>
          <p>
            My entire career I have worked in management and training, a few
            years back I decided to alter my career path to include my love for
            application development and web design. I love to work within a team
            and help elevate everyone for the greater good.
          </p>
          <p>
            My experience in customer relations makes me an excellent
            communicator and an asset towards client/customer interaction on any
            level.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
