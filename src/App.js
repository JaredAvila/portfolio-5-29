import React from "react";

import Layout from "./layout/Layout";
import ScrollToTop from "./hoc/ScrollToTop";

const App = () => {
  return (
    <ScrollToTop>
      <div className="App">
        <Layout />
      </div>
    </ScrollToTop>
  );
};

export default App;
