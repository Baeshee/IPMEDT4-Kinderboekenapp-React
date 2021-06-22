import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { changeUserBooks, changeActiveBook } from "../actions";
import axios from "axios";
import Slider from "react-slick";

import authHeader from '../services/service_auth-header';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Boekenplank.css';

class Boekenplank extends Component {
    getBookData = () => {
        axios.get(this.props.BASE_URL + '/api/user/profile/books', {headers: authHeader()}).then(res => {
            this.props.changeUserBooks(res.data);
        });
    }

    setActiveBook = (value) => {
        this.props.changeActiveBook(this.props.userBooks[value].book_image);
        console.log(this.props.activeBook)

        if(this.props.activeBook === ''){
            this.setActiveBook()
        } else {
            window.location.href = '/boek';
        }
    }

    componentDidMount(){
        this.getBookData();
    }

    render() {
        const { user: currentUser } = this.props;

        if (!currentUser) {
            return <Redirect to="/login" />;
        }

        const settings = {
            className: "center",
            infinite: false,
            centerPadding: "60px",
            slidesToShow: 3,
            slidesToScroll: 3,
            speed: 500,
            rows: 2,
            slidesPerRow: 1,
            responsive: [
            {
            breakpoint: 1080,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            }
        ]
        };
        //Check if the array is empty if so setting a placeholder with
        //add book option (link to the booklist)
        if (!Array.isArray(this.props.userBooks) || this.props.userBooks <= 0){
            return (
                <article>
                    <header>
                        <h1 className="boekenlijstHeader">Boekenplank</h1>
                    </header>

                    <Slider {...settings}>
                        <a className="link" href="/boekenlijst">
                            <article className="book-placeholder">
                                <section className="book__content">
                                    <div className="placeholder">
                                        <i className="fas fa-plus-circle fa-3x"></i>
                                    </div>
                                </section>
                            </article>
                        </a>
                    </Slider>
                </article>
            )
        }

        return (
            <article>
                <header>
                    <h1 className="boekenlijstHeader">Boekenplank</h1>
                </header>

                <Slider {...settings}>
                    {this.props.userBooks.map((book, index) => { 
                        return (
                            <article key={index} className="book" onClick={() => {
                                this.setActiveBook(index);
                                }}>
                                <section className="book__content">
                                    <section className='book__link'>
                                        <img src={"https://kinderboekenapp-laravel.herokuapp.com" + book.book_image} alt="" />
                                    </section>
                                </section>
                            </article>
                        )
                    })}
                </Slider>
            </article>
        );
    }
}

const mapStateToProps = state => {
    const { user } = state.auth;
    return {
        userBooks: state.userBooks,
        activeBook: state.activeBook,
        user,
        BASE_URL: state.BASE_URL 
        };
}

export default connect(
    mapStateToProps, { changeUserBooks: changeUserBooks, changeActiveBook: changeActiveBook }
)(Boekenplank);