import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { changeUserAssignments, changeActiveBook } from "./actions";

import "./BookAssignments.css";

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

    createAssignments = () =>{
        for(let i = 0; i < this.props.userAssignments.length; i++){
            switch(this.props.suserAssignments[i].kind_of_assignment){
                // case "color":
                //     switch(this.props.suserAssignments[i].status){
                //         case "active":
                //             return vragen[i] = <ColorVraag />;
                //         case "completed":
                //             return vragen[i] = <ColorAntwoord />;
                //         default:
                //             return vragen[i] = <ColorUnavailable />;
                //     }
                case "image":
                    switch(this.props.userAssignments[i].status){
                        case "active":
                            return this.vragen[i] = <ImageVraag />;
                        case "completed":
                            return this.vragen[i] = <ImageAntwoord />;
                        default:
                            return this.vragen[i] = <ImageUnavailable />;
                    }
                // case "text":
                //     switch(this.props.suserAssignments[i].status){
                //         case "active":
                //             return vragen[i] = <TextVraag />;
                //         case "completed":
                //             return vragen[i] = <TextAntwoord />;
                //         default:
                //             return vragen[i] = <TextUnavailable />;
                //     }
                // }  
                default:
                    return null;
            }
        }    
    }
    

    render() {
      
            return (
                <article className="assignments">
                    <section className="assignment-container">
                        <h2>
                            Maak een foto van jezelf met je hoed op en upload deze.
                        </h2>
                        <form action="">
                            <label className="form__label" htmlFor="color">Jouw kleur</label>
                            <input className="form__input color" type="color" id="color" name="color"/>
                            <label className="form__label" htmlFor="answer_1">De naam van jouw kleur</label>
                            <input className="form__input text" type="text" if="answer_1" name="answer_1" />
                        </form>
                    </section>



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