import React, { Component } from 'react';
import BookCard from './BookCard';
import axios from 'axios';
import { connect } from "react-redux";
import './BookCard.css';
import { changeBooks } from "./actions.js";

class BookCardList extends Component {

    getBooks = () => {
        console.log("getBooks");
        const BASE_URL = "https://kinderboekenapp-laravel.herokuapp.com/api/books";
        axios.get(BASE_URL).then(res => {
            const fetchedBooks = res.data;
            this.props.changeBooks(fetchedBooks);
        });
    }

    componentDidMount(){
        this.getBooks();
    }

    render(){
        console.log(this.props.books);
        return(
            <article>
                {this.props.books.map((item, index) => {
                    console.log(item.book_image);
                    return(
                        <section key={index}>
                            <BookCard
                                bookTitle = { item.book_title }
                                img = { "https://kinderboekenapp-laravel.herokuapp.com" + item.book_image} 
                                writer = { item.author }
                                genre ={ item.genre }
                                id = { item.id }
                                />
                        </section>
                    )
                })}
            </article>
        )
    }
}

const mapStateToProps = state => {
    return{
        books : state.books
    };
}

export default connect(
    mapStateToProps, {changeBooks: changeBooks,}
) (BookCardList);