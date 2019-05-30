import React, { Component } from "react";
import { Route } from "react-router-dom";

import Navbar from "./layout/Navbar/Navbar";
import Footer from "./layout/Footer/Footer";
import Main from "./pages/Main/Main";
import ProjectPage from "./pages/ProjectPage/ProjectPage";

class App extends Component {
  state = {
    name: "Jared Avila",
    navigation: [
      {
        label: "About",
        url: "#about"
      },
      {
        label: "Skills",
        url: "#skills"
      },
      {
        label: "Projects",
        url: "#projects"
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <Navbar navigation={this.state.navigation} name={this.state.name} />
        <Route path="/" exact component={Main} />
        <Route path="/project" component={ProjectPage} />
        <Footer />
      </div>
    );
  }
}

export default App;
