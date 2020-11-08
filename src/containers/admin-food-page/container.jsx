import React from "react";
import FoodItemList from "./partials/FoodItemList";
import AddFoodItem from "./partials/AddFoodItem";
import logo from "../../assets/menu.png";
import TabSelector from "../../TabSelector";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import { Link } from "react-router-dom";

import { fetchFoodAPI, fetchAPIAddnewFood, valid } from "../action";
import Modal from "../Modal";
import "../../style.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      categorysData: [],
      New: [],
      newTypeFood: "",
      newSub: [],
      activeId: "home",
    };
    this.handleChangeTab = this.handleChangeTab.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChangeTab(event) {
    const buttonId = event.target.id;
    this.setState({ activeId: buttonId });
  }

  componentDidMount() {
    fetchFoodAPI().then((data) => {
      console.log(data);
      this.setState({ categorysData: data });
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  logout() {
    window.location.href = "login-page/container.jsx";
  }
  order() {
    window.location.href = "admin-order-page/container.jsx";
  }

  getTabContent() {
    switch (this.state.activeId) {
      case "addFood":
        return (
          <div>
            <div>
              <h1 className="headerAdd">Adding Food</h1>
            </div>
            {this.state.categorysData && this.state.categorysData.length ? (
              <AddFoodItem
                data={this.state.categorysData}
                initialValues={{
                  foodType:
                    this.state.categorysData &&
                    this.state.categorysData[0].categoryType,
                }}
              />
            ) : (
              <div>Loading Data ...</div>
            )}
          </div>
        );
      case "allFood":
        return (
          <div>
            <FoodItemList data={this.state.categorysData} />
          </div>
        );
      case "addType":
        return (
          <div>
            <h1 className="headerAdd"> ADD New Type Food</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="Modal">
              <Modal />
            </div>
          </div>
        );
      default:
        return;
    }
  }
  render() {
    return (
      <div className="App">
        <div className="topnav">
          <button onClick={this.logout} id="imgButton">
            <img
              alt="user"
              id="img"
              src="https://www.kindpng.com/picc/m/19-194798_transparent-logout-png-sign-out-icon-transparent-png.png"
            />
          </button>
          <a id="username" href="#news">
            Username
          </a>

          <div className="App">
            <div className="App">
              <TabSelector
                activeId={this.state.activeId}
                handleChangeTab={this.handleChangeTab}
              />
              <div className="App-content">{this.getTabContent()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
