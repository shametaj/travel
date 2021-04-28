import React from 'react'
//import {withRouter} from 'react-router-dom';

const RatingCard = (props) => {
    let selectClass = ["fas fa-star blue-text","far fa-star blue-text"]
    let starArray = [];
    switch(props.starNo) {
        case 1:
            starArray=[selectClass[0],selectClass[0],selectClass[0],selectClass[0],selectClass[0]]
            break;
        case 2:
            starArray=[selectClass[0],selectClass[0],selectClass[0],selectClass[0],selectClass[1]]
            break;
        case 3:
            starArray=[selectClass[0],selectClass[0],selectClass[0],selectClass[1],selectClass[1]]
            break;
        case 4: 
            starArray=[selectClass[0],selectClass[0],selectClass[1],selectClass[1],selectClass[1]]
            break;
        case 5:
            starArray=[selectClass[0],selectClass[1],selectClass[1],selectClass[1],selectClass[1]]
            break;
        default:
          // code block
    }
    
    

    return(
        <div className="custom-control custom-checkbox mx-2 my-1">
            <input type="checkbox" className="custom-control-input" id={"chkbox"+props.keyss} />
            <label className="custom-control-label" htmlFor={"chkbox"+props.keyss}>
                <i className={starArray[0]}> </i>
                <i className={starArray[1]}> </i>
                <i className={starArray[2]}> </i>
                <i className={starArray[3]}> </i>
                <i className={starArray[4]}> </i>
             </label>
        </div>
    );
}

export default RatingCard;
