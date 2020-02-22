import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import Logo from "../../assets/images/forthewedding-9ba500f0c747d8a3a8797fe57cc23bdbe79d6936b3454ed882e228246a159f4b.png"
import "./Categories.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Categories(props) {
    const [searchValue,setSearchValue] = useState('');
    const [showCategories,setShowCategories]=useState(false);

    const onchangeHandler=(event) => {
        setSearchValue(event.target.value);
    }
    
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
        setShowCategories(prevState=>{
            return !prevState
        })
        console.log(showCategories);
    } 
    let classes=['categories-list'];
    if(showCategories){
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
                    <Link to={`/categories/${catList.id}`} className="catList" key={catList.id}>
                        <div>
                            <img src ={catList.image} alt={catList.categoryName} ></img>
                        </div>
                        <p>{catList.categoryName}</p>
                    </Link>
                ))}
            </div>
{/*             <Link to="/categories/1">Gallery</Link>
            <Link to="/categories/2">Gallery</Link> */}
        </div>
    )
}
