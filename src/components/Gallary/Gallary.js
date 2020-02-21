import React from 'react';
import oneImage from "../../assets/images/image_processing20190714-53-sf2eqc.png";

import Image from './Image/Image';
import "./Gallary.css";

const Gallery = () => {
    const Images = [
        {
            image:oneImage,
            title:'Wedding details'
        },
        {
            image:oneImage,
            title:'Wedding details'
        },
        {
            image:oneImage,
            title:'Wedding details'
        },
        {
            image:oneImage,
            title:'Wedding details'
       },
        {
            image:oneImage,
            title:'Wedding details'
        } ,
        {
            image:oneImage,
            title:'Wedding details'
        } ,
        {
            image:oneImage,
            title:'Wedding details'
        } ,
        {
            image:oneImage,
            title:'Wedding details'
        } ,
        {
            image:oneImage,
            title:'Wedding details'
        } 
    ];

    return (
        <div className="Gallery">
            <div className="breadcrumb">
                <h3><a href="https://weds360.com/en/categories?parent_menu=photos">Gallery </a> > Wedding Ideas</h3>
            </div>
            <div className="search">
                <form>
                    <div>
                        <button className='clearButton'>Clear</button>
                        <button className='applyButton'>Apply</button>
                    </div>
                    <input type="text" placeholder="Search"></input>
                </form>
            </div>
            <div className='Images'>
                {Images.map(Img => (
                    <Image image={Img.image} title={Img.title}></Image>
                ))}
            </div>
        </div>
    )
}

export default Gallery;