import React from "react";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";

import {Provider} from "react-redux";
import {store} from "./store.js";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

class App extends React.Component{
    // state = {video: ""}; replaced by redux
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/register">
                        <h2>Register here</h2>
                        <Provider store = {store}>
                        <Register / >
                        </Provider>
                        <Link to="/login"> Log in </Link>
                    </Route>
                    
                    <Route path="/login">
                        <main>
                            <Provider store={store}>
                               <Login />
                            </Provider>
                            <Link to="/register"> register </Link>
                        </main>
                    </Route>

                    <Route path="/profile">
                        <main>
                            <Provider store={store}>
                               <Profile />
                            </Provider>
                            <Link to="/logout"> logout </Link>
                        </main>
                    </Route>

                </Switch>
            </Router>
            
        );
    }
}

export default App;

// https://bezkoder.com/react-redux-jwt-auth/#Setup_Reactjs_Project
// Used for auth login with redux