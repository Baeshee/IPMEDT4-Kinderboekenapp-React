import React, { Component } from "react";

import UserService from "../services/service_user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <article className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>
      </article>
    );
  }
}