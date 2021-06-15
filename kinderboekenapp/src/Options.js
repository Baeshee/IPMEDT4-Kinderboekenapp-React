// import React from 'react';
// import axios from 'axios';



// class Options extends React.Component{
//     //get the api url and changed the state with the data
//     getBooks = () => {
//         console.log("getBooks");
//         const BASE_URL = "https://kinderboekenapp-laravel.herokuapp.com/api/books";
//         axios.get(BASE_URL).then(res => {
//             const fetchedBooks = res.data;
//             this.setState({books: fetchedBooks});
//         });
//     }

//     //mehtod call to get the api
//     componentDidMount(){
//         this.getBooks();
//     }

//     render(){
//         return(
//             <article>
//                 {this.state.books.map((item, index) => {
//                     console.log(item.book_image);
//                     return(
//                         <section key={index}>
//                             <select className="filterOptions_section__filterButton"> {item.book_title}</select>
//                                 <option>{item.book_title}</option>
//                         </section>
//                     )
//               })}
//             </article> 
//         );
//     }
// }

export const Leeftijd = [
    {
        value: '1',
        label: 'Leeftijd:' 
    },
    {
        value: '2',
        label: '5 - 7' 
    },
    { 
        value: '3', 
        label: '7- 9 ' 
    },
    { 
        value: '4', 
        label: '9 -12' 
    }
]

export const Genre = [
    {
        value: '1',
        label: 'Genre:'       
    },
    {
        value: '2',
        label: 'Avontuur'       
    },
    {
        value: '3',
        label: 'Avontuur'
    },
    {
        value: '4',
        label: 'Avontuur'
    }
]

export const Auteur = [
    {
        value: '1',
        label: 'Auteur:'       
    },
    {
        value: '2',
        label: 'Janneke Schotveld'       
    },
    {
        value: '3',
        label: 'Janneke Schotveld'
    },
    {
        value: '4',
        label: 'Janneke Schotveld'
    }
]
