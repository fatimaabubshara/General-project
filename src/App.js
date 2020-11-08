import React from "react";
import LoginPage from "./containers/login-page/container";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <LoginPage />
      </div>
    );
  }
}

export default App;
