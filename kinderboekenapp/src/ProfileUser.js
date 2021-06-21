import React from 'react';
import axios from 'axios';
import './ProfileCard.css';

import {connect} from "react-redux";
import {changeColor, changeUserData} from './actions';

class ProfileUser extends React.Component {
    getUser = () => {
        console.log("getName");
        axios.get(this.props.BASE_URL + "/api/users/1").then(res => {
            this.props.changeUserData(res.data);
            this.props.changeColor(res.data[0].mascotte_img);
        });
    }
    
    //mehtod call to get the api
    componentDidMount(){
        this.getUser();
    }

    //the user name for on the profile page
    render(){
        return(
            <article className="profileCard">
                {this.props.userData.map((item, index) => {
                    return(
                        <section key={index}>
                            <h2 className="profileCard__name">Hi {item.name}!</h2>
                        </section>
                    );
                })}
            </article>
        );
    }
}

const mapStateToProps = state =>{
    return {userData: state.userData, colorValue: state.colorValue, BASE_URL: state.BASE_URL};
}

export default connect(
    mapStateToProps,
    {changeColor: changeColor, changeUserData: changeUserData}
) (ProfileUser);