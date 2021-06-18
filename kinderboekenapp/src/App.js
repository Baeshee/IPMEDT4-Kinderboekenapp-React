import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Boekenplank from './Boekenplank';

class App extends React.Component {
    render() {
        return (
            <main>
                <Router>
                    <Route path='/boekenplank'>
                        <Provider store={store}>
                            <Boekenplank />
                        </Provider>
                    </Route>
                    <Route path='/boek'>
                        <Link to='/boekenplank'><i className="fas fa-times"></i></Link>
                    </Route>
                </Router>
            </main>
        )
    }
}

export default App;