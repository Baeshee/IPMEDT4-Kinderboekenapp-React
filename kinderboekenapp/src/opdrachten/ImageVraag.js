import React, { Component } from 'react';

import './VraagImage.css';


class ImageVraag extends Component {

    // const fileSelectedHandler = (event, props)=> {
    //     console.log(event.target.files[0]);
    //     props = { file: event.target.files[0]};
    // }

    state = { file: null}

    handleChange = (event) => {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
          })
    }

    render(){
        return(
            <article className="wrapper">
                <section className="assignment-container">
                    <p className="assignments__text">{this.props.assignment}</p>
                    <form className="form fileUpload" action="">
                        <label className="label form__label" htmlFor="answer_2">Foto van jouw muts:</label>
                        <section className="img-container">
                            <img className="img-container-imageVraag" src={this.state.file} alt="" />
                        </section>
                        <input className="custom-file-input" type='file' accept="image/*" if="answer_2" name="answer_2" onChange={this.handleChange} />
                        <button className="button assignment__button image" type="submit"> Verzenden </button>
                    </form>
                </section>
            </article>
        )
    }
}

export default ImageVraag; 