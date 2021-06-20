import React from 'react';
import {colorImg} from './ColorImg';


class ColorOptions extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: "blauw"};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        // nu naar de mascotte page om src te veranderen?
        let color = this.state.value;
        alert("Je hebt de robot veranderd in de kleur " + color);
        this.props.test();
        console.log(colorImg);
        {colorImg.map((item, index) =>{
            const colorsImg = item.label;
            console.log(colorsImg);
            event.preventDefault();
        })}
    }

    // test = () =>{
    //     this.props.colorPick(this.props.value);
    // }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Kies hier je kleur: </label>
                <select value={this.state.value} onChange={this.handleChange} className="modal__content__options">
                    <option value="blauw">blauw</option>
                    <option value="groen">groen</option>
                    <option value="rood">rood</option>
                    <option value="geel">geel</option>
                    <option value="oranje">oranje</option>
                    <option value="aqua">aqua</option>
                    <option value="paars">paars</option>
                </select>
                <input type="submit" value="submit" onClick={this.test}/>   
            </form>
        );
    }
}

export default ColorOptions;


{/* <select className="modal__content__options">
                        <option value="blue">Kies kleur</option>
                        <option value="blue">blauw</option>
                        <option value="green">groen</option>
                        <option value="red">rood</option>
                        <option value="yellow">geel</option>
                        <option value="orange">oranje</option>
                        <option value="aqua">aqua</option>
                        <option value="purple">paars</option>
                    </select> */}