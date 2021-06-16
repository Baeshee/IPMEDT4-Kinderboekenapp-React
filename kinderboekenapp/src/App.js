import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';

import './App.css';

import BookAssignments from './BookAssignments';
import Test from './Test';

class App extends React.Component {
    render() {
        return (
            <main>
                <Provider store={store}>
                    {/* <BookAssignments /> */}
                    <Test />
                </Provider>
            </main>
        )
    }
}

export default App;