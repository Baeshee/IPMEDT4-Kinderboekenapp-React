import React, { Component } from "react";

export const ImageVraag = () => {
    <section className="assignment-container">
        <h2>
            Maak een foto van jezelf met je hoed op en upload deze.
        </h2>
        <form action="">
            <label className="form__label" htmlFor="answer_2">Foto van jouw muts</label>
            <input className="form__input image" type="file" if="answer_2" name="answer_2" />
            <input type="submit" />
        </form>
    </section>
}

export const ImageAntwoord = () => {
    <section>
        <h2>Jouw antwoord:</h2>
        <p></p>
        <div></div>
        <h3>Jouw kleurnaam</h3>
        <p></p>
    </section>
}

export const ImageUnavailable = () =>{
    <section>
        <h2>Lees eerst hoofdstuk 1 tot en met hoofdstuk 5</h2>
        <button onClick={this.updateStatus_2}>Ik heb het gelezen</button>
    </section>
}