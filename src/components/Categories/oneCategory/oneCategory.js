import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import Image from '../../Gallary/Image/Image';
import axios from 'axios';
import './oneCategory.css';
import * as oneCategoryActionTypes from "../../../store/actions/oneCategory";
import { useDispatch, useSelector } from 'react-redux';



export default function OneCategory(props) {
    const CategoryName=useSelector(state => {return state.oneCategory.categoryName});
    const ImagesState=useSelector(state => {return state.oneCategory.Images});
    const dispatch =useDispatch();
    const searchValue = useSelector(state => {return state.oneCategory.searchValue});

    useEffect(() => {
        dispatch({type:oneCategoryActionTypes.CAT_ID,categoryId:props.match.params.id});
        dispatch({type:oneCategoryActionTypes.REQUEST_CATEGORY_IMAGES});
    },[props.match.params.id,dispatch])//get Category Name

    const onSubmitHandler =(event) => {
        event.preventDefault();
        dispatch({type:oneCategoryActionTypes.SEARCH_CATEGORY_IMAGES});
    }
    
    return (
        <div className="Gallery">
            <div className="breadcrumb">
                <h3><a href="/">Gallery </a> > {CategoryName}</h3>
            </div>
            <div className="search">
                <form onSubmit={onSubmitHandler}>
                    <div>
                        <button className='clearButton' type="button">Clear</button>
                        <button className='applyButton' type="submit">Apply</button>
                    </div>
                    <input 
                    type="text" 
                    placeholder="Search Images in this categories" 
                    value={searchValue} 
                    onChange={event => {dispatch({type:oneCategoryActionTypes.TWO_WAY_BINDING,searchValue:event.target.value})}}></input>
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
        </div>
    )
}
