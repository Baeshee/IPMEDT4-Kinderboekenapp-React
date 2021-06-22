import React from "react";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./profile/Profile";

import Boekenlijst from './boekenlijst/Boekenlijst';
import Navbar from './navbar/Navbar';
import { NavItems } from './navbar/NavItems';
import Boekenplank from './boekenplank/Boekenplank';
import BookAssignments from './opdrachten/BookAssignments'

import {Provider} from "react-redux";
import {store} from "./store.js";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

class App extends React.Component{
    // state = {video: ""}; replaced by redux

    render(){
        return(
            <Provider store={store}>
                <Router>      
                    <Switch>
                        <Route path="/register">
                            <main>
                                {/* <h2>Register here</h2> */}
                                    <Register />
                            </main>
                        </Route>
                        
                        <Route path="/login">
                            <main>
                                <Login />
                            </main>
                        </Route>

                        <Route path="/profile">
                            <main>
                                <Profile />
                                <Navbar navitems={NavItems} />
                            </main>
                        </Route>

                        <Route path="/boekenlijst">
                            <main>
                                <Boekenlijst />
                                <Navbar navitems={NavItems} />
                            </main>
                        </Route>

                        <Route path='/boekenplank'>
                            <main>
                                <Boekenplank />
                                <Navbar navitems={NavItems} />
                            </main>
                        </Route>

                        <Route path='/boek'>
                            <main>
                                <BookAssignments />
                                <Navbar navitems={NavItems} />
                            </main>
                        </Route>

                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;

// https://bezkoder.com/react-redux-jwt-auth/#Setup_Reactjs_Project
// Used for auth login with redux