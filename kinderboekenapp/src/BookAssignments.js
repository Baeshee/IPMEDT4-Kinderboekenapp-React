import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { changeUserAssignments, changeActiveBook } from "./actions";

import "./BookAssignments.css";
import "./App.css";


import { ImageVraag, AudioVraag, ColorVraag,  MultipleChoice, Podcast, VraagUnavailable, MultipleChoice2} from "./Vragen"
let x = 0;
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
        axios.post("http://localhost:8000/api/assignments/1/", {answer_1 : "dit is een antwoord"},  {
           headers: {'Content-Type': 'application/json'}}).catch(error => { console.log(error)
        });
          
    }

    checkAnswer = (props) => {
        
        if(this.props.userAssignments[x].correct_answer_1 === this.props.userAssignments[x].answer_1){
            console.log('goed');
            let arr = document.getElementsByTagName('button');
            let arr2 = document.getElementsByTagName('section');
            arr[x].style.backgroundColor = '#0e8034';
            arr2[x].style.borderWidth = 'thick';
            arr2[x].style.borderColor = "#0e8034";
            x++;
        } else {
            console.log('fout');
            let arr = document.getElementsByTagName('button');
            let arr2 = document.getElementsByTagName('section');
            arr[x].style.backgroundColor = 'red';
            arr2[x].style.borderWidth = 'thick';
            arr2[x].style.borderColor = "red";
            x++;
        }
    }







    createAssignments = (assignment, index) =>{       
        switch(assignment.kind_of_assignment){
            case "color":
                switch(assignment.status){
                    case "active":
                        return <div><ColorVraag assignment={assignment.assignment} key={index}/> <button className="nav__button" onClick={this.checkAnswer}> klik </button></div>;
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
                                return <MultipleChoice assignment={assignment.assignment} key={index} />;
                            // case "completed":
                            //     return <MultipleChoice assignment={assignment.assignment} key={index} />;
                            default:
                                return <VraagUnavailable chapters={assignment.chapters} key={index} />;
                        }  
            case "Podcast":
                        switch(assignment.status){
                            case "active":
                                return <Podcast assignment={assignment.assignment} key={index} />;
                            // case "completed":
                            //     return <Podcast assignment={assignment.assignment} key={index} />;
                            default:
                                return <VraagUnavailable chapters={assignment.chapters} key={index} />;
                        }  
            case "MultipleChoice2":
                        switch(assignment.status){
                            case "active":
                                return <MultipleChoice2 assignment={assignment.assignment} key={index} />;
                            // case "completed":
                            //     return <MultipleChoiceVraag2 assignment={assignment.assignment} key={index} />;
                            default:
                                return <VraagUnavailable chapters={assignment.chapters} key={index} />;
                        }         
            default:
                return <VraagUnavailable chapters={assignment.chapters} key={index} />;
        }
}
    

    render() {
  
        setTimeout(() => {
            this.getAssignData();
        }, 3000);
       
      
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