import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';

import './App.css';

import BookAssignments from './BookAssignments';

class App extends React.Component {
    render() {
        return (
            <main>
                <Provider store={store}>
                    <BookAssignments />
                </Provider>
            </main>
        )
    }
}

export default App;