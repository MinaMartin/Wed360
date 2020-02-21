import React from 'react';
import "./HoverItem.css";

const HoverItem = () => {

    return(
        <div className="hover" >
            <div className="headerItem">360 Planner</div>
            <div className="hoverList">
                <a href="#">CheckList</a>
                <a href="#">Budgeter</a>
                <a href="#">Registery List</a>
                <a href="#">Wedding Website</a>
                <a href="#">Couple Website</a>
            </div>
        </div>
    )
}

export default HoverItem;