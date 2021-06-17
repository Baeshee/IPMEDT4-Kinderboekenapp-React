import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

import UserBoard from "./test_board-user.component";
import AuthService from "../services/service_auth.service";
import axios from "axios";


class Profile extends Component {

  logOut = () => {
    AuthService.logout();
  }

  render() {
    const { user: currentUser } = this.props;

    if (!currentUser) {
      return <Redirect to="/login" />;
    }

    return (
      <article className="container">
        <header className="jumbotron">
          <h3>
            Profile Page
          </h3>
        </header>
        <UserBoard />
        <a href="/login" onClick={this.logOut}>Logout</a>
      </article>
    );
  }
}

// const mapStateToProps = state =>{
//   return { user: state.auth, }
// }

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,   
  };
}

export default connect(mapStateToProps)(Profile);