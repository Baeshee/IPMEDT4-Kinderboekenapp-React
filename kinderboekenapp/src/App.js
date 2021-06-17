import React from 'react';
import axios from 'axios';
import ProfileCard from './profilePage--card';
import ProfileMascotte from './profilePage--mascotte';
// import ProfileCardModal from './profileCard--modal';
import './App.css';

class App extends React.Component {
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

  render(){
    return(
      <article className="profile">
        <section className="profile__header">
          <h1 className="profile__header__text">Profiel</h1>
        </section>
        <ProfileMascotte/>
        <ProfileCard/>
      </article>
    );
  }
}

export default App;
