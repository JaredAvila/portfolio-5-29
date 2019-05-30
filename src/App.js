import React from "react";
import { Route } from "react-router-dom";

import Navbar from "./layout/Navbar/Navbar";
import Footer from "./layout/Footer/Footer";
import Main from "./pages/Main/Main";
import ProjectPage from "./pages/ProjectPage/ProjectPage";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Route path="/" exact component={Main} />
      <Route path="/project" component={ProjectPage} />
      <Footer />
    </div>
  );
};

export default App;
