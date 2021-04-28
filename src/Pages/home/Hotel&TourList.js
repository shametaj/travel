import React from "react";
import {MDBContainer ,MDBRow , MDBCol } from "mdbreact";

import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css"; 

const HotelsTours = () => {
  return ( 

        <div>

           {/* for tours in paris */}

          <MDBContainer>
          <section className="team-section text-center my-5">

         <h2 className="h2-responsive font-weight-bold my-2 text-center ">
           BERLIN TOP TOURS
         </h2>
         <p >Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.</p>
         
         <br/>

          <MDBRow className="text-center">

    <MDBCol>

  <div className="card collection-card">
     <div className="view zoom">
       <img className="img-fluid" src={require('../img/historic.jpg')} alt="Responsive"/>
      </div>
   </div>



    </MDBCol>


    <MDBCol>
    <div className="card collection-card">
     <div className="view zoom">
       <img className="img-fluid" src={require('../img/churches.jpg')} alt="Responsive"/>
      </div>
   </div>
    </MDBCol>

    <MDBCol>
    <div className="card collection-card">
     <div className="view zoom">
       <img className="img-fluid" src={require('../img/historic1.jpg')} alt="Responsive"/>
      </div>
   </div>
    </MDBCol>
    </MDBRow>
    <br/>

    <a href="/allTours">
    <button className="btn btn-flat align-content-center"><strong>View all </strong><i class="fas fas fa-angle-right pl-1"></i></button></a>
     </section>

     <hr/>
     </MDBContainer>


    {/* for hotels in paris */}

  <MDBContainer>
          <section className="team-section text-center my-5">

         <h2 className="h2-responsive font-weight-bold my-2 text-center ">
           BERLIN TOP HOTELS
         </h2>
         <p >Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat</p>
         
         <br/>

          <MDBRow className="text-center">

    <MDBCol>

  <div className="card collection-card">
     <div className="view zoom">
       <img className="img-fluid" src={require('../img/hotel1.jpg')} alt="Responsive"/>
      </div>
   </div>



    </MDBCol>


    <MDBCol>
    <div className="card collection-card">
     <div className="view zoom">
       <img className="img-fluid" src={require('../img/hotel2.jpg')} alt="Responsive"/>
      </div>
   </div>
    </MDBCol>

    <MDBCol>

    <div className="card collection-card">
     <div className="view zoom">
       <img className="img-fluid" src={require('../img/hotel3.jpg')} alt="Responsive"/>
      </div>
   </div>
    </MDBCol>

    </MDBRow>
    <br/>
    <a href="/allHotels" >
    <button className="btn btn-flat "><strong>View all </strong><i class="fas fas fa-angle-right pl-1"></i></button>
    </a>
     </section>

     <hr/>
     </MDBContainer>

     {/* For bottom image section  + info */}


     <MDBContainer fluid>
          <section className="team-section text-center my-6 mx-3 ">

         <h2 className="h2-responsive font-weight-bold my-2 text-center ">
           PLAN YOUR TOURS EASLY
         </h2>
         <p >Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.</p><br/>

         <MDBRow className="text-center">
         <MDBCol>

         <i class="fas fa-suitcase fa-3x"></i><br/><br/>
         <h5  className="h5-responsive  text-center mx-4 "> Itineraries studied in detail </h5>
         <p  > Suscipit invenire petentium per in. Ne magna assueverit vel. Vix movet perfecto facilisis in, ius ad maiorum corrumpit, his esse docendi in.</p>
         </MDBCol>


         <MDBCol>
         <i class="fas fa-campground fa-3x"></i><br/><br/>
         <h5 className="h5-responsive text-center mx-4"> Room and food included </h5>
         <p  alt="Responsive"> Cum accusam voluptatibus at, et eum fuisset sententiae. Postulant tractatos ius an, in vis fabulas percipitur, est audiam phaedrum electram ex</p>

         </MDBCol>

         <MDBCol>
         <i class="fas fa-couch fa-3x"></i><br/><br/>
         <h5 className="h5-responsive  text-center  mx-4"> Everything organized </h5>
         <p alt="Responsive"> Integre vivendo percipitur eam in, graece suavitate cu vel. Per inani persius accumsan no. An case duis option est, pro ad fastidii contentiones.</p>
         </MDBCol>

         </MDBRow>
         <br/>
         <hr/>
         <br/>

         <h2 className="h2-responsive font-weight-bold my-2 text-center ">
           LATEST BLOG NEWS
         </h2>
         <p >Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.</p><br/>
     </section>
     </MDBContainer>

     

    </div>
     
                
  );
}

export default HotelsTours;