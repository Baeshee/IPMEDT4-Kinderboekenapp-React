import React from 'react';
import "./Modal.css";

import axios from 'axios';

//the modal for choosing a color for the robot
const Modal = ({ handleClose, show}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <article className={showHideClassName}>
        <section className="modal-main">
            <section className="modal__header">
                <span type="button" onClick={handleClose} className="close">&times;</span>
                <h2 className="modal__header__h2">Kies hier een kleur voor je robot!</h2>
            </section>
          <section className="popup__content__body__filter">
                <form>
                    <select className="filterOptions_section__filterButton">
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