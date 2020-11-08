import React, { Component } from "react";
import NavBar from "../../shared/components/NavBar";

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <NavBar />
        <div className="home-page__content">
            This is home page
        </div>
      </div>
    );
  }
}
export default HomePage;
