import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';

import { changeBooks } from "../actions.js";
import BookCard from './BookCard';

import './BookCard.css';

class BookCardList extends Component {

    getBooks = () => {
        axios.get(this.props.BASE_URL + '/api/books').then(res => {
            const fetchedBooks = res.data;
            this.props.changeBooks(fetchedBooks);
        });
    }

    componentDidMount(){
        this.getBooks();
    }

    render(){
        return(
            <article className='bookCardList'>
                {this.props.books.map((item, index) => {
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
        books : state.books,
        BASE_URL : state.BASE_URL
    };
}

export default connect(
    mapStateToProps, {changeBooks: changeBooks,}
) (BookCardList);