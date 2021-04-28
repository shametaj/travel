import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCarouselCaption,
  MDBView
} from "mdbreact";

class cardSection extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="mb-3">

          <MDBView waves >
          <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg" className="img-fluid z-depth-1" alt="Responsive"  /> 
          </MDBView > 
          
          <MDBCarouselCaption>
            <h2 className="h2-responsive font-bold" > <strong>SPECIAL OFFERS </strong></h2>
            <p><strong>1100 Locations</strong></p>
          </MDBCarouselCaption>
          
          </MDBCol>
        </MDBRow>

        <MDBRow>

          
          <MDBCol lg="4" md="12" className="mb-3">
          <MDBView waves zoom>

          <img src="https://mdbootstrap.com/img/Others/documentation/img(115)-mini.jpg" className="img-fluid z-depth-1" alt="" />

          <MDBCarouselCaption>
            <h2 className="h2-responsive font-bold" > <strong>TOURS </strong></h2>
            <p><strong>800 Locations</strong></p>
          </MDBCarouselCaption>

          </MDBView>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-3">

            <MDBView waves zoom>
          <img src="https://mdbootstrap.com/img/Others/documentation/img(116)-mini.jpg" className="img-fluid z-depth-1" alt="" />

          <MDBCarouselCaption>
            <h2 className="h2-responsive font-bold" > <strong>HOTELS </strong></h2>
            <p><strong>500 Locations</strong></p>
          </MDBCarouselCaption>

          </MDBView>

          </MDBCol>

          <MDBCol lg="4" md="6" className="mb-3">
            
            <MDBView waves zoom>
           <img src="https://mdbootstrap.com/img/Others/documentation/img(117)-mini.jpg" className="img-fluid z-depth-1 img-fluid z-depth-1"  alt="Responsive" />

          <MDBCarouselCaption>
            <h2 className="h2-responsive font-bold" > <strong >RESTURANTS </strong></h2>
            <p><strong >100 Locations</strong></p>
          </MDBCarouselCaption>

          </MDBView>

          </MDBCol>
          
      </MDBRow>

    </MDBContainer>
    );
  }
}

export default cardSection;