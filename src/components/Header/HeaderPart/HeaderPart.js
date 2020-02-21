import React from 'react';
import "./HeaderPart.css";
import HoverItem from "../HoverItem/HoverItem";
const HeaderPart = () => {

    return(
        <div className="headerPart">
            <HoverItem></HoverItem>
            <HoverItem></HoverItem>   
        </div>
    )
}

export default HeaderPart;