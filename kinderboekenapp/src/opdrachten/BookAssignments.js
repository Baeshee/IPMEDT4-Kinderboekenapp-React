import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import authHeader from '../services/service_auth-header';
import { changeUserAssignments, changeActiveBook } from "../actions";

import { ImageVraag, AudioVraag, ColorVraag, ColorAntwoord, ImageAntwoord,  MultipleChoice, Podcast, VraagUnavailable, MultipleChoice2} from "./Vragen"
// import "./BookAssignments.css";

let x = 0;
class BookAssignments extends Component {

    getAssignData = () => {
        const requestData = { book_isbn: this.props.activeBook }
        axios.get(this.props.BASE_URL + '/api/assignments', requestData, {headers: authHeader()}).then(res => {
            this.props.changeUserAssignments(res.data);
            });
    }

    componentDidMount(){
       this.getAssignData();
    }
    
    createAssignments = (assignment, index) =>{       
        switch(assignment.kind_of_assignment){
            case "multipleChoice2":
                
                switch(assignment.status){
                    case "active":
                        return <MultipleChoice2 assignment={assignment.assignment} key={index} />;
                    case "completed":
                        return <MultipleChoice2 assignment={assignment.assignment} key={index} />;
                    default:
                        return <VraagUnavailable chapters={assignment.chapters} key={index} />;
                }        

            case "color":
                
                switch(assignment.status){
                    case "active":
                        return <ColorVraag assignment={assignment.assignment} key={index}/>;
                    case "completed":
                        return <ColorAntwoord assignment={assignment.assignment} key={index} />;
                    default:
                        return <VraagUnavailable chapters={assignment.chapters} key={index} />;
                }
            case "image":
                
                switch(assignment.status){
                    case "active":
                        return <ImageVraag assignment={assignment.assignment} key={index} />;
                    case "completed":
                        return <ImageAntwoord assignment={assignment.assignment} key={index} />;
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
                            case "completed":
                                return <MultipleChoice assignment={assignment.assignment} key={index} />;
                            default:
                                return <VraagUnavailable chapters={assignment.chapters} key={index} />;
                        }  
            case "podcast":
                
                        switch(assignment.status){
                            case "active":
                                return <Podcast assignment={assignment.assignment} key={index} />;
                            case "completed":
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
                    <a className="back-link" href='/boekenplank'><i className="fas fa-times"></i></a>
                    {this.props.userAssignments.map((assignment, index) => this.createAssignments(assignment, index))}
                </article>
            );
        }
    }



const mapStateToProps = state => {
    return {
        activeBook: state.activeBook,
        userAssignments: state.userAssignments,
        BASE_URL: state.BASE_URL
    };
}

export default connect(
    mapStateToProps, { changeUserAssignments: changeUserAssignments, changeActiveBook: changeActiveBook }
)(BookAssignments);