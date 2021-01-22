import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Routes from "./Routes";
import { Auth } from "aws-amplify";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: true,
      isAuthenticating: false,
    };
  }

//   async componentDidMount() {
    // this.userHasAuthenticated(true);
    // try {
    // 	if (await Auth.currentSession()) {
    // 		this.userHasAuthenticated(true);
    // 	}
    // } catch (e) {
    // 	if (e !== 'No current user') {
    // 		alert(e);
    // 	}
    // }
    // this.setState({ isAuthenticating: false });
//   }

  userHasAuthenticated = (authenticated) => {
    this.setState({ isAuthenticated: authenticated });
  };

  handleLogout = async (event) => {
    await Auth.signOut();

    this.userHasAuthenticated(false);
    this.props.history.push("/login");
  };
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
    };
    return (
      <div className="App container">
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default withRouter(App);
