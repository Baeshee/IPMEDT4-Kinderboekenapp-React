import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import axios from 'axios';
let x = 0;

const inputAnswer = (props) =>{
    const requestBody = {answer_1: props.answer_1, isbn: props.isbn, chapters: props.chapters};
    axios.patch("http://localhost:8000/api/assignments/1", requestBody)
}

function scrollY(event){
    event.preventDefault();
    let top  = window.pageYOffset || document.documentElement.scrollTop;
    top = top + 950;
    setTimeout(() => {
        window.scroll({top: top, behavior: 'smooth'});
    }, 500);
  }

function ButtonActive(){

    let arr = document.getElementsByClassName('assignment__button');
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
            <button className="assignment__button" onClick={(event)=> {
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

  autoPlay
  controls
/></section>
    )
}


export const ImageVraag = (props) => {
    return(
        <div className="wrapper">
        <section className="assignment-container">
            <p>{props.assignment}</p>
            <form className="fileUpload" action="">
                <label className="form__label" htmlFor="answer_2">Foto van jouw muts</label>
                <input type="file" if="answer_2" name="answer_2" />
                <button className="assignment__button" onClick={(event)=> {
                scrollY(event);
                ButtonActive();
             
            }}  type="submit"> Verzenden </button>
            </form>
           
        </section></div>
    )
}

export const ImageAntwoord = (props) => {
    return(
        <div className="wrapper">
        <section className="assignment-container">
            <p>{props.assignment}</p>
              <form><label htmlFor="color"></label>
              <input className="color__input" id="color" value={props.value} name="color" type="color"></input></form>
              <label htmlFor="user__color">Schrijf hier je kleur op:</label><input id="userColor" className="user__color" type="text" ></input><button className="assignment__button" id="submitButton" type="submit" onClick={scrollY}>Bevestig je kleur!</button></section></div>
    )
}

export const AudioVraag = (props) => {
    return(
        <div className="wrapper" >
        <section className="assignment-container"><p>{props.assignment}</p>
            <ReactAudioPlayer
  src="my_audio_file.ogg"

  autoPlay
  controls
/>
<button className="assignment__button" onClick={(event)=> {
                scrollY(event);
                ButtonActive();
            }}>Ik heb het geluisterd</button></section>
</div>
    )
}

export const AudioAntwoord = (props) => {
    return(
        <div className="wrapper" >
        <section className="assignment-container"><p>{props.assignment}</p>
            <ReactAudioPlayer
  src="my_audio_file.ogg"
  autoPlay
  controls
/></section></div>
    )
}



export const ColorVraag = (props) => {
    return(
        <div className="wrapper">
        <section className="assignment-container"><p>{props.assignment}</p>
        
              <form><label htmlFor="color"></label><input className="color__input" id="color" name="color"  type="color"></input></form><label htmlFor="userColor">Schrijf hier je kleur op:</label><input id="userColor" className="userColor" type="text" ></input><button className="assignment__button" id="submitButton" type="submit" onClick={(event)=> {
                scrollY(event);
                ButtonActive();
            }}>Bevestig je kleur!</button></section></div>
    )
}


export const ColorAntwoord = (props) => {
    return(
        <div className="wrapper">
        <section className="assignment-container"><p>{props.assignment}</p>
              <form><label htmlFor="color"></label><input className="color__input" id="color" name="color"  type="color"></input></form><label htmlFor="userColor">Schrijf hier je kleur op:</label>
              <input id="userColor" className="userColor"  type="text" ></input>
              <button className="assignment__button" id="submitButton"  type="submit" onClick={(event)=> {
                scrollY(event);
                ButtonActive();
                inputAnswer(props.isbn);
            }}>Bevestig je kleur!</button></section></div>
    )
}

export const Podcast = (props) =>{
    return(
        <div className="wrapper">
        <section className="assignment-container">
            
        <p>{props.assignment}</p>
      <ReactAudioPlayer
src="my_audio_file.ogg"
autoPlay
controls
/>
<button className="assignment__button" onClick={(event)=> {
                scrollY(event);
                ButtonActive();
            }} >Ik heb het geluisterd</button>
        </section></div>
    )
    }

export const MultipleChoice = (props) =>{
return(
    <div className="wrapper">
    <section className="assignment-container">
        <p>{props.assignment}</p>
        <input className="mc__input" type="text"></input>
        <p>{props.assignmentChild1}</p>
        <input className="mc__input" type="text"></input>
        <p>{props.assignmentChild2}
            <ul>
                <li>BOTJEBOTJE zegt: Bibibibi en papapapa</li>
                <li>EJTOB zegt: Ibib en apap.</li>
                <li>BO zegt: bi en pa</li>
                <li>BOET zegt: Biib en paap</li>
</ul></p>
<p>{props.assignmentChild3}</p>
<div className="mc__grid">
<p className="grid__text">BOTJEBOTJE:</p>
<input className="mc__input" type="text"></input>
<p className="grid__text">EJTOB:</p>
<input className="mc__input" type="text"></input>
<p className="grid__text">BO:</p>
<input className="mc__input" type="text"></input>
<p className="grid__text">BOET:</p>
<input className="mc__input" type="text"></input>
</div>
<button className="assignment__button" onClick={(event)=> {
                scrollY(event);
                ButtonActive();
            }}>Verzend</button>

    </section></div>
)
}

export const MultipleChoice2 = (props) => {
    return(
        <div className="wrapper">
        <section className="assignment-container">
<p>{props.assignment}
</p>

<p>{props.assignmentChild1}</p>
<input className="mc__input" value="" type="text"></input>
<p>{props.assignmentChild2}</p>
<input className="mc__input" value="" type="text"></input>
<p>{props.assignmentChild3}</p>
<input className="mc__input" value="" type="text"></input>
<button className="assignment__button" onClick={(event)=> {
                scrollY(event);
                ButtonActive();
            }}>Verzend</button>
        </section></div>


    )
}