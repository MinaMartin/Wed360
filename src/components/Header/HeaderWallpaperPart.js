import React from 'react'
import "./HeaderWallpaperPart.css";
export default function HeaderWallpaperPart(props) {
    let classes=['headerWallpaper'];
    classes.push(props.class);
    classes=classes.join(' ');

    return (
        <div className={classes}>
            <img src={props.image} alt={props.title}></img>
            <p>{props.title}</p>        
        </div>
    )
}
