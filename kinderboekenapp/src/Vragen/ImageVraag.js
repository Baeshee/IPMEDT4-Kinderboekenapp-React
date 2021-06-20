import React, { Component, useEffect, useState } from "react";
import ReactAudioPlayer from 'react-audio-player';
import axios from 'axios';
import { render } from "@testing-library/react";
var x = 0;
var API_URL = 'http://localhost:8000/api/assignments'


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


    function GetQuestions(props){
        axios.get(API_URL).then(res => {
            const questions = res.data;
            console.log(questions);
        })
    }


function CheckQuestions(props){
    axios.post(API_URL).then(res=> {
        const questions = res.data;
        console.log(res);
        console.log(questions);
    })
}


export const ImageUnavailable = (props) =>{
    
    return(
        <div className="wrapper">
        <section className="assignment-container">
           <h2>Lees eerst hoofdstuk 1 tot en met hoofdstuk 5</h2>
            <button onClick={(event)=> {
                scrollY(event);
                ButtonActive();
            }}> Ik heb het gelezen</button>
             
        </section>

        
    </div>)
}

export const intro = () =>{
    return(
        <section className="assignment-container"><p>We willen het boek graag introduceren met een filmpje of een luisterfragment. Hierin vertellen wij iets over het boek adhv de flaptekst. </p>
            <ReactAudioPlayer
  src="my_audio_file.ogg"
  className="AudioPlayer"
  autoPlay
  controls
/></section>
    )

}

