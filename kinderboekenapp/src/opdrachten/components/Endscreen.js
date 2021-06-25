import React from "react";





class Endscreen extends React.Component {
     

    render(){
        return(
            <div className="wrapper">
            <section className="assignment-container">
                <p className="assignments__text" >Dit waren de opdrachten voor dit boek. Goed gedaan!</p>
                <button className="button" onClick={() => {
                    window.location.href='/boekenplank'
                    }}>Terug naar de boekenplank</button>                
            </section>
            </div>
        )
    }
}

export default Endscreen;