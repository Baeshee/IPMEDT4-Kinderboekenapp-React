import React, { Component } from "react";

import UserService from "../services/service_user.service";

export default class BoardUser extends Component {

  state = { content: null}

  componentDidMount = () => {
    try{
      UserService.getUserBoard().then(
        response => {
          this.setState({
            content: response.data
          });
        },
        error => {
          this.setState({
            content:
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString()
          });
        }
      );
    } catch(e){
      console.log(e)
    }
  }

  render() {
    let body;

    if (this.state.content === null){
      body = <p>loading...</p>
    } else {
      body = <h3>{this.state.content.name}</h3>
    }
    
    return (
      <article className="container">
        <header className="jumbotron">
          {body}
        </header>
      </article>
    );
  }
}