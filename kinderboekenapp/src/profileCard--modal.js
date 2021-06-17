import React from 'react';
import "./Modal.css";

import axios from 'axios';

//the modal for choosing a color for the robot
const Modal = ({ handleClose, show}) => {
    const showHideClassName = show ? "popup display-block" : "popup display-none";
  
    return (
      <article className={showHideClassName}>
        <section className="modal">
            <section className="modal__header">
                <span className="modal__header__close" type="button" onClick={handleClose}>&times;</span>
                <h2 className="modal__header__h2">Kies hier een kleur voor je robot!</h2>
            </section>
          <section className="modal__content">
                <form>
                    <select className="modal__content__options">
                        <option value="blue">Kies kleur</option>
                        <option value="blue">blauw</option>
                        <option value="green">groen</option>
                        <option value="red">rood</option>
                        <option value="yellow">geel</option>
                        <option value="orange">oranje</option>
                        <option value="aqua">aqua</option>
                        <option value="purple">paars</option>
                    </select>
                </form>
            </section>  
        </section>
      </article>
    );
  };

export default Modal;