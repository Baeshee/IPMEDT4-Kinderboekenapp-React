import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';

import './App.css';

import Boekenplank from './Boekenplank';

class App extends React.Component {
    render() {
        return (
            <main>
                <Provider store={store}>
                    <Boekenplank />
                </Provider>
            </main>
        )
    }
}

export default App;