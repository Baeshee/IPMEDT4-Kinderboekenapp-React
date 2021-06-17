import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { changeUserAssignments, changeActiveBook } from "./actions";

import "./BookAssignments.css";

import { DummyData } from './DummyData';

import { ImageVraag, ImageAntwoord, ImageUnavailable} from "./Vragen/ImageVraag"

class BookAssignments extends Component {

    state = { vragen: []}

    getAssignData = () => {
        const URL = "https://kinderboekenapp-laravel.herokuapp.com/api/users/1/books"
        axios.get(URL).then(res => {
            this.props.changeUserAssignments(res.data);
        });
    }

    componentDidMount(){
        this.getAssignData();
    }

    createAssignments = (assignment, index) =>{       
        switch(assignment.kind_of_assignment){
            case "color":
                switch(assignment.status){
                    case "active":
                        return <ImageVraag key={index} />;
                    case "completed":
                        return <ImageAntwoord key={index} />;
                    default:
                        return <ImageVraag key={index} />;
                }
            case "image":
                switch(assignment.status){
                    case "active":
                        return <ImageVraag key={index} />;
                    case "completed":
                        return <ImageAntwoord key={index} />;
                    default:
                        return <ImageUnavailable key={index} />;
                }
            case "text":
                switch(assignment.status){
                    case "active":
                        return <ImageVraag key={index} />;
                    case "completed":
                        return <ImageAntwoord key={index} />;
                    default:
                        return <ImageUnavailable key={index} />;
                }  
            default:
                return <ImageUnavailable key={index} />;
        }
}
    

    render() {
      
            return (
                <article className="assignments">
                    {/* <section className="assignment-container">
                        <h2>
                            Maak een foto van jezelf met je hoed op en upload deze.
                        </h2>
                        <form action="">
                            <label className="form__label" htmlFor="color">Jouw kleur</label>
                            <input className="form__input color" type="color" id="color" name="color"/>
                            <label className="form__label" htmlFor="answer_1">De naam van jouw kleur</label>
                            <input className="form__input text" type="text" if="answer_1" name="answer_1" />
                        </form>
                    </section> */}

                    {DummyData.map((assignment, index) => this.createAssignments(assignment, index))}

                </article>
            );
        }
    }


const mapStateToProps = state => {
    return { activeBook: state.activeBook, userAssignments: state.userAssignments};
}

export default connect(
    mapStateToProps, { changeUserAssignments: changeUserAssignments, changeActiveBook: changeActiveBook }
)(BookAssignments);