import React from 'react';
import SidePanels from '../sidePanel/SidePanels';
import Faq from './Faq';
import classes from './FaqPage.module.css';
import { MDBContainer,MDBRow, MDBCol} from "mdbreact";

const FaqPage = () => {
    
        let sidePanels = [

            {'id':1,'name':' Payments', 'icon':"fas fa-quote-left" , 'icon1':'check'},
            {'id':2,'name':' Suggestion and tips' , 'icon':'fas fa-quote-left','icon1':'check'},
            {'id':3,'name':' Travel recommendations' , 'icon':'fas fa-quote-left','icon1':'check'},
            {'id':4,'name':' Terms and condition' , 'icon':'fas fa-quote-left','icon1':'check'},
            {'id':5,'name':' Booking and vouchers', 'icon':'fas fa-quote-left','icon1':'check'},
            {'id':6,'name':' Transfers', 'icon':'fas fa-quote-left','icon1':'check'},
                
                ]
        
        let districtNames = [
            {'name':'Paris Center'},
            {'name':'La Defance'},
            {'name':'Latin Quarter'}
        ];

        let TitleName = 'District/Area';
        
       

        
    return(

        <MDBContainer fluid >
            <MDBRow>       
                <MDBCol md="4">

                    <div className={classes.sidePanel}>
                        <SidePanels 
                            sidepanel={sidePanels} 
                            districtName={districtNames}
                            titleName={TitleName}
                            show={false}
                            />            
                    </div>
                </MDBCol>
                <MDBCol md="8">
                
                <div style={{marginTop:"40px"}}>
                   <Faq/>
                </div>
                </MDBCol>
            
            </MDBRow>
        </MDBContainer>
    )
}

export default FaqPage;