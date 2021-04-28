import React from 'react'
//import {withRouter} from 'react-router-dom';
import { MDBIcon } from "mdbreact"; 

import './Card.css';
const card = (props) => {
    
    return(
        
        <div className="wrapper">
            <div className="product-img view zoom">
            <img src={(props.source)} alt="resort" ></img>
            </div>
            <div className="product-info">
                <div className="product-text">
                    <h1>{props.tourName}</h1>
                    <h2>{props.lightName}</h2>
                    <p>{props.text}</p>
                </div>
                <div className="product-price-btn">
                    <p><span>{props.price}</span></p>
                    {/* <p className="details">Details</p> */}
                    <div className="details">Details   <MDBIcon icon="angle-double-right"/> </div>
                    {/* <button type="button">Details</button> */}
                </div>
            </div>
        </div>
                
        );
};

export default card;
// export default withRouter(post);