import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    // <div className="navbar">
    //   <div className="container">
    //    <div className="left">
    //      <span>home</span>
    //      <span>category</span>
    //      <span>products</span>
    //      <span>pages</span>
    //      <span>blog</span>
    //      <span>about us</span>
    //      <span>contact us</span>
    //    </div>
    //    <div className="right">
    //      <span>sale offer</span>
    //      <span>buy</span>
    //    </div>

    //   </div>
    // </div>

    <div className="navbar">
      <div className="navbar-left">
        <span>home</span>
        <span className="dropdown">
          <span className="dropdown-trigger">catagery</span>
          <div className="dropdown-content">
            <a href="#">Dropdown 1 Item 1</a>
            <a href="#">Dropdown 1 Item 2</a>
            <a href="#">Dropdown 1 Item 3</a>
          </div>
        </span>
        <span className="dropdown">
          <span className="dropdown-trigger">product</span>
          <div className="dropdown-content">
            <a>Dropdown 2 Item 1</a>
            <a>Dropdown 2 Item 2</a>
            <a>Dropdown 2 Item 3</a>
          </div>
        </span>
        <span className="dropdown">
          <span className="dropdown-trigger">pages</span>
          <div className="dropdown-content">
            <a>Dropdown 2 Item 1</a>
            <a>Dropdown 2 Item 2</a>
            <a>Dropdown 2 Item 3</a>
          </div>
        </span>

        <span>vlog </span>
        <span>about us </span>
        <span>contant us </span>
      </div>
      <div className="navbar-right">
        <span>special offer</span>
        <span>buy</span>
      </div>
    </div>
  );
}

export default Navbar;
