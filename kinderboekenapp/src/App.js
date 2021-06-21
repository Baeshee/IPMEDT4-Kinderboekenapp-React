import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import './App.css';
import BookAssignments from './BookAssignments';
import OpdrNav from './components/OpdrNav';


class App extends React.Component {
    

    render() {
        return (
            <main>
                <Provider store={store}>
                    <BookAssignments />
                    <OpdrNav/>
                    

                </Provider>
            </main>
        )
    }
}

export default App;