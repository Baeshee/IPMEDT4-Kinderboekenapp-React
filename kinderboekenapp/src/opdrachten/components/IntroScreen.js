import React from "react";


class IntroScreen extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            boek_id: 1,
            boek: "Botje",
        }
    }
 



    render(){
       
        return(
            <div className="wrapper">
            <section className="assignment-container">
            <p>Welkom bij de opdrachten over het boek: <h2>{this.state.boek}</h2></p>
            </section>
    
            
        </div>
        )
    }
}

export default IntroScreen;