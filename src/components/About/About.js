import React, { Component } from "react";

import { Waypoint } from "react-waypoint";

import styles from "./About.css";
import myPhoto from "../../assets/img/about/meToo.jpg";

class About extends Component {
  state = {
    styleLeft: [styles.Left, styles.hidden_left],
    styleRight: [styles.Right, styles.hidden_right]
  };

  onLeftEnterHandler = () => {
    const newStyles = [styles.Left, styles.show];
    this.setState({ styleLeft: newStyles });
  };
  onRightEnterHandler = () => {
    const newStyles = [styles.Right, styles.show];
    this.setState({ styleRight: newStyles });
  };

  render() {
    return (
      <div id="about" className={styles.About}>
        <div className={this.state.styleLeft.join(" ")}>
          <img className={styles.myPhoto} src={myPhoto} alt="Jared Avila" />
          <h1 className={styles.title}>Hi, my name is Jared</h1>
          <Waypoint onEnter={this.onLeftEnterHandler}>
            <p>
              I am a full-stack software engineer and I live in beautiful
              Sunnyvale, CA where I was born and raised. I specialize in
              Javascript and love to develope on the front-end.
            </p>
          </Waypoint>
          <p>
            I built my first webpage when I was fifteen years old and it has
            been a passion of mine since. I studied software engineering at West
            Valley College and graduated from a coding bootcamp called Coding
            Dojo, where I learned three full technology stacks in three intense
            months. My education is never complete, every day I am learning and
            growing.
          </p>
          <p>
            In my free time I enjoy spending time with my family, BBQing,
            playing guitar, cooking and hiking.
          </p>
        </div>
        <div className={this.state.styleRight.join(" ")}>
          <h2 className={styles.quote}>
            <i className="fas fa-quote-left" /> Eat the delicious food. Walk in
            the sunshine. Jump in the ocean. Say the truth that you're carrying
            in your heart like hidden treasure. Be silly. Be kind. Be weird.
            There's no time for anything else.
          </h2>
          <h3 className={styles.quote_name}>-Keanu Reeves</h3>
          <Waypoint onEnter={this.onRightEnterHandler}>
            <p>
              I am a very determined, hard-working individual that prides myself
              having strong integrity and character. When I put my will towards
              something there is little that can hold me back.
            </p>
          </Waypoint>

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
