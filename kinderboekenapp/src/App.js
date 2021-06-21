import React from 'react';
import ProfileCard from './profilePage--card';
import ProfileMascotte from './profilePage--mascotte';
// import ProfileCardModal from './profileCard--modal';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./store";

class App extends React.Component {

  render(){
    return(
      <Provider store={store}>
        <article className="profile">
          <section className="profile__header">
            <h1 className="profile__header__text">Profiel</h1>
          </section>
            <ProfileMascotte/>
            <ProfileCard/>
        </article>
      </Provider>
    );
  }
}

export default App;
