import React, { Component } from "react";
import ReactAudioPlayer from 'react-audio-player';



export const AudioVraag = () => {
    return(
        <section className="section__intro"><p>We willen het boek graag introduceren met een filmpje of een luisterfragment. Hierin vertellen wij iets over het boek adhv de flaptekst. </p>
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
        <section className="section__intro"><p>We willen het boek graag introduceren met een filmpje of een luisterfragment. Hierin vertellen wij iets over het boek adhv de flaptekst. </p>
            <ReactAudioPlayer
  src="my_audio_file.ogg"
  className="AudioPlayer"
  autoPlay
  controls
/></section>
    )
}
