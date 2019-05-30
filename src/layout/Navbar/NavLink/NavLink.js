import React from "react";

const NavLink = props => {
  return <a href={props.url}>{props.children}</a>;
};

export default NavLink;
