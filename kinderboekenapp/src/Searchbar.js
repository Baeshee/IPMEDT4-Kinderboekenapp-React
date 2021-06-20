import React from 'react';
import './Searchbar.css';

class Searchbar extends React.Component{

    state = {searchTerm: ""};

    onSearch = event =>{
        this.setState({searchTerm: event.target.value});
    }

    onCheck = (event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state.searchTerm);
    }


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
        console.log(this.state.searchTerm);
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

export default Searchbar;