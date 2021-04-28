import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol } from "mdbreact";

const aboutusComp = (props) => {
  return (
    <MDBContainer className="mt-5 ">

        

      <MDBRow>

        <MDBCol>
          <MDBJumbotron className="text-center" >
             <img
                    src={props.imgourceleft}
                    alt=""
                    className="rounded-circle  w-25  align-baseline "
                  />
            <h2 className=" display-5 text-center my-2"> 
            
            <i className={props.iconsleft} > </i>     
             {props.headingleft}</h2><br/>
            <p className= "text-center">
            {props.bodyleft}
            </p>
            <i className={props.star}></i>
            <i className={props.star}></i>
            <i className={props.star}></i>
            <i className={props.star}></i>
            <i className={props.star1}></i>
          </MDBJumbotron>

        </MDBCol>

        <MDBCol>
          <MDBJumbotron className="text-center">

            <img
                    src={props.imgourceright}
                    alt=""
                    className="rounded-circle  w-25  align-baseline "
                  />

            <h2 className=" display-5 text-center my-2"> <i className={props.iconsright} ></i> {props.headingright}</h2><br/>
            <p className= "text-center">
            {props.bodyright}
            </p>
            <i className={props.star}></i>
            <i className={props.star}></i>
            <i className={props.star}></i>
            <i className={props.star}></i>
            <i className={props.star1}></i>

          </MDBJumbotron>
        </MDBCol>

      </MDBRow>

      <hr className="my-2"/>
    </MDBContainer>
  )
}

export default aboutusComp;