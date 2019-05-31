import React from "react";

import { Link } from "react-router-dom";

const ProjectPage = props => {
  console.log(props.location.state);
  return (
    <div>
      <h1>Project page</h1>
      <Link to="/">Back</Link>
    </div>
  );
};

export default ProjectPage;
