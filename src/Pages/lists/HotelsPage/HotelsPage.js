import React from 'react';
import SidePanels from '../sidePanel/SidePanels';
import HotelsCard from '../Card/Cards';
import classes from './HotelsPage.module.css';
import { MDBContainer,MDBRow, MDBCol} from "mdbreact";
import IMAGES from './images';

const AllHotels = () => {
    
    
        let sidePanels = [

            {'id':0,'name':' FACILITIES'},
            {'id':1,'name':' Pet allowed', 'icon':'fas fa-paw','icon1':'check'},
            {'id':2,'name':' Wifi' , 'icon':'fas fa-wifi','icon1':'check'},
            {'id':3,'name':' Spa' , 'icon':'fas fa-spa','icon1':'check'},
            {'id':4,'name':' Restaurant' , 'icon':'fas fa-concierge-bell','icon1':'check '},
            {'id':5,'name':' Pool', 'icon':'fa fa-swimming-pool','icon1':'check '},
            {'id':6,'name':' Parking', 'icon':'fas fa-parking','icon1':'check' },
            {'id':7,'name':' Fitness center', 'icon':'fas fa-dumbbell','icon1':'check '},
            
                
                ]

        let districtNames = [
            {'name':'Paris Center'},
            {'name':'La Defance'},
            {'name':'Latin Quarter'}
        ];

        let TitleName = 'District/Area';
        
       

        let cardData = [
            {'id':1,
            'productName': 'PARK HYATT HOTEL' ,'price':'$139',
            'text': 'Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum...',
            'imagesrc':IMAGES[0]
            },
      
            {'id':2,
            'productName': 'MARIOTT HOTEL' ,'price':'$142',
            'text': 'Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum...',
            'imagesrc':IMAGES[1]
            },
            
            {'id':3,
            'productName': 'LUMIERE HOTEL' ,'price':'$319',
            'text': 'Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum...',
            'imagesrc':IMAGES[2]
            },
            {'id':4,
            'productName': 'CONCORDE HOTEL' ,'price':'$169',
            'text': 'Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum...',
            'imagesrc':IMAGES[3]
                },
            {'id':5,
            'productName': 'CONCORDE HOTEL' ,'price':'$149',
            'text': 'Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum...',
            'imagesrc':IMAGES[4]
            },
            
        ];

    return(

        <MDBContainer fluid >
        <MDBRow>       
            <MDBCol md="4">
                <div className={classes.sidePanel}>
                    <SidePanels 
                        sidepanel={sidePanels} 
                        districtName={districtNames}
                        titleName={TitleName}
                        show={true}/>            
                </div>
            </MDBCol>
            <MDBCol md="8">
            {/* <div style={{backgroundColor:"red", height:'90vh', flexGrow:"10"}}/> */}
            <div className={classes.resCard}>
            <HotelsCard CardData={cardData} lightName='TOUR'/>
            </div>
            </MDBCol>

        </MDBRow>
        </MDBContainer>
    )
}

export default AllHotels;