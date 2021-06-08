import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { BookItems } from './BookItems';
import './Boekenplank.css';

class Boekenplank extends Component {
    books = this.props.books;

    render() {
        const settings = {
            className: "center",
            infinite: true,
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
                infinite: true,
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
        if (!Array.isArray(this.books) || this.books.length <= 0){
            return (
                <Slider {...settings}>
                    <article className="book-placeholder">
                        <section className="book__content">
                            <div className="placeholder">
                                <a href="#"><i class="fas fa-plus-circle fa-3x"></i></a>
                            </div>
                        </section>
                    </article>
                </Slider>
        )
        }

        return (
            <Slider {...settings}>
                {BookItems.map((item, index) => {
                    return (
                        <article key={index} className="book">
                            <section className="book__content">
                                <a className={item.cName} href={item.url}>
                                    <img src={item.src} alt='' />
                                </a>
                            </section>
                        </article>
                    )
                })}
            </Slider>
        );
    }
}


export default Boekenplank;

// Old Boekenplank
// import React, { useState } from 'react';
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

// import { BookItems } from './BookItems';
// import './Boekenplank.css';

// const Boekenplank = ({ books }) => {
//     const [current, setCurrent] = useState(0);
//     const length = books.length

//     const nextSlide = () => {
//         setCurrent(current === length - 1 ? 0 : current + 1);
//     }

//     const prevSlide = () => {
//         setCurrent(current === length - 1 ? 0 : current - 1);
//     }

//     if (!Array.isArray(books) || books.length <= 0){
//         return null;
//     }

//     return(
//         <article className="boekenplank-container">
//         <FaArrowAltCircleLeft class="left-arrow" onClick={prevSlide} />
//         <FaArrowAltCircleRight class="right-arrow" onClick={nextSlide} />
//             <ul className="boekenplank">
//                 {BookItems.map((item, index) => {
//                     return (
//                         <li key={index} className={index == current ? 'book active' : 'book'}>
//                             {index === current && (
//                                 <a className={item.cName} href={item.url}>
//                                 <img src={item.src} alt="" />
//                             </a>)
//                             }
//                         </li>
//                     )
//                 })}
//             </ul>
//         </article>
//     );
// }

// export default Boekenplank;