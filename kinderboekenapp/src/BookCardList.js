import React from 'react';
import BookCard from './BookCard';
import axios from 'axios';


class BookCardList extends React.Component{

    bookCardClicked = (id) =>{
        this.props.bookCardClicked(id);
    }

    //make a state with an array
    state = {books: []};

    //get the api url and changed the state with the data
    getBooks = () => {
        console.log("getBooks");
        const BASE_URL = "https://kinderboekenapp-laravel.herokuapp.com/api/books";
        axios.get(BASE_URL).then(res => {
            const fetchedBooks = res.data;
            this.setState({books: fetchedBooks});
        });
    }

    //mehtod call to get the api
    componentDidMount(){
        this.getBooks();
    }
    
    //render the bookCard with all the data
    render(){
        return(
            <article>
                {this.state.books.map((item, index) => {
                    console.log(item.book_image);
                    return(
                        <section key={index}>
                            <BookCard bookTitle={item.book_title}
                                img={item.book_image}
                                writer={item.author}
                                genre={item.genre}
                                id={item.id}
                        />
                        </section>
                    )
              })}
            </article> 
        );
    }
}

export default BookCardList;