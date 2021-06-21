import React from "react";
var x = 0;


class IntroScreen extends React.Component {
     
    constructor(props){
        super(props);
        this.state = {
            correct: true,
            score: 3,
        }
    }

    render(){
        function scrollY(event){
            event.preventDefault();
            var top  = window.pageYOffset || document.documentElement.scrollTop;
            top = top + 950;
            setTimeout(() => {
                window.scroll({top: top, behavior: 'smooth'});
            }, 500);
          }
        
        function ButtonActive(props){
            var arr = document.getElementsByTagName('button');
            var arr2 = document.getElementsByTagName('section');
            arr[x].style.backgroundColor = '#0e8034';
            arr2[x].style.borderWidth = 'thick';
            arr2[x].style.borderColor = "#0e8034";
            x++;
        }
        return(
            <div className="wrapper">
            <section className="assignment-container">
               <h2>Lees eerst hoofdstuk 1 tot en met hoofdstuk 5</h2>
                <button onClick={(event)=> {
                    scrollY(event);
                    ButtonActive();
                }}> Ik heb het gelezen</button>
                 
            </section>
    
            
        </div>
        )
    }
}

export default IntroScreen;