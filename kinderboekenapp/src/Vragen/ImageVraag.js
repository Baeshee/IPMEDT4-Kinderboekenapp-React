import React, { Component } from "react";

export const ImageVraag = () => {
    return(
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
    )
}

export const ImageAntwoord = () => {
    return(
        <section className="assignment-container">
            <h2>Jouw antwoord:</h2>
            <p></p>
            <figure>
                <img src="../logo512.png" alt="" />
            </figure>
            <p></p>
        </section>
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