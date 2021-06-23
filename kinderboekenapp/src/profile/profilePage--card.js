import React from 'react';
import { connect } from 'react-redux';
import { changeShowColorModal } from "../actions";

import AuthService from "../services/service_auth.service";


import ProfileUser from './ProfileUser';
import Modal from './profileCard--modal';

import './ProfileCard.css';


class ProfileCard extends React.Component {
    showModal = () =>{
        this.props.changeShowColorModal(true);
    }

    hideModal = () =>{
        this.props.changeShowColorModal(false);
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
                    <Modal show={this.props.showColorModal} handleClose={this.hideModal}>
                    </Modal>
                </section>

                <section className="profileCard__btnSection">
                    <button type="button" onClick={this.showModal} className="profileCard__btnSection__colorBtn">Kleur robot</button>  {/*open modal*/}
                    <button className="profileCard__btnSection__logoutBtn" onClick={this.logOut}>Log uit</button>
                </section>
            </article> 
        );
    }
}

const mapStateToProps = state => {
    return { showColorModal: state.showColorModal}
}

export default connect(mapStateToProps, { changeShowColorModal: changeShowColorModal})(ProfileCard);
