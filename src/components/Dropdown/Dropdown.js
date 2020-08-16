import React, { useState, useEffect} from 'react';
import './Dropdown.css';
import axios from 'axios';


const Dropdown = ({activeItem, items, setActive}) => {
    const dropdownItems = items.map((item, i) => 
        <li key = {i} onClick = {() => setActive(item)}> {item} </li>
    );
        return(
            <div className="dropdown">
                <button className="dropbtn">{activeItem}</button>
                <ul className="dropdown-content">
                    {dropdownItems}
                </ul>
            </div>
        );

    
};
export {Dropdown};

