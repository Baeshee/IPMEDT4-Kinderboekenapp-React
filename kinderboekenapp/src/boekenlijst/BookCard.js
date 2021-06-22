import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";

import authHeader from '../services/service_auth-header';

import './BookCard.css';


class BookCard extends React.Component {
    makeApiCall = addBook =>{      
        const requestBody = { id: addBook}                     //api post request to add the book to the bookshelf
        axios.post(this.props.BASE_URL + "/api/user/booktouser", requestBody, { headers: authHeader()});
    }

    onAddClicked = () =>{                           //Pressed on the add book to bookshelf gets the id 
        this.makeApiCall(this.props.id);
        console.log(this.props.id);
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

const mapStateToProps = state => {
    return {
        BASE_URL: state.BASE_URL 
        };
}

export default connect(
    mapStateToProps
)(BookCard);