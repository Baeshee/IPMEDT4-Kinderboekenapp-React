import React, { Component } from "react";
import axios from "axios";
<<<<<<< Updated upstream:kinderboekenapp/src/BookAssignments.js
import { connect } from "react-redux";
import { changeUserAssignments, changeActiveBook } from "./actions";
=======

import OpdrachtNav from './components/OpdrachtNav';
import authHeader from '../services/service_auth-header';
import { changeUserAssignments, changeActiveBook } from "../actions";

import { ImageVraag, AudioVraag, ColorVraag, MultipleChoice, Podcast, VraagUnavailable, MultipleChoice2} from "./Vragen"
>>>>>>> Stashed changes:kinderboekenapp/src/opdrachten/BookAssignments.js
import "./BookAssignments.css";
import "./App.css";
import { ImageVraag, AudioVraag, ColorVraag, ColorAntwoord, ImageAntwoord,  MultipleChoice, Podcast, VraagUnavailable, MultipleChoice2} from "./Vragen"
let x = 0;
class BookAssignments extends Component {

<<<<<<< Updated upstream:kinderboekenapp/src/BookAssignments.js
=======
    getAssignData = () => {
        const isbn = JSON.parse(localStorage.getItem('bookISBN'));
        console.log(authHeader());
        axios.get('http://localhost:8000/' + '/api/user/opdrachten/' + isbn, { headers: authHeader()}).then(res => {
            this.props.changeUserAssignments(res.data);
        });
        localStorage.removeItem("bookISBN");
    }

>>>>>>> Stashed changes:kinderboekenapp/src/opdrachten/BookAssignments.js
    componentDidMount(){
       this.getAssignData();
    }
    
    getAssignData = () => {
        const URL = "http://localhost:8000/api/assignments"
        axios.get(URL).then(res => {
            this.props.changeUserAssignments(res.data);
             });
    }
        
    
 



    createAssignments = (assignment, index) =>{       
        switch(assignment.kind_of_assignment){

            
            case "multipleChoice2":
                
                switch(assignment.status){
                    case "active":
                        return <MultipleChoice2 assignment={assignment.assignment} key={index} />;
                    default:
                        return <VraagUnavailable chapters={assignment.chapters} key={index} />;
                }        

            case "color":
                
                switch(assignment.status){
                    case "active":
                        return <ColorVraag assignment={assignment.assignment} key={index}/>;
                    default:
                        return <VraagUnavailable chapters={assignment.chapters} key={index} />;
                }
            case "image":
                
                switch(assignment.status){
                    case "active":
                        return <ImageVraag assignment={assignment.assignment} key={index} />;
                    default:
                        return <VraagUnavailable chapters={assignment.chapters} key={index} />;
                }
            
            case "audio":
                
                    switch(assignment.status){
                        case "active":
                            return <AudioVraag assignment={assignment.assignment} key={index} />;
                        case "completed":
                            return <AudioVraag assignment={assignment.assignment} key={index} />;
                        default:
                            return <VraagUnavailable chapters={assignment.chapters} key={index} />;
                    }  
            case "multipleChoice1":
                
                        switch(assignment.status){
                            case "active":
                                return <MultipleChoice assignment={assignment.assignment} key={index} />;
                            default:
                                return <VraagUnavailable chapters={assignment.chapters} key={index} />;
                        }  
            case "podcast":
                
                        switch(assignment.status){
                            case "active":
                                return <Podcast assignment={assignment.assignment} key={index} />;
                            default:
                                return <VraagUnavailable chapters={assignment.chapters} key={index} />;
                        }  
            default:
                return <VraagUnavailable chapters={assignment.chapters} key={index} />;
        }
}
    

    render() {      
            return (

                <article className="assignments"> 
                    {this.props.userAssignments.map((assignment, index) => this.createAssignments(assignment, index))}
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