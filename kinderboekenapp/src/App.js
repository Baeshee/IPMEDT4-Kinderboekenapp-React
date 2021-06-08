import React from 'react';

import './App.css';

import Boekenplank from './Boekenplank';
import { BookItems } from './BookItems';

class App extends React.Component {
    render() {
        return (
            <main>
                <Boekenplank books={BookItems} />
            </main>
        )
    }
}

export default App;