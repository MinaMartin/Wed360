import React, { useState } from 'react';
import HeaderPart from './HeaderPart/HeaderPart';
import "./Header.css";
import Logo from "../../assets/images/logo-a44ab28137d9c6c366386172e63d31ba35dfd616b594a0b39e1f5d45a3130973.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Wallpaper1 from "../../assets/images/forthewedding-9ba500f0c747d8a3a8797fe57cc23bdbe79d6936b3454ed882e228246a159f4b.png";
import Wallpaper2 from "../../assets/images/planningtools-d1a30fd03ae452337356780c2d6545641fc09ceafacc9be6e630691289f3ebcd.png";
import Wallpaper3 from "../../assets/images/budgeter-27e2c6b8ba6c84b111d99659d3c6269e9c3b650df4c14685abcac121e67d81ee.png";
import Wallpaper4 from "../../assets/images/registry-87ef274209be2a9aecbd2f710150ba8b117639e2f7dbbdd5ad46dd8c91a0135e.png";
import Wallpaper5 from "../../assets/images/guestlist-b990534b68681a3b18c91c6d8dd7291530296b4ccd8d74a7777902546a7f8d1b.png";
import Wallpaper6 from "../../assets/images/checklist-e2bd8988d69f03031a18b466eb01f4d63b1679dfb5b8f505992e0828c17ca0cc.png";
import HeaderWallpaperPart from "./HeaderWallpaperPart";




const Header = () => {
    const [HeaderWallpaper,SetHeaderWallpaper] = useState(false); 

    const showHeaderWallpaper = () => {
        SetHeaderWallpaper(prevState => { return !prevState})
        console.log(HeaderWallpaper);
    }

const Wallpapers=[
    {
    image:Wallpaper1,
    Link:"https://weds360.com/en/360planner",
    className:'row1',
    title:'For the Wedding'
    },
    {
        image:Wallpaper2,
        Link:"https://weds360.com/en/360planner",
        className:'row1',
        title:'360 Planner'
    },
    {
        image:Wallpaper1,
        Link:"https://weds360.com/en/360planner",
        className:'row1',
        title:'Her'
    },
    {
        image:Wallpaper2,
        Link:"https://weds360.com/en/360planner",
        className:'row1',
        title:'Him'
    },
    {
        image:Wallpaper3,
        Link:"https://weds360.com/en/360planner",
        className:'row2',
        title:'budgeter'
    },
    {
        image:Wallpaper4,
        Link:"https://weds360.com/en/360planner",
        className:'row2',
        title:'Registry list'
    },
    {
        image:Wallpaper5,
        Link:"https://weds360.com/en/360planner",
        className:'row2',
        title:'Guest list'
    },
    {
        image:Wallpaper6,
        Link:"https://weds360.com/en/360planner",
        className:'row2',
        title:'check list'
    },    
    {
        image:Wallpaper1,
        Link:"https://weds360.com/en/360planner",
        className:'row1',
        title:'ideas & More'
    },
    {
        image:Wallpaper2,
        Link:"https://weds360.com/en/360planner",
        className:'row1',
        title:'Gallery'
    }
]
    let WallpaperCalsses=['header-wallpaper'];
    if(HeaderWallpaper){
        WallpaperCalsses.push('toggleWallpaper')
    }
    WallpaperCalsses=WallpaperCalsses.join(' ');

    return(
        <div className="header">
            <div className="languages">
                <a href="https://weds360.com/en/users/sign_in"><FontAwesomeIcon icon="user"/> |</a>
                <a href="https://weds360.com/ar">العربية | </a>
            </div>
            <HeaderPart></HeaderPart>
            <a href="https://weds360.com/en/home"><img src={Logo} alt="Wed360"></img></a>
            <HeaderPart></HeaderPart>
            <button onClick={showHeaderWallpaper}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={WallpaperCalsses}>
                {Wallpapers.map(wallpaper => (
                    <HeaderWallpaperPart
                    link={wallpaper.Link} 
                    image={wallpaper.image}
                    title={wallpaper.title}
                    class={wallpaper.className}
                    key={wallpaper.title}
                    showWallpaper={HeaderWallpaper}></HeaderWallpaperPart>
                ))}
            </div>
        </div>
    )
}

export default Header;

