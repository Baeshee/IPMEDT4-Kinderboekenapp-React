import React from "react";

import './Navbar.css';

const Navbar = (props) => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                {props.navitems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                <i className={item.icon}></i>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}


export default Navbar;