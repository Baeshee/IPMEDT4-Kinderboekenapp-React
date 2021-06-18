import React, { Component, useState } from "react";
import ReactAudioPlayer from 'react-audio-player';
import axios from 'axios';
import { render } from "@testing-library/react";


function handleChange(event){
    this.setState({value: event.target.value});
}

export const intro = () =>{
const test = this.props;
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
        <section className="assignment-container">
            <p>Speciaal voor het snowboardteam breidt Bibi haar vader de meest bijzondere mutsen! Ook zelf draagt hij graag een bijzondere muts, zoals een broccolimuts.

Wat zou jij voor bijzondere muts willen dragen? Maak een ontwerp van jouw eigen muts! Teken hem op het juiste formaat uit, knip hem uit en bekijk zelf voor de spiegel hoe hij staat of knutsel hem zodat hij echt op jouw hoofd past. Upload als je klaar bent een foto voor in je boekenkast.
</p>
            <form className="fileUpload" action="">
                <label className="form__label" htmlFor="answer_2">Foto van jouw muts</label>
                <input className="form__input image" type="file" if="answer_2" name="answer_2" />
                <input type="submit" />
            </form>
           
        </section>
    )
}

export const ImageAntwoord = () => {
    return(
        <section className="assignment-container">
              <form><label for="color"></label><input className="colorInput" id="color" value={this.state.value} onChange={this.handleChange} name="color" type="color"></input></form><label for="userColor">Schrijf hier je kleur op:</label><input id="userColor" className="userColor" type="text" ></input><button id="submitButton" className="submitButton" type="submit" onClick="">Bevestig je kleur!</button></section>
    )
}

export const ImageUnavailable = () =>{
    return(
        
        <section className="assignment-container">
           <h2>Lees eerst hoofdstuk 1 tot en met hoofdstuk 5</h2>
            <button>Ik heb het gelezen</button>
        </section>
    )
}

export const AudioVraag = () => {
    return(
        <section className="assignment-container"><p className="bold">We willen het boek graag introduceren met een filmpje of een luisterfragment. Hierin vertellen wij iets over het boek adhv de flaptekst. </p>
            <ReactAudioPlayer
  src="my_audio_file.ogg"
  className="AudioPlayer"
  autoPlay
  controls
/></section>
    )
}
export const AudioAntwoord = () => {
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


export const ColorVraag = () => {
    return(
        <section className="assignment-container"><p>Bibi haar vader heeft een wolwinkel en verkoopt daar de meest bijzondere kleuren wol. Zo lezen we over paardenbloemstengelgroen, varkensstaartjesroze, diepzeezwart, watermeloenrood, krijtrotswit en Middellandsezeeblauw. In de naam van de kleur zie je steeds al staan waar je de kleur ‘in het echt’ terug kunt zien.<br></br>

        Kun jij ook zo’n mooie naam bedenken voor een kleur? Hieronder kun jij een kleur kiezen. Zoek de mooiste kleur uit en geef hem net zo’n bijzondere naam. Bedenk daarvoor dus goed waar de kleur jou precies aan doet denken..
        </p>
              <form><label for="color"></label><input className="colorInput" id="color" name="color" value="" type="color"></input></form><label for="userColor">Schrijf hier je kleur op:</label><input id="userColor" className="userColor" type="text" ></input><button id="submitButton" className="submitButton" type="submit" onClick="">Bevestig je kleur!</button></section>
    )
}

export const ColorAntwoord = () => {
    return(
        <section className="assignment-container"><p> Bibi haar vader heeft een wolwinkel en verkoopt daar de meest bijzondere kleuren wol. Zo lezen we over paardenbloemstengelgroen, varkensstaartjesroze, diepzeezwart, watermeloenrood, krijtrotswit en Middellandsezeeblauw. In de naam van de kleur zie je steeds al staan waar je de kleur ‘in het echt’ terug kunt zien.<br></br>

        Kun jij ook zo’n mooie naam bedenken voor een kleur? Hieronder kun jij een kleur kiezen. Zoek de mooiste kleur uit en geef hem net zo’n bijzondere naam. Bedenk daarvoor dus goed waar de kleur jou precies aan doet denken..
        </p>
              <form><label for="color"></label><input className="colorInput" id="color" name="color" value="" type="color"></input></form><label for="userColor">Schrijf hier je kleur op:</label><input id="userColor" className="userColor" type="text" ></input><button id="submitButton" className="submitButton" type="submit" onClick="">Bevestig je kleur!</button></section>
    )
}

export const Podcast = () =>{
    return(
        <section className="assignment-container">
              <p>Hieronder vindt je een Podcast die over het boek gaat.</p>
      <ReactAudioPlayer
src="my_audio_file.ogg"
className="AudioPlayer"
autoPlay
controls
/>
            
        </section>
    )
    }

export const MultipleChoiceVraag = () =>{
return(
    <section className="assignment-container">
        <p>1.Botje zegt in plaats van ‘Bibi’ ‘Bibibi’, en in plaats van ‘papa’, ‘papapa’. Zie jij wat Botje doet? Hoe denk je dat botje mama zou noemen? …..</p>
        <input className="McInput" value="" type="text"></input>
        <p>2.Stel dat botje de woorden ‘dodo’, ‘jojo’ en ‘lolly’ zou uitspreken, hoe zou ze dat dan doen?</p>
        <input className="McInput" value="" type="text"></input>
        <p>3. Stel dat er twee andere botjes zijn, ze heten BOTJEBOTJE, EJTOB, BOT en BOET
            <ul>
                <li>BOTJEBOTJE zegt: Bibibibi en papapapa</li>
                <li>EJTOB zegt: Ibib en apap.</li>
                <li>BO zegt: bi en pa</li>
                <li>BOET zegt: Biib en paap</li>
</ul></p>
<p>Hoe zouden BOTJEBOTJE, EJTOB, BO en BOET ‘mama’ noemen? </p>
<div className="McGrid">
<p>BOTJEBOTJE:</p>
<input className="McInput" type="text"></input><button className="McGrid__McButton">Verzend</button>
<p>EJTOB:</p>
<input className="McInput" type="text"></input><button>Verzend</button>
<p>BO:</p>
<input className="McInput" type="text"></input><button>Verzend</button>
<p>BOET:</p>
<input className="McInput" type="text"></input><button>Verzend</button>
</div>

    </section>
)
}

export const MultipleChoiceVraag2 = () => {
    return(
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
<button>Verzend</button>
        </section>


    )
}