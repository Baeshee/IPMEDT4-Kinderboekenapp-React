import React from 'react';

import './App.css';

import Boekenplank from './Boekenplank';

class App extends React.Component {
    render() {
        return (
            <main className='container mt-5 carousel'>
                <Boekenplank />
            </main>
        )
    }
}

export default App;