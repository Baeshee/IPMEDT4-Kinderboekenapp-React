import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";

import './App.css';

import Navbar from './Navbar';
import { NavItems } from './NavItems';

class App extends Component {
    render() {
        return (
            <main>
                <Router>
                    <Route path="/boekenplank">
                        <h1>Boekenplank</h1>
                    </Route>
                    <Route path="/boekenlijst">
                        <h1>Boekenlijst</h1>
                    </Route>
                    <Route path="/logout">
                        <h1>Logout</h1>
                    </Route><Route path="/moppentrommel">
                        <h1>Moppentrommel</h1>
                    </Route>
                    <Route path="/profiel">
                        <h1>Profiel</h1>
                    </Route>
                </Router>
                <Navbar navitems={NavItems} />
            </main>
        )
    }
}

export default App;