import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="mainnav">
        <ul>
          <Link to="/Login">Login Page</Link>
        </ul>
        <div></div>
      </div>
    );
  }
}
export default NavBar;
