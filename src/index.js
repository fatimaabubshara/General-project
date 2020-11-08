import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.scss";
import LoginPage from "./containers/login-page/container";
import AdminFoodPage from "./containers/admin-food-page/container";
import AdminOrderPage from "./containers/admin-order-page/container";
import HomePage from "./containers/home-page/container";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { ProtectedRoute } from "./protected.route";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          {/* <NavBar /> */}

          <Switch>
            <Route exact path="/Login" component={LoginPage} />
            <Route exact path="/admin/order-page" component={AdminOrderPage} />
            <ProtectedRoute
              exact
              path="/admin/food-page"
              component={AdminFoodPage}
            />

            <Route path="/" component={HomePage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
render(<Navigation />, document.getElementById("root"));
