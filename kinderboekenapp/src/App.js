import React from 'react';
// import BookCard from './BookCard';
import BookCardList from './BookCardList';
import Searchbar from './Searchbar';
import FilterOptions from './FilterOptions';
import axios from 'axios';
import './App.css'

class App extends React.Component{
    state = {book: ""}

    makeApiCall = searchTerm =>{
        const BASE_URL = "https://kinderboekenapp-laravel.herokuapp.com/api/books";
        
    }
    // state = {bookTitle: "", img: "", writer: "", genre: "", id: ""};

    // onSubmit = (searchTerm) => {
    //     console.log("onsubmit");
    //     const BASE_URL = "https://kinderboekenapp-laravel.herokuapp.com/api/books";
    //     console.log(BASE_URL);
    //     axios.get(BASE_URL + searchTerm).then(res =>{
    //         console.log("res");
    //         this.setState({
    //             bookTitle: res.data.book_title,
    //             writer:res.data.author,
    //             genre:res.data.genre,
    //             id:res.data.id
    //         })
    //     });
    // }

    bookCardClicked = id => {
        console.log("Book card clicked test " + id);
    }

    render(){

        return(
            <article>
                <header>
                    <h1 className="boekenlijstHeader">Boekenlijst</h1>
                </header>
                <Searchbar onSubmit={this.makeApiCall}/>
                <FilterOptions/>
                <BookCardList bookCardClicked = {this.bookCardClicked}/>
            </article>
        );
    }
}

export default App;

/* filmpjes week 2 voor state maken */
//SEARCHBAR DOESNT WORK YET MAYBE USE REDUCERS WEEK 3