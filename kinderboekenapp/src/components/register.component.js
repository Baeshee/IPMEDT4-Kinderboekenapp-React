import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { connect } from "react-redux";
import { register } from "../actions/action_auth";

import { Link, BrowserRouter as Router } from "react-router-dom";

import './Login.css';


const required = (value) => {
  if (!value) {
    return (
      <section className="alert alert-danger" role="alert">
        This field is required!
      </section>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <section className="alert alert-danger" role="alert">
        This is not a valid email.
      </section>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <section className="alert alert-danger" role="alert">
        The name must be between 3 and 20 characters.
      </section>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <section className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </section>
    );
  }
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      name: "",
      email: "",
      password: "",
      successful: false,
    };
  }

  onChangeUsername(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      this.props
        .dispatch(
          register(this.state.name, this.state.email, this.state.password)
        )
        .then(() => {
          this.setState({
            successful: true,
          });
          window.location.href="/login";
        })
        .catch(() => {
          this.setState({
            successful: false,
          });
        });
    }
  }

  render() {
    const { message } = this.props;

    return (
      <article className="register">
        <section className="register__section">
        <h2 className="register__section__heading">Registreren</h2>
        <figure className="register__section__figure">
          <img src="/img/mascotte_blue.png" alt="profile-img" className="profile-img-card"/>
        </figure>
        <section className="register__section__txtSection">
            <p className="register__section__txtSection__text">Hoi! Ik ben Robbie de Robot!</p>
            <p className="register__section__txtSection__text">Registreer hier!</p>
          </section>

          <Form
            onSubmit={this.handleRegister}
            ref={(c) => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <section>
                <section className="form-group">
                  <label htmlFor="name">Naam</label>
                  <Input
                    type="text"
                    className="form-control register__section__input"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </section>

                <section className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control register__section__input"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </section>

                <section className="form-group">
                  <label htmlFor="password">Wachtwoord</label>
                  <Input
                    type="password"
                    className="form-control register__section__input"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </section>

                <section className="login__section__btnSection">
                  <button className="btn btn-primary btn-block login__section__btnSection__button1">Registreren</button>
                  <Link className="login__section__btnSection__button2" to="/login"> Log in </Link>
                </section>
              </section>
            )}

            {message && (
              <article className="form-group">
                <section className={ this.state.successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                  {message}
                </section>
              </article>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </section>
      </article>
    );
  }
}


// const mapStateToProps = state =>{
//   return { message: state.message, }
// }

function mapStateToProps(state) {
  const { message } = state.message;
  return {
    message,
  };
}

export default connect(mapStateToProps)(Register);