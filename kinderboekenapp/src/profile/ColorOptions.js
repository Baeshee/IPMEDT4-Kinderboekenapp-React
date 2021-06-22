import React from "react";
import {connect} from "react-redux";
import {changeColor} from '../actions';
import { colorValue } from '../reducers/reducers';
import axios from "axios";
import './ColorOptions.css';
import authHeader from '../services/service_auth-header';


class ColorOptions extends React.Component{

    makeApiCall = colorValue =>{
        const requestBody = {img: colorValue}
        axios.patch(this.props.BASE_URL + '/api/user/update', requestBody, { headers: authHeader()});
        alert("Kleur is veranderd! Sluit de popup!");
    }

    handleChange = event =>{
        this.props.changeColor(event.target.value);
    }

    handleSubmit = event =>{
        event.preventDefault();     //make apiCall
        this.makeApiCall(this.props.colorValue);

    }



    render(){
        return(
            <form className="colorForm" onSubmit={this.handleSubmit}>
                <section className="colorForm__section">
                    <label className="colorForm__section__label">Kies hier je favoriete kleur: </label>
                    <select onChange={this.handleChange} className="colorForm__section__options">
                        <option>Kies kleur</option>
                        <option className="colorForm__options__pick" value="/img/blue.png">Blauw</option>
                        <option className="colorForm__options__pick" value="/img/green.png">Groen</option>
                        <option className="colorForm__options__pick" value="/img/red.png">Rood</option>
                        <option className="colorForm__options__pick" value="/img/yellow.png">Geel</option>
                        <option className="colorForm__options__pick" value="/img/orange.png">Oranje</option>
                        <option className="colorForm__options__pick" value="/img/aqua.png">Aqua</option>
                        <option className="colorForm__options__pick" value="/img/purple.png">Paars</option>
                    </select>
                </section>
                <section className="colorForm__btnSection">
                    <input className="colorForm__btnSection__submitButton" type="submit" value="Verander" />

                </section>
            </form>
        );
    }
}

const mapStateToProps = state =>{
    return{colorValue: state.colorValue, BASE_URL: state.BASE_URL}
}

export default connect(
    mapStateToProps,
    {changeColor: changeColor}
) (ColorOptions);



