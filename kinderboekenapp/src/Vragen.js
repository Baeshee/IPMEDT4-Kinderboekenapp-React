import React from "react";
import ReactAudioPlayer from 'react-audio-player';

let x = 0;



function scrollY(event){
    event.preventDefault();
    let top  = window.pageYOffset || document.documentElement.scrollTop;
    top = top + 950;
    setTimeout(() => {
        window.scroll({top: top, behavior: 'smooth'});
    }, 500);
  }

function ButtonActive(props){

    let arr = document.getElementsByTagName('button');
    let arr2 = document.getElementsByTagName('section');
    let arr3 = document.getElementsByTagName('li');
    arr[x].style.backgroundColor = '#0e8034';
    arr2[x].style.borderWidth = 'thick';
    arr2[x].style.borderColor = "#0e8034";
    arr3[x].classList.add('nav__active')
    x++;
}

export const VraagUnavailable = (props) =>{
    
    return(
        <div className="wrapper">
        <section className="assignment-container">
           <h2>{props.chapters} </h2>
            <button onClick={(event)=> {
                scrollY(event);
                ButtonActive();
            }}> Ik heb het gelezen</button>
             
        </section>

        
    </div>)
}




export const intro = (props) =>{
    return(
        <section className="assignment-container"><p>{props.assignment}</p>
            <ReactAudioPlayer
  src="my_audio_file.ogg"
  className="AudioPlayer"
  autoPlay
  controls
/></section>
    )

}


export const ImageVraag = (props) => {
    return(
        <div className="wrapper">
        <section className="assignment-container">
            <p>{props.assignment}
</p>
            <form className="fileUpload" action="">
                <label className="form__label" htmlFor="answer_2">Foto van jouw muts</label>
                <input className="form__input image" type="file" if="answer_2" name="answer_2" />
                <button onClick={(event)=> {
                scrollY(event);
                ButtonActive();
             
            }}  type="submit"> Verzenden </button>
            </form>
           
        </section></div>
    )
}

// export const ImageAntwoord = (props) => {
//     return(
//         <div className="wrapper">
//         <section className="assignment-container">
//             <p>{props.assignment}</p>
//               <form><label htmlFor="color"></label>
//               <input className="colorInput" id="color" value={props.value} name="color" type="color"></input></form>
//               <label htmlFor="user__color">Schrijf hier je kleur op:</label><input id="userColor" className="user__color" type="text" ></input><button id="submitButton" className="submitButton" type="submit" onClick={scrollY}>Bevestig je kleur!</button></section></div>
//     )
// }

export const AudioVraag = (props) => {
    return(
        <div className="wrapper" >
        <section className="assignment-container"><p>{props.assignment}</p>
            <ReactAudioPlayer
  src="my_audio_file.ogg"
  className="AudioPlayer"
  autoPlay
  controls
/>
<button onClick={(event)=> {
                scrollY(event);
                ButtonActive();
            }}>Ik heb het geluisterd</button></section>
</div>
    )
}

// export const AudioAntwoord = (props) => {
//     return(
//         <div className="wrapper" >
//         <section className="assignment-container"><p>{props.assignment}</p>
//             <ReactAudioPlayer
//   src="my_audio_file.ogg"
//   className="AudioPlayer"
//   autoPlay
//   controls
// /></section></div>
//     )
// }

// export const ColorVraag = () => {
//     return(
//         <div className="wrapper">
//         <section className="assignment-container"><p>Bibi haar vader heeft een wolwinkel en verkoopt daar de meest bijzondere kleuren wol. Zo lezen we over paardenbloemstengelgroen, varkensstaartjesroze, diepzeezwart, watermeloenrood, krijtrotswit en Middellandsezeeblauw. In de naam van de kleur zie je steeds al staan waar je de kleur ‘in het echt’ terug kunt zien.<br></br>

