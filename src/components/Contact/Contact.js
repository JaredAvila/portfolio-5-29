import React, { Component } from "react";

import styles from "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div id="contact" className={styles.Contact}>
        <div className={styles.Form}>
          <h2>Let's connect</h2>
          <form
            action="https://formspree.io/jared.c.avila@gmail.com"
            method="POST"
          >
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea
              type="text"
              name="message"
              placeholder="Enter your message"
              cols="30"
              rows="1"
            />
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className={styles.Info}>
          <h2>Contact Me</h2>
          <p>Let's work together! I'm always open to new opportunities</p>
          <p>
            Send me an email so we can connect and build something together!
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
