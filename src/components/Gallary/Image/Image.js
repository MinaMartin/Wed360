import React from 'react';


import "./Image.css";

const Image = (props) => {

    return (
        <div className="Image">
            <div className="oneImage">
                <img src={props.image} alt={props.title}></img>
            </div>
            <h3>{props.title}</h3>
        </div>
    )
}

export default Image;