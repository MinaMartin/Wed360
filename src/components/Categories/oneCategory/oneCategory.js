import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import Image from '../../Gallary/Image/Image';
import axios from 'axios';
import './oneCategory.css';

export default function OneCategory(props) {
    const [ImagesState,setImages]=useState([]);
    let CategoryName=useRef();
    /* const [totalNumberofImages,setTotalNumberOfImages]=useState(''); */
    //const [paginationContent,setPaginationContent]=useState([]);
    //let [pageNumber,setPageNumber]=useState(1);
    const [searchValue,setSearchValue]=useState('')

    useEffect(() => {
        axios.get(`http://localhost:8080/categories/${props.match.params.id}`)
            .then(response => {
                CategoryName.current=response.data.categoryName;
                return axios.get(`http://localhost:8080/Images/?category=${CategoryName.current}`)
            })
            .then(response => {
                //console.log(response);
                const imagesArr = [];
                for(let imageInfo in response.data){
                    imagesArr.push({...response.data[imageInfo]});
                }
                setImages(imagesArr);
            })
    },[props.match.params.id])//get Category Name

    const onSubmitHandler =(event) => {
        event.preventDefault();
        axios.get(`http://localhost:8080/Images?category=${CategoryName.current}&title=${searchValue.trim()}`)
        .then(response => {
            //console.log(response);
            const imagesArr = [];
            for(let imageInfo in response.data){
                imagesArr.push({...response.data[imageInfo]});
            }
            setImages(imagesArr);
        })            
        .catch(err => {
            console.log(err);
        })
    }
    
    return (
        <div className="Gallery">
            <div className="breadcrumb">
                <h3><a href="/">Gallery </a> > {CategoryName.current}</h3>
            </div>
            <div className="search">
                <form onSubmit={onSubmitHandler}>
                    <div>
                        <button className='clearButton'>Clear</button>
                        <button className='applyButton' type="submit">Apply</button>
                    </div>
                    <input 
                    type="text" 
                    placeholder="Search" 
                    value={searchValue} 
                    onChange={event => {setSearchValue(event.target.value)}}></input>
                </form>
            </div>
            <div className='Images'>
                {ImagesState.map(Img => (
                    <Image 
                    image={Img.imageURL} 
                    title={Img.title} 
                    id={Img.id}
                    category={Img.category}
                    desc={Img.description}
                    key={Img.id} 
                    service={Img.service}
                    ></Image>
                ))}
            </div>
{/*             <div className="pagination">
                <button onClick={()=> turnPageOverHandler('previous')} disabled={pageNumber === 1}>Previous</button>
                {paginationContent.map(onePage => (
                    <button onClick={()=> turnPageOverHandler(onePage)} key={onePage} 
                    className={pageNumber === onePage? "active":null}>{onePage}</button>
                ))}
                <button onClick={()=> turnPageOverHandler('next')} disabled={pageNumber === Math.max(...paginationContent)}>Next</button>
            </div> */}
        </div>
    )
}
