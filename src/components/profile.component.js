import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

import UserBoard from "./test_board-user.component";


class Profile extends Component {

  render() {
    const { user: currentUser } = this.props;
    console.log(currentUser);
    console.log(this.props);

    if (!currentUser) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>Test</strong> Profile
          </h3>
        </header>
        <UserBoard />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  console.log(user);
  return {
    user,   
  };
}

export default connect(mapStateToProps)(Profile);