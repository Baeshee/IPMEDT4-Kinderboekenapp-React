import React from 'react';
import axios from 'axios';
import './ProfileCard.css';

class ProfileUser extends React.Component {
    state = {names: []}

    getNames = () => {
        console.log("getName");
        const BASE_URL = "https://kinderboekenapp-laravel.herokuapp.com/api/users";
        axios.get(BASE_URL).then(res => {
            const fetchedNames = res.data;
            this.setState({names: fetchedNames});
        });
       
    }
    
    //mehtod call to get the api
    componentDidMount(){
        this.getNames();
    }

    //the user name for on the profile page
    render(){
        return(
            <article className="profileCard">
                {this.state.names.map((item, index) => {
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
export default ProfileUser;