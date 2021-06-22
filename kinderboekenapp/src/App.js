import React from 'react';
import { store } from './store';
import { connect, Provider } from 'react-redux';
import axios from "axios";
import './App.css';
import  ColorOpdr from './components/ColorOpdr';
import  ImageOpdr from './components/ImageOpdr';
import  AudioOpdr from './components/AudioOpdr';
import  McOpdr from './components/McOpdr';
import OpdrNav from './components/OpdrNav';
import BookAssignments from './BookAssignments';
import { changeUserAssignments, changeActiveBook } from "./actions";
let x = 0;

class App extends React.Component {
    componentDidMount(){
        this.getAssignData();
       }
       
               
         
         getAssignData = (props) => {
             const URL = "http://localhost:8000/api/assignments"
             axios.get(URL).then(res => {
               //  this.props.changeUserAssignments(res.data);
                 console.log(res.data);
                 this.setLoading = false;
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




    render(assignment, index) {
        return (
            <main>
                <Provider store={store}>
                 
                   <BookAssignments/>
                   <OpdrNav/>
                    
                </Provider>
            </main>
        )
    }
}
const mapStateToProps = state => {
    return { activeBook: state.activeBook, userAssignments: state.userAssignments}
};

export default App;


