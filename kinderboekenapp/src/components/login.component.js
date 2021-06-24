import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { connect } from "react-redux";
import { login } from "../actions/action_auth";

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

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: "",
      password: "",
      loading: false,
    };
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

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    this.form.validateAll();

    const { dispatch, history } = this.props;

    if (this.checkBtn.context._errors.length === 0) {
      dispatch(login(this.state.email, this.state.password))
        .then(() => {
          history.push("/profile");
          window.location.reload();
        })
        .catch(() => {
          this.setState({
            loading: false
          });
        });
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { isLoggedIn, message } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/boekenplank" />;
    }

    return (
      <article className="login">
        <section className="login__section">
          <h2 className="login__section__heading">Login</h2>
          <figure className="login__section__figure">
            <img src="/img/mascotte_blue.png" alt="profile-img" className="login__figure__img"/>
          </figure>
          <section className="login__section__txtSection">
            <p className="login__section__txtSection__text">Hoi! Ik ben Robbie de Robot!</p>
            <p className="login__section__txtSection__text">Log hier in!</p>
          </section>
          
          

          <Form
            onSubmit={this.handleLogin}
            ref={(c) => {
              this.form = c;
            }}
          >

            <section className="form-group">
              <label htmlFor="email"> Email</label>
              <Input
                type="text"
                className="form-control login__section__input"
                email="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
                validations={[required]}
              />
            </section>

            <section className="form-group">
              <label htmlFor="password">Wachtwoord</label>
              <Input
                type="password"
                className="form-control login__section__input"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </section>

            <section className="login__section__btnSection">
              <button
                className="btn btn-primary btn-block login__section__btnSection__button1"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
              <Link className="btn btn-primary btn-block login__section__btnSection__button2" to="/register"> Registreren </Link>
            </section>

            {message && (
              <article className="form-group">
                <section className="alert alert-danger" role="alert">
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
//   return { isLoggedIn: state.auth, message: state.message, }
// }

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message
  };
}

export default connect(mapStateToProps)(Login);