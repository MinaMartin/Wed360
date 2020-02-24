import React, { useState, useRef, useEffect } from 'react';
import { Link} from 'react-router-dom'
import Logo from "../../assets/images/forthewedding-9ba500f0c747d8a3a8797fe57cc23bdbe79d6936b3454ed882e228246a159f4b.png"
import "./Categories.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import * as actionType from "../../store/actions/categories";

export default function Categories(props) {
    const [searchValue,setSearchValue] = useState('');
    //const [showCategories,setShowCategories]=useState(false);
    
    const dispatch = useDispatch();
    const showCategoriesState = useSelector(state => state.categories.toggleCategories);

    const onchangeHandler=(event) => {
        setSearchValue(event.target.value);
    }
    const ref=useRef(null);

    useEffect(() => {
        console.log(ref);
    },[])

    const categoriesList=[
        {
            id:"1",
            "categoryName":"Venues",
            image:Logo
        },
        {
            id:"2",
            "categoryName":"Designers",
            image:Logo
        },
        {
            id:"3",
            "categoryName":"outDoor Wedding",
            image:Logo
        },
        {
            id:"4",
            "categoryName":"Wedding Dresses",
            image:Logo
        },
        {
            id:"5",
            "categoryName":"Rings",
            image:Logo
        },
        {
            id:"6",
            "categoryName":"Videographers",
            image:Logo
        },
        {
            id:"7",
            "categoryName":"Photographers",
            image:Logo
        },
        {
            id:"8",
            "categoryName":"DJs",
            image:Logo
        },
        {
            id:"9",
            "categoryName":"Wedding Planners",
            image:Logo
        }
    ];

    const toggleCategoreis =() => {
        //setShowCategories(prevState=>{ return !prevState})
        dispatch({type:actionType.TOGGLE_CATEGORIES});
    } 

    let classes=['categories-list'];
    if(showCategoriesState){
        classes.push('toggleList');
    }
    classes=classes.join(' ');

    return (
        <div className="categories">
            {/* <Link to="/">Gallery</Link> */}
            <div className="search">
                <h3 onClick={toggleCategoreis}>Find Categories Here <FontAwesomeIcon icon="chevron-down"/></h3>
                <form>
                    <input 
                    type="text" 
                    placeholder="SEARCH" 
                    value={searchValue} 
                    onChange={onchangeHandler}></input>
                </form>
            </div>
            <div className={classes}>
                {categoriesList.map(catList => (
                    <Link to={`/categories/${catList.id}`} className="catList" ref={ref} key={catList.id}>
                        <div>
                            <img src ={catList.image} alt={catList.categoryName} ></img>
                        </div>
                        <p>{catList.categoryName}</p>
                    </Link>
                ))}
            </div>
            <div className="Wedding-Ideas">
                <Link to="/">
                <div className="overlay2">
                    <img alt="" src="https://weds360-production.s3.eu-west-1.amazonaws.com/store/category/4/icon/big-667cc1c0e6d022eeb13c8bb96fe45d16.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200224%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200224T132751Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=15782f7cb717e84ba3ffb6ede66b823efb640208b926f95d71268ec1d61393c6"></img>
                    <h3>Wedding Ideas</h3>
                </div>
                <div className="overlay"><div><FontAwesomeIcon icon="home"/></div><h2>Wedding Ideas</h2></div>
                    <img src="https://placehold.it/500" alt="Wedding Ideas"></img>
                </Link>
            </div>
{/*             <Link to="/categories/1">Gallery</Link>
            <Link to="/categories/2">Gallery</Link> */}
        </div>
    )
}
