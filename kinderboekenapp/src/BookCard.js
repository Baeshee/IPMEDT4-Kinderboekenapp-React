import React from 'react';
import './BookCard.css';

class BookCard extends React.Component{
    onBookCardClicked = () =>{
        this.props.bookCardClicked(this.props.id);
    }

    render(){
        return(
            <article className="bookCard">
                <figure onClick={this.onBookCardClicked}>
                    <img className="bookCard__img" src={this.props.img || "/img/botje.jpg"} alt="Foto van een boek"/>
                </figure> 
                <section onClick={this.onBookCardClicked}>
                    <h2 className="bookCard__title">{this.props.bookTitle || "Boek naam"}</h2>
                    <p className="bookCard__info">
                       Auteur: {this.props.writer || "naam"}
                       <br/>
                       Genre: {this.props.genre || "genre"}
                    </p>
                </section>
                <button className="bookCard__addButton">+</button>
                {/* <button>Klik voor meer informatie</button> */}
            </article>
        );
    }
}

export default BookCard;
 