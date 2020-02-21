import React from 'react';
import "./Service.css";

const Service = (props) => {

    return(
        <div className="Service">
            <div className="image">
                <img src={props.image} alt={props.title}></img>
            </div>
            <div className="info">
            <h4>{props.title}</h4>
                {props.content} 
            <a href={props.href}>{props.link}</a>
            </div>
        </div>
    )
}

export default Service;