import React from 'react';
import './FilterOptions.css';
import { Leeftijd, Genre, Auteur } from './Options'

class FilterOptions extends React.Component{
    render(){
        return(
            <section className="filterOptions_section">
                <p className="filterOptions_section_p">Filteren</p>
                <form>
                    <select className="filterOptions_section__filterButton">
                        {Leeftijd.map((item,index) => {
                            return(
                                <option key={index} value={item.value}>{item.label}</option>
                            )
                        })}
                    </select>

                    <select className="filterOptions_section__filterButton">
                        {Genre.map((item,index) => {
                            return(
                                <option key={index} value={item.value}>{item.label}</option>
                            )
                        })}
                    </select>

                    <select className="filterOptions_section__filterButton filterOptions_section__filterButton--auteur">
                        {Auteur.map((item,index) => {
                            return(
                                <option key={index} value={item.value}>{item.label}</option>
                            )
                        })}
                    </select>
                </form>
            </section>

        );
    }
}

export default FilterOptions;