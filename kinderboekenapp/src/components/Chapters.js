import React, {useState} from 'react';
import axios from "axios";
import { changeUserAssignments, changeActiveBook } from "../actions";
import { connect} from 'react-redux';
import { userAssignments } from '../reducers';
let x = 0;
class Chapters extends React.Component {
     
    constructor(props) {
        super(props);
        this.state = {value: '', 
            isLoading: true, 
            setLoading: ' ' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(JSON.stringify(this.props.handleSubmit));
      }
      
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  componentDidMount(){
   this.getAssignData();
  }
  
          
    
    getAssignData = () => {
        const URL = "http://localhost:8000/api/assignments"
        axios.get(URL).then(res => {
            this.props.changeUserAssignments(res.data);
            console.log(res.data);
            this.setLoading = false;
        });
    }
    
    inputAnswer = (props) =>{
        //   const requestBody = {answer_1: props.answer_1, isbn: props.isbn, chapters: props.chapters};
    const requestBody = {answer_1: props.answer_1};
    axios.patch("http://localhost:8000/api/assignments/1", requestBody)
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


    render(props){
        return(
            <div className="wrapper">
        <section className="assignment-container">
           <h2>{props.chapters} </h2>
            <button className="assignment__button" onClick={(event)=> {
                scrollY(event);
            }}> Ik heb het gelezen</button>
             
        </section>

        
    </div>
        )
    }
}

const mapStateToProps = state => {
    return { activeBook: state.activeBook, userAssignments: state.userAssignments}
};
export default connect(mapStateToProps, { changeUserAssignments: changeUserAssignments, changeActiveBook: changeActiveBook } )(Chapters);