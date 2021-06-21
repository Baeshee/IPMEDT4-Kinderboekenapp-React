import React from 'react';
// import BookCard from './BookCard';
import BookCardList from './BookCardList';
import Searchbar from './Searchbar';
import FilterOptions from './FilterOptions';
import axios from 'axios';
import './App.css'
import { store } from './store';
import {Provider} from 'react-redux';


class App extends React.Component{

    bookCardClicked = id => {
        console.log("Book card clicked test " + id);
    }

    render(){

        return(
            <Provider store={store}>
            <article>
                <header>
                    <h1 className="boekenlijstHeader">Boekenlijst</h1>
                </header>
                
                <Searchbar onSubmit={this.makeApiCall}/>
                <FilterOptions/>
                {/* <BookCardList bookCardClicked = {this.bookCardClicked}/> */}
                <BookCardList />
                
            </article>
            </Provider>
        );
    }
}

export default App;

