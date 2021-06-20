import React from 'react';
import './Mascotte.css'
import ColorOptions from './ColorOptions';


class ProfileMascotte extends React.Component {
    colorPick = (value) => {
        this.props.colorPick(value);
        // this.event.colorImgSubmitted(this.state.value);
        console.log("test");
    }

    render() {
        return (
            <section className="mascotte-name__section">
                <figure className="mascotte-name__section__figure">
                    <img className="mascotte-name__section__figure__img" src="img/mascotte_blue.png" alt="foto van een robot"></img>
                </figure>   
            </section>
        );
    }
}

export default ProfileMascotte;