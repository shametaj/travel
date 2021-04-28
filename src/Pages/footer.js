import React , { Component} from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter , MDBIcon } from "mdbreact";


class footer extends Component {


  render(){
    return(

      <div >

    <MDBFooter color="grey darken-2" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <br/>
        <MDBRow >

          <MDBCol >
            <h4 className="title "> <strong>Need Help ? </strong></h4> <br/>
            <MDBIcon icon="phone-volume fa-2x " /> <strong> +45 423 445 99 </strong> <br/><br/>
            <MDBIcon far icon="envelope fa-2x" /> <strong>  help@spaceBlink.com </strong>
          </MDBCol>

          <MDBCol >
            <h5 className="title"> <strong> ABOUT</strong></h5>
            
              <li className="list-unstyled">
                <a href="/AboutUs"> <strong>About us </strong></a>
              </li>
              <li className="list-unstyled">
                <a href="/faqs"> <strong> FAQ </strong></a>
              </li>

            
          </MDBCol>

          <MDBCol >
            <h5 className="title"><strong>Discover</strong></h5>
            
              <li className="list-unstyled">
                <a href="/allTours"> <strong> Tour List </strong></a>
              </li>
              <li className="list-unstyled">
                <a href="allHotels"> <strong> Hotels List </strong></a>
              </li>
              <li className="list-unstyled">
                <a href="/allTransfers"><strong> Transfer list </strong></a>
              </li>
              <li className="list-unstyled">
                <a href="/allResturant"><strong> All Resturants </strong></a>
              </li>
            
          </MDBCol>

        </MDBRow>
      </MDBContainer>
    </MDBFooter>
    

<footer className="page-footer font-small grey darken-2  pt-1">


<div className="container">

<div className="row">


  <div className="col-md-12 py-5">
    <div className="mb-5 flex-center">

      
      <a href="/"  className="fb-ic">
        <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3"> </i>
        
      </a>
    
      <a href="/" className="tw-ic">
        <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 "> </i>
      </a>
      
      <a href="/"  className="gplus-ic">
        <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 "> </i>
      </a>
      
     
      <a href="/" className="ins-ic">
        <i clclassNameass="fab fa-instagram fa-lg white-text mr-md-5 mr-3 "> </i>
      </a>
      
      <a href="/" className="pin-ic">
        <i className="fab fa-pinterest fa-lg white-text "> </i>
      </a>
      
      

    </div>
  </div>
</div>
</div>
  <div className="footer-copyright text-center py-2">© 2020 Copyright: All rights reserved
  </div>
 

</footer>
</div>


    )
  }
}

export default footer;