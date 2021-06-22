import React from 'react';
import './Mascotte.css'
import {connect} from "react-redux";

class ProfileMascotte extends React.Component{
    
    render(){
        return(
            <section className="mascotte-name__section">
                <figure className="mascotte-name__section__figure">
                    <img className="mascotte-name__section__figure__img" src={this.props.BASE_URL + this.props.colorValue} alt="foto van een robot"></img>
                </figure>   
            </section>
        );
    }
}


const mapStateToProps = state =>{
    return {colorValue: state.colorValue, BASE_URL: state.BASE_URL}
}

export default connect(mapStateToProps)(ProfileMascotte);