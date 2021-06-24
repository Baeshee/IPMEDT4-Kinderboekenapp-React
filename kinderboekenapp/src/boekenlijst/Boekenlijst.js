import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

import BookCardList from './BookCardList';
import Searchbar from './Searchbar';
import FilterOptions from './FilterOptions';
import './BookCard.css';


class Boekenlijst extends Component {
    render(){

        const { user: currentUser } = this.props;

        if (!currentUser) {
        return <Redirect to="/login" />;
        }

        return (
            <article>
                <header>
                    <h1 className="boekenlijstHeader">Boekenlijst</h1>
                </header>
                
                <Searchbar onSubmit={this.makeApiCall}/>
                <FilterOptions/>
                {/* <BookCardList bookCardClicked = {this.bookCardClicked}/> */}
                <BookCardList />
                
            </article>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state.auth;
    return {
      user,   
    };
  }
  
export default connect(mapStateToProps)(Boekenlijst);
