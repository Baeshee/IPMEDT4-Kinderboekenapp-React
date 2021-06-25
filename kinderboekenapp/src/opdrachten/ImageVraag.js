import React, { Component } from 'react';
import './VraagImage.css';
let x = 0;
let r = window.pageYOffset || document.documentElement.scrollTop;
let arr = document.getElementsByClassName('assignment__button');
let arr2 = document.getElementsByTagName('section');
let arr3 = document.getElementsByClassName('Nav__item');

class ImageVraag extends Component {

    // const fileSelectedHandler = (event, props)=> {
    //     console.log(event.target.files[0]);
    //     props = { file: event.target.files[0]};
    // }+
    ButtonActive(){
        arr[x].style.backgroundColor = '#0e8034';
        arr2[x].style.borderWidth = 'thick';
        arr2[x].style.borderColor = "#0e8034";
        x++;
    }

    scrollY(event){
        event.preventDefault();
        let top  = window.pageYOffset || document.documentElement.scrollTop;
        top = top + 950;
        setTimeout(() => {
            window.scroll({top: top, behavior: 'smooth'});
        }, 500);
    }

    state = { file: null}

    handleChange = (event) => {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
          })
    }
componentDidMount(){
    setInterval(() => {
        if(window.scrollY > 0 && window.scrollY < 1100){
            arr3[0].classList.add('nav__active')
        } else if(window.scrollY > 1101 && window.scrollY < 2400){
            arr3[1].classList.add('nav__active')
        }else if(window.scrollY > 2401 && window.scrollY < 3000){
            arr3[2].classList.add('nav__active')
        }else if(window.scrollY > 3001){
            arr3[3].classList.add('nav__active')
        }
    }, 250);
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
                        <button className="button assignment__button image" onClick={(event)=> {
                                this.scrollY(event);
                                this.ButtonActive();
                            }}>Verzenden</button>
                    </form>
                </section>
            </article>
        )
    }
}

export default ImageVraag; 