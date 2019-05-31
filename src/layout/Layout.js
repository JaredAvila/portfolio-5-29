import React, { Component } from "react";
import { Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Main from "../pages/Main/Main";
import ProjectPage from "../pages/ProjectPage/ProjectPage";
import Sidedrawer from "./Sidedrawer/Sidedrawer";
import Resume from "../pages/Resume/Resume";

class Layout extends Component {
  state = {
    name: "Jared Avila",
    navigation: [
      {
        label: "Home",
        url: "/"
      },
      {
        label: "About",
        url: "/#about"
      },
      {
        label: "Skills",
        url: "/#skills"
      },
      {
        label: "Projects",
        url: "/#projects"
      },
      {
        label: "Resume",
        url: "/resume"
      }
    ],
    sideDrawerNav: [
      {
        label: "About",
        url: "/#about"
      },
      {
        label: "Skills",
        url: "/#skills"
      },
      {
        label: "Projects",
        url: "/#projects"
      },
      {
        label: "Resume",
        url: "/resume"
      },
      {
        label: "Contact",
        url: "/#contact"
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
        <Route path="/resume" component={Resume} />
        <Footer />
      </div>
    );
  }
}

export default Layout;
