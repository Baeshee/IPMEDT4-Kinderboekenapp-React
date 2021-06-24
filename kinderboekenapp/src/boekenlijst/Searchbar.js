import React from 'react';
import './Searchbar.css';
import axios from 'axios';
import { connect } from "react-redux";
import { changeSearchTerm, changeBooks} from "../actions.js";
import authHeader from '../services/service_auth-header';

class Searchbar extends React.Component{

    componentDidMount(){            //api call to load and show all the books
        this.makeApiCall("");
    }

    makeApiCall = (searchTerm) =>{   
        if(searchTerm === ""){               //if searchbar is empty show all books
            axios.get(this.props.BASE_URL + '/api/books', { headers: authHeader()}).then(res =>{
                this.props.changeBooks(res.data);  
            });
        }
        else{
            axios.get(this.props.BASE_URL + '/api/books/' + searchTerm, { headers: authHeader()}).then(res => {            //searchbar is used
            this.props.changeBooks(res.data);
            });
        }
    }

    onSearch = (event) =>{
        this.props.changeSearchTerm(event.target.value);        //there is an input with a value
    }

    onCheck = (event) =>{                                       //pressed enter to search for book
        event.preventDefault();
        this.makeApiCall(this.props.searchTerm);
    }

    render(){
        return(                                                         //the searchbar
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
    return {
        searchTerm: state.searchTerm,
        BASE_URL: state.BASE_URL,
     };
}
export default connect(
    mapStateToProps,
    { 
        changeSearchTerm: changeSearchTerm, 
        changeBooks: changeBooks,
    }
) (Searchbar);