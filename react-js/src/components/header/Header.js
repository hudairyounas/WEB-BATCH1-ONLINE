import React, { use } from "react";
import "./header.css"
import { NavLink } from "react-router";

function Header() {


    return (
      <>
       <NavLink to="/">Home</NavLink>
       <NavLink to="/course">Course</NavLink>
       <NavLink to="/about">About</NavLink>
      </>
    );
}

export default Header;