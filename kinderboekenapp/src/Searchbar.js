import React from 'react';
import './Searchbar.css';

import axios from 'axios';
import {connect} from "react-redux";
import { changeSearchTerm, changeBooks} from "./actions.js";

class Searchbar extends React.Component{

    // state = {searchTerm: ""};

    componentDidMount(){
        this.makeApiCall("Botje");
    }

    makeApiCall = (searchTerm) =>{
        const BASE_URL = "https://kinderboekenapp-laravel.herokuapp.com/api/books/";
        axios.get(BASE_URL + searchTerm).then(res => {
            this.props.changeBooks(res.data);
        })
    }

    onSearch = (event) =>{
        this.props.changeSearchTerm(event.target.value);
    }

    onCheck = (event) =>{
        event.preventDefault();
        this.makeApiCall(this.props.searchTerm);
    }

    // onSearch = event =>{
    //     this.setState({searchTerm: event.target.value});
    // }

    // onCheck = (event) =>{
    //     event.preventDefault();
    //     this.props.onSubmit(this.state.searchTerm);
    // }


    // onSearch = (event) =>{
    //     console.log(event.target.value);
    //     this.setState({searchTerm: event.target.value});
    //     // console.log(searchTerm);
    // }

    // onSubmit = (event) =>{
    //     event.preventDefault();
    //     this.props.onSubmit(this.state.searchTerm.toLowerCase());
    // }

    render(){
        console.log(this.props.searchTerm);
        return(
            <section className="searchbar_section">
                <form onSubmit={this.onCheck}>
                    <input onChange={this.onSearch} 
                           className="searchbar_section__input" 
                           placeholder="&#128269; Zoek een boek" 
                           type="text" 
                    />
                </form>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return { searchTerm: state.searchTerm };
}
export default connect(
    mapStateToProps,
    { 
        changeSearchTerm: changeSearchTerm, 
        changeBooks: changeBooks,
    }
) (Searchbar);