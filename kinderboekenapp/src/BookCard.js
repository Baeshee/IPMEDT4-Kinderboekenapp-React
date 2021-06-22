import React from 'react';
import './BookCard.css';
// import { connect } from 'react-redux';
import axios from 'axios';


class BookCard extends React.Component {
    makeApiCall = addBook =>{                           //api post request to add the book to the bookshelf
        console.log("apiCall " + addBook);
        const BASE_URL = "https://kinderboekenapp-laravel.herokuapp.com/api/booktouser/";
        axios.post(BASE_URL, addBook);
    }

    onAddClicked = () =>{                           //Pressed on the add book to bookshelf gets the id 
        console.log(this.props.id);
        this.makeApiCall(this.props.id);
    }

    
    render(){  
        return(                                     //the card with all the book information
            <article className="bookCard">
                <figure>
                    <img className="bookCard__img" src={this.props.img || "/img/botje.jpg"} alt="Foto van een boek"/>
                </figure> 
                <section >
                    <h2 className="bookCard__title">{this.props.bookTitle || "Boek naam"}</h2>
                    <p className="bookCard__info">
                        Auteur: {this.props.writer || "naam"}
                        <br/>
                        Genre: {this.props.genre || "genre"}
                    </p>
                 </section>
                <button className="bookCard__addButton" onClick={this.onAddClicked}>+</button>
            </article>
        );
    }
}

export default BookCard;