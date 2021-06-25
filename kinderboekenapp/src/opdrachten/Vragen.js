import React, { useState, setState } from "react";
import ReactAudioPlayer from 'react-audio-player';
import axios from 'axios';
let x = 0;
let y = window.scrollY;




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

// const inputImage = (event) =>{
//     const objectURL = URL.createObjectURL(event.target.files);
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
  //  const [active, setActive] = useState(false);
    // let arr = document.getElementsByClassName('assignment__button');
    // arr[x].style.backgroundColor = '#0e8034';
    // x++;
}

export const VraagUnavailable = (props) =>{
    
    return(
        <article className="wrapper">
            <section className="assignment-container">
            <h2 className="assignments_header">{props.chapters} </h2>
                <button className="assignment__button" onClick={(event)=> {
                    scrollY(event);
                    ButtonActive();
                }}> Ik heb het gelezen!</button>
            </section>
        </article>)
}


export const ImageAntwoord = (props) => {
    return(
        <article className="wrapper">
            <section className="assignment-container">
                <p className="assignments__text">{props.assignment}</p>
                <form className="form">
                    <label htmlFor="color"></label>
                    <input className="input color__input" id="color" value={props.value} name="color" type="color"></input>
                </form>
                <label className="label" htmlFor="user__color">Schrijf hier je kleur op:</label>
                <input id="input userColor" className="user__color" type="text" ></input>
                <button className="button assignment__button" id="submitButton" type="submit" onClick={ButtonActive}>Bevestig je kleur!</button>
            </section>
        </article>
    )
}

export const AudioVraag = (props) => {
    return(
        <article className="wrapper" >
            <section className="assignment-container"><p>{props.assignment}</p>
                <ReactAudioPlayer
                src="my_audio_file.ogg"
                autoPlay
                controls
                />
                <button className="button assignment__button" onClick={(event)=> {
                                scrollY(event);
                                ButtonActive();
                            }}>Ik heb het geluisterd!</button>
            </section>
        </article>
    )
}

export const AudioAntwoord = (props) => {
    return(
        <article className="wrapper" >
            <section className="assignment-container"><p>{props.assignment}</p>
                <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls/>
            </section>
        </article>
    )
}



export const ColorVraag = (props) => {
    return(
        <article className="wrapper">
            <section className="assignment-container"><p>{props.assignment}</p>
        
                <form className="form">
                    <label className="label" htmlFor="color"></label>
                    <input className="input color__input" id="color" name="color"  type="color"></input>
                </form>
                <label className="label" htmlFor="userColor">Schrijf hier je kleur op:</label>
                <input id="userColor" className="input userColor" type="text" ></input>
                <button className="button assignment__button" id="submitButton" type="submit" onClick={(event)=> {
                    scrollY(event);
                    ButtonActive();
                //    inputAnswer(props);
                }}>Bevestig je kleur!</button>
            </section>
        </article>
    )
}


export const ColorAntwoord = (props) => {
    return(
        <article className="wrapper">
            <section className="assignment-container"><p>{props.assignment}</p>
                <form className="form">
                    <label className="label" htmlFor="color"></label>
                    <input className="color__input" id="color" name="color"  type="color"></input>
                </form>
                <label className="label"htmlFor="userColor">Schrijf hier je kleur op:</label>
                <input id="userColor" className="input userColor"  type="text" ></input>
                <button className="button assignment__button" id="submitButton"  type="submit" onClick={(event)=> {
                    scrollY(event);
                    ButtonActive();
             //       inputAnswer(props.isbn);
                }}>Bevestig je kleur!</button>
            </section>
        </article>
    )
}

export const Podcast = (props) =>{
    return(
        <article className="wrapper">
            <section className="assignment-container"> 
            <p className="assignments__text">{props.assignment}</p>
                <ReactAudioPlayer
                    src="my_audio_file.ogg"
                    autoPlay
                    controls
                    />
                <button className="button assignment__button" onClick={(event)=> {
                        scrollY(event);
                        ButtonActive();
                    }} >Ik heb het geluisterd!</button>
            </section>
        </article>
    )
    }

export const MultipleChoice = (props) =>{
return(
    <article className="wrapper">
        <section className="assignment-container">
            <p className="assignments__text">1. Botje zegt in plaats van ‘Bibi’ ‘Bibibi’, en in plaats van ‘papa’, ‘papapa’. Zie jij wat Botje doet? Hoe denk je dat botje mama zou noemen?</p>
            <input className="input mc__input" type="text" onClick={inputAnswer}></input>
            <p className="assignments__text">2. Stel dat botje de woorden ‘dodo’, ‘jojo’ en ‘lolly’ zou uitspreken, hoe zou ze dat dan doen?</p>
            <input className="input mc__input" type="text" onClick={inputAnswer2}></input>
            <p className="assignments__text">3. Stel dat er twee andere botjes zijn, ze heten BOTJEBOTJE, EJTOB, BOT en BOET</p>
            <ul className="assignment-list">
                <p><li className="assignment-list__item">BOTJEBOTJE zegt: Bibibibi en papapapa</li></p>
                <p><li className="assignment-list__item">EJTOB zegt: Ibib en apap.</li></p>
                <p><li className="assignment-list__item">BO zegt: bi en pa</li></p>
                <p><li className="assignment-list__item">BOET zegt: Biib en paap</li></p>
            </ul>
            <article className="mc__grid">
                <p className="grid__text">BOTJEBOTJE:</p>
                <input className="input mc__input" type="text"></input>
                <p className="grid__text">EJTOB:</p>
                <input className="input mc__input" type="text"></input>
                <p className="grid__text">BO:</p>
                <input className="input mc__input" type="text"></input>
                <p className="grid__text">BOET:</p>
                <input className="input mc__input" type="text"></input>
            </article>
            <button className="button assignment__button" onClick={(event)=> {
                            scrollY(event);
                            ButtonActive();
                  //          inputAnswer3(props);
                        }}>Verzend</button>

        </section>
    </article>
)
}

export const MultipleChoice2 = (props) => {
    return(
        <article className="wrapper">
            <section className="assignment-container">
                <p className="assignments__text">{props.assignment}</p>
                <p className="assignments__text"> Denk eens na:</p>
                <p className="assignments__text">Waarom denk je dat Bibi Botje niet wil verkopen, zelfs niet voor héél veel geld? </p>
                <input className="input mc__input" value="" type="text"></input>
                <p className="assignments__text">Wat zou jij hebben gedaan als je in dezelfde situatie zat als Bibi?</p>
                <input className="input mc__input" value="" type="text"></input>
                <p className="assignments__text">Zijn er dingen die voor jou onbetaalbaar zijn? Waarom zijn die onbetaalbaar voor je?</p>
                <input className="input mc__input" value="" type="text"></input>
                <button className="button assignment__button" onClick={(event)=> {
                                scrollY(event);
                                ButtonActive();
            //                    inputAnswer(props);
                            }}>Verzend</button>
            </section>
        </article>
    )
}

