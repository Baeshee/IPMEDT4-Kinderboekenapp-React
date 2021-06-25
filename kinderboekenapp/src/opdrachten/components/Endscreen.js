import React from "react";



class Endscreen extends React.Component {
     
    constructor(props){
        super(props);
        this.state = {
            correct: true,
            score: 3,
        }
    }

    render(){
        return(
            <div className="wrapper"><section className="assignment-container">
            <p className="endscreen__text" >Dit waren de opdrachten voor dit boek. Hier zie je hoeveel munten je verdiend hebt, deze kan je direct in de store uitgeven!</p>  <h1 className="endscreen__text">{this.state.score} / 6 munten </h1> 
            <button>Terug naar de boekenplank</button>
            <button>Naar de store</button>
                
                </section>
            </div>
        )
    }
}

export default Endscreen;