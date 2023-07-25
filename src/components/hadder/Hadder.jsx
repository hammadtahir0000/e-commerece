import React from "react";
import "./Hadder.scss";
import pic from "../../img/pic.png";
import pic1 from "../../img/pic1.png";

import {
  FacebookOutlined,
  Instagram,
  KeyboardArrowDownOutlined,
  LocalPhone,
  Twitter,
} from "@mui/icons-material";
const Hadder = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-left">
          <p>free returna staandard shiping orders $99+</p>
        </div>
        <div className="header-right">
          <span>my account</span>
          <span>contact us</span>
          <span>blog</span>
          <span>my wishlist</span>
          <span>login</span>
          <img src={pic} alt="" />
          <div className="icon">
            <KeyboardArrowDownOutlined />
          </div>

          <span className="usd">usd</span>
          <div className="icon">
            <KeyboardArrowDownOutlined />
          </div>
          <div className="icon">
            {" "}
            <FacebookOutlined style={{ marginLeft: "12px" }} s />
            <Twitter style={{ marginLeft: "12px" }} />
            <Instagram style={{ marginLeft: "12px" }} />
          </div>
        </div>
      </div>
      <div className="lower-header">
        <div className="left">
          <img src={pic1} alt="" />
        </div>
        <div className="center">
          {/* <form className="search-input-container" >
            <input
              className="search-input" type="search"placeholder="Enter search term" />
            <button className="search-button" type="submit">
              Search
            </button>
          </form>
          */}
          <form className="search-form">
            <input
              type="text"
              placeholder="Enter search term"
              className="search-input"
            

            />
            {/* <select className="category-dropdown"> */}
              {/* <option value="">All caterory</option> */}
              {/* <option value="category1">Category 1</option> */}
              {/* <option value="category2">Category 2</option> */}
              {/* <option value="category3">Category 3</option> */}

              {/* <button type="submit" className="search-button"> */}
                {/* <i className="fas fa-search" />{" "} */}
                {/* Assuming you are using Font Awesome for the search icon */}
              {/* </button> */}
            {/* </select> */}
          </form>
        </div>
        <div className="right">
          <LocalPhone className="img" />
          <div className="right-down">
            <h4>call us now</h4>
            <h5>4453636535</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hadder;
