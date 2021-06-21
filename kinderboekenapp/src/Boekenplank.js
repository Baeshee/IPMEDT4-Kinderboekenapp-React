import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios";
import { connect } from "react-redux";
import { changeUserBooks, changeActiveBook } from "./actions";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Boekenplank.css';

class Boekenplank extends Component {
    getBookData = () => {
        const URL = "https://kinderboekenapp-laravel.herokuapp.com/api/books"
        axios.get(URL).then(res => {
            this.props.changeUserBooks(res.data);
        });
    }

    componentDidMount(){
        this.getBookData();
    }

    render() {
        const settings = {
            className: "center",
            infinite: false,
            centerPadding: "60px",
            slidesToShow: 3,
            slidesToScroll: 3,
            speed: 500,
            rows: 2,
            slidesPerRow: 1,
            dots: true,
            responsive: [
            {
            breakpoint: 1080,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                dots: true
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
                <Slider {...settings}>
                    <a href="/boekenlijst">
                        <article className="book-placeholder">
                            <section className="book__content">
                                <div className="placeholder">
                                    <i className="fas fa-plus-circle fa-3x"></i>
                                </div>
                            </section>
                        </article>
                    </a>
                </Slider>
            )
        }

        console.log(this.props.userBooks);

        return (
            <Slider {...settings}>
                {this.props.userBooks.map((book, index) => { 
                    return (
                        <a key={index} href="/boek" onClick={() => 
                                    {
                                        this.props.changeActiveBook(book.ISBN);
                                    }}>
                            <article className="book">
                                <section className="book__content">
                                    <section className='book__link'>
                                        <img src={"https://kinderboekenapp-laravel.herokuapp.com" + book.book_image} alt="" />
                                    </section>
                                </section>
                            </article>
                        </a>
                    )
                })}
            </Slider>
        );
    }
}

const mapStateToProps = state => {
    return { userBooks: state.userBooks, activeBook: state.activeBook };
}

export default connect(
    mapStateToProps, { changeUserBooks: changeUserBooks, changeActiveBook: changeActiveBook }
)(Boekenplank);