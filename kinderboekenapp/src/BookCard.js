import React from 'react';
import './BookCard.css';
import { connect } from 'react-redux';

const BookCard = (props) => {
    return(
        <article className="bookCard">
            <figure>
                <img className="bookCard__img" src={props.img || "/img/botje.jpg"} alt="Foto van een boek"/>
            </figure> 
            <section >
                <h2 className="bookCard__title">{props.bookTitle || "Boek naam"}</h2>
                <p className="bookCard__info">
                    Auteur: {props.writer || "naam"}
                    <br/>
                    Genre: {props.genre || "genre"}
                </p>
             </section>
            <button className="bookCard__addButton">+</button>
            {/* <button>Klik voor meer informatie</button> */}
        </article>
    )
}

export default BookCard;