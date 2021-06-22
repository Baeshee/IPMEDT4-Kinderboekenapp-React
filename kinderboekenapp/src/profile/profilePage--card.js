import React from 'react';

import AuthService from "../services/service_auth.service";


import ProfileUser from './ProfileUser';
import Modal from './profileCard--modal';

import './ProfileCard.css';


class ProfileCard extends React.Component {

    constructor(){
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () =>{
        this.setState({show: true});
    }

    hideModal = () =>{
        this.setState({show: false});
    }

    logOut = () => {
        AuthService.logout();
        window.location.href="/login"
    }

    render(){
        return(
            <article className="profileCard">
                <ProfileUser/>
                <section className="profileCard__section">
                    <Modal show={this.state.show} handleClose={this.hideModal}>
                    </Modal>
                </section>

                <section className="profileCard__btnSection">
                    <button type="button" onClick={this.showModal} className="profileCard__btnSection__colorBtn">Kleur robot</button>  {/*open modal*/}
                    <button className="profileCard__btnSection__logoutBtn" onClick={this.logOut}><i className="fas fa-sign-out-alt"></i>Log uit</button>
                </section>
            </article> 
        );
    }
}

export default ProfileCard;
