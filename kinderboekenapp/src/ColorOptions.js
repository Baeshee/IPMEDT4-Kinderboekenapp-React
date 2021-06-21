import React from "react";
import {connect} from "react-redux";
import {changeColor} from './actions';
import {colorValue} from './reducers';
import axios from "axios";
import './ColorOptions.css';


class ColorOptions extends React.Component{

    makeApiCall = colorValue =>{
        const requestBody = {img: colorValue}
        const BASE_URL = "https://kinderboekenapp-laravel.herokuapp.com/api/update/1";
        axios.patch(BASE_URL, requestBody)
    }

    handleChange = event =>{
        this.props.changeColor(event.target.value);
        console.log(event.target.value);
    }

    handleSubmit = event =>{
        event.preventDefault();     //make apiCall
        this.makeApiCall(this.props.colorValue);    
    }



    render(){
        console.log("test" + this.props.colorValue);
        return(
            <form className="colorForm" onSubmit={this.handleSubmit}>
                <section className="colorForm__section">
                    <label className="colorForm__section__label">Kies hier je favoriete kleur: </label>
                    <select onChange={this.handleChange} className="colorForm__section__options">
                        <option className="colorForm__options__pick" value="/img/blue.png">blauw</option>
                        <option className="colorForm__options__pick" value="/img/green.png">groen</option>
                        <option className="colorForm__options__pick" value="/img/red.png">rood</option>
                        <option className="colorForm__options__pick" value="/img/yellow.png">geel</option>
                        <option className="colorForm__options__pick" value="/img/orange.png">oranje</option>
                        <option className="colorForm__options__pick" value="/img/aqua.png">aqua</option>
                        <option className="colorForm__options__pick" value="/img/purple.png">paars</option>
                    </select>
                </section>
                <section className="colorForm__btnSection">
                    <input className="colorForm__btnSection__submitButton" type="submit" value="Verander"/>   
                </section>
            </form>
        );
    }
}

const mapStateToProps = state =>{
    return{colorValue: state.colorValue};
}

export default connect(
    mapStateToProps,
    {changeColor: changeColor}
) (ColorOptions);



