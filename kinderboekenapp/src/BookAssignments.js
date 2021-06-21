import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { changeUserAssignments, changeActiveBook } from "./actions";

import "./BookAssignments.css";



import { ImageVraag, AudioVraag, ColorVraag,  MultipleChoiceVraag, Podcast,VraagUnavailable, MultipleChoiceVraag2} from "./Vragen"

class BookAssignments extends Component {

    componentDidMount(){
        this.getAssignData();
    }
    
    getAssignData = () => {
        const URL = "http://localhost:8000/api/assignments"
        axios.get(URL).then(res => {
            this.props.changeUserAssignments(res.data);
        });
    }
    inputAnswer = (props) =>{
        axios.post("http://localhost:8000/api/assignments/1");
    }

    checkAnswer = (props) => {
        if(this.props.userAssignments[0].correct_answer_1 === this.props.userAssignments[0].answer_1){
            console.log('goed')
        } else {
            console.log('fout')
        }
    }







    createAssignments = (assignment, index) =>{       
        switch(assignment.kind_of_assignment){
            case "color":
                switch(assignment.status){
                    case "active":
                        return <div><ColorVraag assignment={assignment.assignment} key={index}/></div>;
                    case "completed":
                        // return <ColorAntwoord assignment={assignment.assignment} key={index} />;
                    default:
                        return <VraagUnavailable chapters={assignment.chapters} key={index} />;
                }
            case "image":
                switch(assignment.status){
                    case "active":
                        return <ImageVraag assignment={assignment.assignment} key={index} />;
                    case "completed":
                        // return <ImageAntwoord assignment={assignment.assignment} key={index} />;
                    default:
                        return <VraagUnavailable chapters={assignment.chapters} key={index} />;
                }
            case "text":
                switch(assignment.status){
                    case "active":
                        return <ImageVraag assignment={assignment.assignment} key={index} />;
                    case "completed":
                        // return <ImageAntwoord assignment={assignment.assignment} key={index} />;
                    default:
                        return <VraagUnavailable chapters={assignment.chapters} key={index} />;
                }  
            case "audio":
                    switch(assignment.status){
                        case "active":
                            return <AudioVraag assignment={assignment.assignment} key={index} />;
                        case "completed":
                            // return <AudioVraag assignment={assignment.assignment} key={index} />;
                        default:
                            return <VraagUnavailable chapters={assignment.chapters} key={index} />;
                    }  
            case "MultipleChoice":
                        switch(assignment.status){
                            case "active":
                                return <MultipleChoiceVraag assignment={assignment.assignment} key={index} />;
                            case "completed":
                                return <MultipleChoiceVraag assignment={assignment.assignment} key={index} />;
                            default:
                                return <VraagUnavailable chapters={assignment.chapters} key={index} />;
                        }  
            case "Podcast":
                        switch(assignment.status){
                            case "active":
                                return <Podcast assignment={assignment.assignment} key={index} />;
                            case "completed":
                                return <Podcast assignment={assignment.assignment} key={index} />;
                            default:
                                return <VraagUnavailable chapters={assignment.chapters} key={index} />;
                        }  
            case "MultipleChoice2":
                        switch(assignment.status){
                            case "active":
                                return <MultipleChoiceVraag2 assignment={assignment.assignment} key={index} />;
                            case "completed":
                                return <MultipleChoiceVraag2 assignment={assignment.assignment} key={index} />;
                            default:
                                return <VraagUnavailable chapters={assignment.chapters} key={index} />;
                        }         
            default:
                return <VraagUnavailable chapters={assignment.chapters} key={index} />;
        }
}
    

    render() {
  
        setTimeout(() => {
            this.checkAnswer();
        }, 2000);
       
      
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