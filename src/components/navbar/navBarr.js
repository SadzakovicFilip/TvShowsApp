import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";

import Search from "./SearchBar/Search";

function NavBar({ data }) {
  return (
    <nav className="navbar">
      <Link to="/" className="home">
        <img src="../logos/comfy.png" alt="logo" className="comfyLogoHome" />
      </Link>
      <Search data={data} />
    </nav>
  );
}

export default NavBar;
