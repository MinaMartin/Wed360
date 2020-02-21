import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Radium from "radium";
const Footer = () => {

    return(
        <div className="footer">
        
            <div>
                <h1>Weds360</h1>  
                <span className="icons">
                    <FontAwesomeIcon icon={['fab', 'facebook-f']} style={{'marginLeft':'10px'}}/>
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                </span>
            </div>
            <span className="copyrights">&copy;Copyright <a href="https://plus360.xyz/" style={{'color':'#337ab7'}}>Plus360.</a>All Rights Reserved</span>
            <div className="links">   
                <ul>
                    <li><a href="/pages/terms-conditions?locale=en">Terms & conditions</a></li>
                    <li><a href="/pages/privacy-policy?locale=en">Privacy Policy</a></li>
                </ul>
            </div>
            <a href="#" className="goUp"><FontAwesomeIcon icon="chevron-up"/></a>
        </div>
    )
}

export default Radium(Footer);