import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import axios from 'axios';
let x = 0;



// const myChangeHandler = (event) => {
//     this.state = { kleur: ''}
//     this.setState({kleur: event.target.value});
//   }

// API post met isbn & chapters
// const inputAnswer = (props) =>{
//     const requestBody = {answer_1: props.answer_1, isbn: props.isbn, chapters: props.chapters};
//     axios.patch("http://localhost:8000/api/assignments/1", requestBody)
// }

const inputAnswer = (props) =>{
    const requestBody = {answer_1: props.answer_1};
    axios.patch("http://localhost:8000/api/assignments/1", requestBody)
}
const inputAnswer2 = (props) =>{
    const requestBody = {answer_2: props.answer_2};
    axios.patch("http://localhost:8000/api/assignments/1", requestBody)
}
const inputAnswer3 = (props) =>{
    const requestBody = {answer_3: props.answer_3};
    axios.patch("http://localhost:8000/api/assignments/1", requestBody)
}
// const inputAnswer4 = (props) =>{
//     const requestBody = {answer_4: props.answer_4};
//     axios.patch("http://localhost:8000/api/assignments/1", requestBody)
// }

// const inputImage = (props) =>{
//     const objectURL = URL.createObjectURL(props.event.files[0]);
//     return objectURL;
// }


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
    let arr3 = document.getElementsByClassName('Nav__item');
    arr[x].style.backgroundColor = '#0e8034';
    arr2[x + 1].style.borderWidth = 'thick';
    arr2[x + 1].style.borderColor = "#0e8034";
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



export const ImageVraag = (props) => {
    return(
        <div className="wrapper">
        <section className="assignment-container">
            <p>{props.assignment}</p>
            <form className="fileUpload" action="">
                <label className="form__label" htmlFor="answer_2">Foto van jouw muts</label>
                <input onSubmit={(props) => props.inputImage} type="file" if="answer_2" name="answer_2" />
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
            <label htmlFor="user__color">Schrijf hier je kleur op:</label>
            <input id="userColor" className="user__color" type="text" ></input>
            <button className="assignment__button" id="submitButton" type="submit" onClick={scrollY}>Bevestig je kleur!</button></section></div>
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
            <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls/></section></div>
    )
}



export const ColorVraag = (props) => {
    return(
        <div className="wrapper">
        <section className="assignment-container"><p>{props.assignment}</p>
        
              <form><label htmlFor="color"></label>
              <input className="color__input" id="color" name="color"  type="color"></input></form><label htmlFor="userColor">Schrijf hier je kleur op:</label>
              <input id="userColor" className="userColor" type="text" ></input>
              <button className="assignment__button" id="submitButton" type="submit" onClick={(event)=> {
                scrollY(event);
                ButtonActive();
                inputAnswer(props);
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
    <p>1. Botje zegt in plaats van ‘Bibi’ ‘Bibibi’, en in plaats van ‘papa’, ‘papapa’. Zie jij wat Botje doet? Hoe denk je dat botje mama zou noemen?</p>
        <input className="mc__input" type="text" onClick={inputAnswer}></input>
      <p>2. Stel dat botje de woorden ‘dodo’, ‘jojo’ en ‘lolly’ zou uitspreken, hoe zou ze dat dan doen?</p>
        <input className="mc__input" type="text" onClick={inputAnswer2}></input>
        <p>3. Stel dat er twee andere botjes zijn, ze heten BOTJEBOTJE, EJTOB, BOT en BOET</p>
            <ul>
                <p><li>BOTJEBOTJE zegt: Bibibibi en papapapa</li></p>
                <p><li>EJTOB zegt: Ibib en apap.</li></p>
                <p><li>BO zegt: bi en pa</li></p>
                <p><li>BOET zegt: Biib en paap</li></p>
</ul>
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
                inputAnswer3(props);
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
<p> Denk eens na:</p>
<p>Waarom denk je dat Bibi Botje niet wil verkopen, zelfs niet voor héél veel geld? </p>
<input className="mc__input" value="" type="text"></input>
<p>Wat zou jij hebben gedaan als je in dezelfde situatie zat als Bibi?</p>
<input className="mc__input" value="" type="text"></input>
<p>Zijn er dingen die voor jou onbetaalbaar zijn? Waarom zijn die onbetaalbaar voor je?</p>
<input className="mc__input" value="" type="text"></input>
<button className="assignment__button" onClick={(event)=> {
                scrollY(event);
                ButtonActive();
                inputAnswer(props);
            }}>Verzend</button>
        </section></div>


    )
}

