import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import axios from "axios";
import './App.css';
import  EndScreen from './components/Endscreen';
import  IntroScreen from './components/IntroScreen';
import OpdrNav from './components/OpdrNav';
import BookAssignments from './BookAssignments';
let x = 0;
let y = 3;

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


    render(assignment, index) {
        return (
            <main>
                <Provider store={store}>
                 <IntroScreen/>
                   <BookAssignments/>
                   <EndScreen/>
                   <OpdrNav/>
                    
                </Provider>
            </main>
        )
    }
}
// const mapStateToProps = state => {
//     return { activeBook: state.activeBook, userAssignments: state.userAssignments}
// };

export default App;


