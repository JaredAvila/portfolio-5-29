import React from "react";

import Landing from "../../components/Landing/Landing";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import Contact from "../../components/Contact/Contact";

const Main = () => {
  return (
    <div>
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Main;