//         Kun jij ook zo’n mooie naam bedenken voor een kleur? Hieronder kun jij een kleur kiezen. Zoek de mooiste kleur uit en geef hem net zo’n bijzondere naam. Bedenk daarvoor dus goed waar de kleur jou precies aan doet denken..
//         </p>
//               <form><label htmlFor="color"></label><input className="colorInput" id="color" name="color"  type="color"></input></form><label htmlFor="userColor">Schrijf hier je kleur op:</label><input id="userColor" className="userColor" type="text" ></input><button id="submitButton" className="submitButton" type="submit" onClick={(event)=> {
//                 scrollY(event);
//                 ButtonActive();
//             }}>Bevestig je kleur!</button></section></div>
//     )
// }

export const ColorVraag = (props) => {
    return(
        <div className="wrapper">
        <section className="assignment-container"><p>{props.assignment}</p>
        
              <form><label htmlFor="color"></label><input className="colorInput" id="color" name="color"  type="color"></input></form><label htmlFor="userColor">Schrijf hier je kleur op:</label><input id="userColor" className="userColor" type="text" ></input><button id="submitButton" className="submitButton" type="submit" onClick={(event)=> {
                scrollY(event);
                ButtonActive();
            }}>Bevestig je kleur!</button></section></div>
    )
}


// export const ColorAntwoord = (props) => {
//     return(
//         <div className="wrapper">
//         <section className="assignment-container"><p>{props.assignment}</p>
//               <form><label htmlFor="color"></label><input className="colorInput" id="color" name="color"  type="color"></input></form><label htmlFor="userColor">Schrijf hier je kleur op:</label><input id="userColor" className="userColor"  type="text" ></input><button id="submitButton" className="submitButton" type="submit" onClick={(event)=> {
//                 scrollY(event);
//                 ButtonActive();
//             }}>Bevestig je kleur!</button></section></div>
//     )
// }

export const Podcast = (props) =>{
    return(
        <div className="wrapper">
        <section className="assignment-container">
            
        <p>{props.assignment}</p>
      <ReactAudioPlayer
src="my_audio_file.ogg"
className="AudioPlayer"
autoPlay
controls
/>
<button onClick={(event)=> {
                scrollY(event);
                ButtonActive();
            }} >Ik heb het geluisterd</button>
        </section></div>
    )
    }

export const MultipleChoiceVraag = (props) =>{
return(
    <div className="wrapper">
    <section className="assignment-container">
        <p>{props.assignment}</p>
        <input className="McInput" type="text"></input>
        <p>{props.assignmentChild1}</p>
        <input className="McInput" type="text"></input>
        <p>{props.assignmentChild2}
            <ul>
                <li>BOTJEBOTJE zegt: Bibibibi en papapapa</li>
                <li>EJTOB zegt: Ibib en apap.</li>
                <li>BO zegt: bi en pa</li>
                <li>BOET zegt: Biib en paap</li>
</ul></p>
<p>{props.assignmentChild3}</p>
<div className="McGrid">
<p className="McGrid__text">BOTJEBOTJE:</p>
<input className="McInput" type="text"></input>
<p className="McGrid__text">EJTOB:</p>
<input className="McInput" type="text"></input>
<p className="McGrid__text">BO:</p>
<input className="McInput" type="text"></input>
<p className="McGrid__text">BOET:</p>
<input className="McInput" type="text"></input>
</div>
<button onClick={(event)=> {
                scrollY(event);
                ButtonActive();
            }}>Verzend</button>

    </section></div>
)
}

export const MultipleChoiceVraag2 = (props) => {
    return(
        <div className="wrapper">
        <section className="assignment-container">
<p>{props.assignment}
</p>

<p>{props.assignmentChild1}</p>
<input className="McInput" value="" type="text"></input>
<p>{props.assignmentChild2}</p>
<input className="McInput" value="" type="text"></input>
<p>{props.assignmentChild3}</p>
<input className="McInput" value="" type="text"></input>
<button onClick={(event)=> {
                scrollY(event);
                ButtonActive();
            }}>Verzend</button>
        </section></div>


    )
}