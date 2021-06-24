import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

import ProfileCard from './profilePage--card';
import ProfileMascotte from './profilePage--mascotte';

class Profile extends Component {
    render() {

        const { user: currentUser } = this.props;
        if (!currentUser) {
            return <Redirect to="/login" />;
        }

        return (
            <article className="profile">
                <section className="profile__header">
                    <h1 className="profile__header__text">Profiel</h1>
                </section>
                    <ProfileMascotte/>
                    <ProfileCard/>
            </article>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state.auth;
    return {
      user,   
    };
  }

export default connect(mapStateToProps)(Profile);