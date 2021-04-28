import React from 'react';
import SidePanels from '../sidePanel/SidePanels';
import TransferCard from '../Card/Cards';
import classes from './TransferPage.module.css';
import IMAGES from './images';
import { MDBContainer,MDBRow, MDBCol} from "mdbreact";

const TransferPage = () => {
    
        let sidePanels = [

            // {'id':1,'name':' All restaurants', 'icon':'fa fa-utensils','icon1':'chevron-right'},
            // {'id':2,'name':' Pizza / italian' , 'icon':'fas fa-pizza-slice','icon1':'chevron-right'},
            // {'id':3,'name':' Fast Food' , 'icon':'fas fa-hamburger','icon1':'chevron-right'},
            // {'id':4,'name':' Japanese' , 'icon':'fa fa-landmark','icon1':'chevron-right'},
            // {'id':5,'name':' Chinese', 'icon':'fa fa-hiking','icon1':'chevron-right'},
            // {'id':6,'name':' International', 'icon':'fas fa-utensils','icon1':'chevron-right'},
            // {'id':7,'name':' Coffee Bar', 'icon':'fas fa-coffee','icon1':'chevron-right'},
            // {'id':8,'name':' Fish', 'icon':'fas fa-fish','icon1':'chevron-right'}
                
                ]
        
        let districtNames = [
            {'name':'Pet Allowed'},
            {'name':'Groups allowed'},
            {'name':'Tour guides'},
            {'name':'Access for disabled'}
        ];

        let TitleName = 'Facility';
        
       

        let cardData = [
            {'id':1,
            'productName': 'ORLY AIRPORT' ,'price':'$39',
            'text': 'Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum ex, qui adipisci maiestatis inciderint no, eos in elit dicat.....',
            'imagesrc':IMAGES[0]
            },
      
            {'id':2,
            'productName': ' AIRPORT PRIVATE ' ,'price':'$42',
            'text': 'Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum ex, qui adipisci maiestatis inciderint no, eos in elit dicat.....',
            'imagesrc':IMAGES[1]
            },
            
            {'id':3,
            'productName': 'AIRPORT GROUP' ,'price':'$39',
            'text': 'Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum ex, qui adipisci maiestatis inciderint no, eos in elit dicat.....',
            'imagesrc':IMAGES[2]
            },
            {'id':4,
            'productName': 'DISNEYLAND ' ,'price':'$69',
            'text': 'Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum ex, qui adipisci maiestatis inciderint no, eos in elit dicat.....',
            'imagesrc':IMAGES[3]
                },
            {'id':5,
            'productName': 'BEACH' ,'price':'$49',
            'text': 'Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum ex, qui adipisci maiestatis inciderint no, eos in elit dicat.....',
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
            <TransferCard CardData={cardData} lightName='TOUR'/>
            </div>
            </MDBCol>

        </MDBRow>
        </MDBContainer>
    )
}

export default TransferPage;