export const ImageVraag = () => {
    return(
        <div className="wrapper">
        <section className="assignment-container">
            <p>Speciaal voor het snowboardteam breidt Bibi haar vader de meest bijzondere mutsen! Ook zelf draagt hij graag een bijzondere muts, zoals een broccolimuts.

Wat zou jij voor bijzondere muts willen dragen? Maak een ontwerp van jouw eigen muts! Teken hem op het juiste formaat uit, knip hem uit en bekijk zelf voor de spiegel hoe hij staat of knutsel hem zodat hij echt op jouw hoofd past. Upload als je klaar bent een foto voor in je boekenkast.
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

export const ImageAntwoord = props => {
    return(
        <div className="wrapper">
        <section className="assignment-container">
              <form><label for="color"></label>
              <input className="colorInput" id="color" value={this.props.value} name="color" type="color"></input></form>
              <label for="userColor">Schrijf hier je kleur op:</label><input id="userColor" className="userColor" type="text" ></input><button id="submitButton" className="submitButton" type="submit" onClick={scrollY}>Bevestig je kleur!</button></section></div>
    )
}

export const AudioVraag = () => {
    return(
        <div className="wrapper" >
        <section className="assignment-container"><p className="bold">We willen het boek graag introduceren met een filmpje of een luisterfragment. Hierin vertellen wij iets over het boek adhv de flaptekst. </p>
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

export const AudioAntwoord = () => {
    return(
        <div className="wrapper" >
        <section className="assignment-container"><p>We willen het boek graag introduceren met een filmpje of een luisterfragment. Hierin vertellen wij iets over het boek adhv de flaptekst. </p>
            <ReactAudioPlayer
  src="my_audio_file.ogg"
  className="AudioPlayer"
  autoPlay
  controls
/></section></div>
    )
}

// export const ColorVraag = () => {
//     return(
//         <div className="wrapper">
//         <section className="assignment-container"><p>Bibi haar vader heeft een wolwinkel en verkoopt daar de meest bijzondere kleuren wol. Zo lezen we over paardenbloemstengelgroen, varkensstaartjesroze, diepzeezwart, watermeloenrood, krijtrotswit en Middellandsezeeblauw. In de naam van de kleur zie je steeds al staan waar je de kleur ‘in het echt’ terug kunt zien.<br></br>

//         Kun jij ook zo’n mooie naam bedenken voor een kleur? Hieronder kun jij een kleur kiezen. Zoek de mooiste kleur uit en geef hem net zo’n bijzondere naam. Bedenk daarvoor dus goed waar de kleur jou precies aan doet denken..
//         </p>
//               <form><label for="color"></label><input className="colorInput" id="color" name="color"  type="color"></input></form><label for="userColor">Schrijf hier je kleur op:</label><input id="userColor" className="userColor" type="text" ></input><button id="submitButton" className="submitButton" type="submit" onClick={(event)=> {
//                 scrollY(event);
//                 ButtonActive();
//             }}>Bevestig je kleur!</button></section></div>
//     )
// }

export const ColorVraag = () => {
    return(
        <div className="wrapper">
        <section className="assignment-container"><p>
        </p>
              <form><label for="color"></label><input className="colorInput" id="color" name="color"  type="color"></input></form><label for="userColor">Schrijf hier je kleur op:</label><input id="userColor" className="userColor" type="text" ></input><button id="submitButton" className="submitButton" type="submit" onClick={(event)=> {
                scrollY(event);
                ButtonActive();
            }}>Bevestig je kleur!</button></section></div>
    )
}


export const ColorAntwoord = () => {
    return(
        <div className="wrapper">
        <section className="assignment-container"><p> 
        </p>
              <form><label for="color"></label><input className="colorInput" id="color" name="color"  type="color"></input></form><label for="userColor">Schrijf hier je kleur op:</label><input id="userColor" className="userColor"  type="text" ></input><button id="submitButton" className="submitButton" type="submit" onClick={(event)=> {
                scrollY(event);
                ButtonActive();
            }}>Bevestig je kleur!</button></section></div>
    )
}

export const Podcast = () =>{
    return(
        <div className="wrapper">
        <section className="assignment-container">
            
              <p>Hieronder vindt je een Podcast die over het boek gaat.</p>
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

export const MultipleChoiceVraag = () =>{
return(
    <div className="wrapper">
    <section className="assignment-container">
        <p>1.Botje zegt in plaats van ‘Bibi’ ‘Bibibi’, en in plaats van ‘papa’, ‘papapa’. Zie jij wat Botje doet? Hoe denk je dat botje mama zou noemen? …..</p>
        <input className="McInput" type="text"></input>
        <p>2.Stel dat botje de woorden ‘dodo’, ‘jojo’ en ‘lolly’ zou uitspreken, hoe zou ze dat dan doen?</p>
        <input className="McInput" type="text"></input>
        <p>3. Stel dat er twee andere botjes zijn, ze heten BOTJEBOTJE, EJTOB, BOT en BOET
            <ul>
                <li>BOTJEBOTJE zegt: Bibibibi en papapapa</li>
                <li>EJTOB zegt: Ibib en apap.</li>
                <li>BO zegt: bi en pa</li>
                <li>BOET zegt: Biib en paap</li>
</ul></p>
<p>Hoe zouden BOTJEBOTJE, EJTOB, BO en BOET ‘mama’ noemen? </p>
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

export const MultipleChoiceVraag2 = () => {
    return(
        <div className="wrapper">
        <section className="assignment-container">
<p>Ken jij het woord ‘onbetaalbaar’? Wat betekent dat (voor jou?).
Iets dat onbetaalbaar is, dat is iets wat je voor geen geld zou willen verkopen. Niet voor al het geld in de wereld.
</p>
<p>
In het boek is Bibi bang dat haar vader botje verkoopt aan De Rus. De Rus heeft namelijk een koffer met héél veel geld. Voor Bibi is botje onbetaalbaar. Hoe veel geld De Rus haar ook zo betalen, ze zou botje nooit weggeven.
</p>
<p >Denk eens na:</p>
<p>Waarom denk je dat Bibi Botje niet wil verkopen, zelfs niet voor héél veel geld? </p>
<input className="McInput" value="" type="text"></input>
<p>Wat zou jij hebben gedaan als je in dezelfde situatie zat als Bibi?</p>
<input className="McInput" value="" type="text"></input>
<p>Zijn er dingen die voor jou onbetaalbaar zijn? Waarom zijn die onbetaalbaar voor je?</p>
<input className="McInput" value="" type="text"></input>
<button onClick={(event)=> {
                scrollY(event);
                ButtonActive();
            }}>Verzend</button>
        </section></div>


    )
}