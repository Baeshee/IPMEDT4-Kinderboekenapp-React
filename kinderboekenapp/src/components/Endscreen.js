import React, { Component, useState } from "react";



class Endscreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            score: 3,
            setScore: 1
        }
        
    }

    render(){
        console.log(this.state.score)
        return(
            <div className="wrapper"><section className="assignment-container">
            <p>Dit waren de opdrachten voor dit boek. je hebt  {this.state.score} / 6 munten verdiend. Deze kan je direct uitgeven in de store! </p>
            <button>Terug naar de boekenplank</button>
            <button>Naar de store</button>
                
                </section>
            </div>
        )
    }
}

export default Endscreen;