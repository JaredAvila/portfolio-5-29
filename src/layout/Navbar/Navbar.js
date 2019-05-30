import React from "react";
import NavLink from "./NavLink/NavLink";

const Navbar = () => {
  const navigation = [
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
  ];

  return (
    <div>
      <nav>
        <ul>
          {navigation.map(nav => (
            <NavLink url={nav.url}>{nav.label}</NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
