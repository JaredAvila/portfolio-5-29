import React, { Component } from "react";

import { Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Main from "../pages/Main/Main";
import ProjectPage from "../pages/ProjectPage/ProjectPage";
import Sidedrawer from "./Sidedrawer/Sidedrawer";

class Layout extends Component {
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
    ],
    sideDrawerNav: [
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
      },
      {
        label: "Contact",
        url: "#contact"
      }
    ],
    showSideDrawer: false
  };

  sideDrawerClose = () => {
    this.setState({ showSideDrawer: false });
  };

  toggleSideDrawer = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <div>
        <Navbar
          navigation={this.state.navigation}
          name={this.state.name}
          clicked={this.toggleSideDrawer}
        />
        <Sidedrawer
          closed={this.sideDrawerClose}
          open={this.state.showSideDrawer}
          navigation={this.state.sideDrawerNav}
        />
        <Route path="/" exact component={Main} />
        <Route path="/project" component={ProjectPage} />
        <Footer />
      </div>
    );
  }
}

export default Layout;
