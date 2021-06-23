import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";

import authHeader from '../services/service_auth-header';

import './BookCard.css';


class BookCard extends React.Component {

    state = { added: false }

    makeApiCall = addBook =>{      
        const requestBody = { id: addBook}                     //api post request to add the book to the bookshelf
        axios.post(this.props.BASE_URL + "/api/user/booktouser", requestBody, { headers: authHeader()});
        
        setTimeout(() => {
            this.setState({ added: false}); // count is 0 here
          }, 3000);
    }

    onAddClicked = () =>{                           //Pressed on the add book to bookshelf gets the id 
        this.setState({ added: true});
        this.makeApiCall(this.props.id);
    }

    
    render(){  
        return(                                     //the card with all the book information
            <article className="bookCard">
                <figure className="bookCard__figure">
                    <img className="bookCard__figure__img" src={this.props.img || "/img/botje.jpg"} alt="Foto van een boek"/>
                </figure>
                <section className="bookCard__content">
                    <section className='bookCard__content__section'>
                        <h2 className="bookCard__content__section__title">{this.props.bookTitle || "Boek naam"}</h2>
                        <p className="bookCard__content__section__info">
                            Auteur: {this.props.writer || "naam"}
                            <br/>
                            Genre: {this.props.genre || "genre"}
                        </p>
                    </section>
                    <section className="bookCard__content__btnSection">
                        <button className="bookCard__content__btnSection__addButton" onClick={this.onAddClicked}>+</button>
                    </section>
                </section>
                <div className={!this.state.added ? "bookCard__overlay hidden" : "bookCard__overlay visible"}>Toegevoegd</div>
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