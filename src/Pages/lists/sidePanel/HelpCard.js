import React from 'react';
import { MDBCard,  MDBIcon } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css"; 

const helpCard = () => {


return (

  <MDBCard style={{ width: "22rem", marginTop: "1rem" }} className="flex-center">
      <MDBIcon icon="hands-helping fa-3x" />
      <h5 className="h5-responsive  text-center ">
           Need Help?
         </h5>
         <h5 className="h5-responsive font-weight-bold  text-center ">
           +45 423 445 99
         </h5><br/>

         <h5 className="  text-center small ">
           Monday To Friday 9:00am-7:30pm
         </h5>

  </MDBCard>




);
};

export default helpCard;