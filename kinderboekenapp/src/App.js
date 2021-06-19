import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import Endscreen from './components/Endscreen';


import './App.css';

import BookAssignments from './BookAssignments';
import Test from './Test';

class App extends React.Component {

    render() {
        return (
            <main>
                <Provider store={store}>
                    <BookAssignments />
                    <Endscreen/>
                </Provider>
            </main>
        )
    }
}

export default App;