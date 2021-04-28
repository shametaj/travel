import React from 'react';
import SidePanels from '../sidePanel/SidePanels';
import TourCard from '../Card/Cards';
import classes from './TourPage.module.css';
import { MDBContainer,MDBRow, MDBCol} from "mdbreact";
import IMAGES from './images';


const TourPage = () => {
        
    
        let sidePanels = [

            {'id':1,'name':' All Tours', 'icon':'fa fa-compass','icon1':'chevron-right'},
            {'id':2,'name':' City Sightseeing' , 'icon':'fa fa-city','icon1':'chevron-right'},
            {'id':3,'name':' Museum Tours' , 'icon':'fa fa-tree','icon1':'chevron-right'},
            {'id':4,'name':' Historic Buildings' , 'icon':'fa fa-landmark','icon1':'chevron-right'},
            {'id':5,'name':' Walking tours', 'icon':'fa fa-hiking','icon1':'chevron-right'},
            {'id':6,'name':' Eat And Drink', 'icon':'fa fa-utensils','icon1':'chevron-right'},
            {'id':7,'name':' Churches', 'icon':'fa fa-church','icon1':'chevron-right'},
            {'id':8,'name':' Skyline Tour', 'icon':'fab fa-skyatlas','icon1':'chevron-right'}
                
                ]
        
        let districtNames = [
            {'name':'Paris Center'},
            {'name':'La Defance'},
            {'name':'Latin Quarter'}
        ];

        let TitleName = 'District/Area';
        
       

        let cardData = [
            {'id':1,
            'productName': 'ARCH TRIOMPHE' ,'price':'$39',
            'text': 'Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum ex, qui adipisci maiestatis inciderint no, eos in elit dicat.....',
            'imagesrc':IMAGES[0]
            },
      
            {'id':2,
            'productName': 'NOTREDAME' ,'price':'$42',
            'text': 'Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum ex, qui adipisci maiestatis inciderint no, eos in elit dicat.....',
            'imagesrc':IMAGES[1]
            },
            
            {'id':3,
            'productName': 'VERSAILLES' ,'price':'$39',
            'text': 'Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum ex, qui adipisci maiestatis inciderint no, eos in elit dicat.....',
            'imagesrc':IMAGES[2]
            },
            {'id':4,
            'productName': 'POMPIDUE' ,'price':'$69',
            'text': 'Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum ex, qui adipisci maiestatis inciderint no, eos in elit dicat.....',
            'imagesrc':IMAGES[3]
                },
            {'id':5,
            'productName': 'TOUR EIFFEL' ,'price':'$49',
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
            <TourCard CardData={cardData} lightName='TOUR'/>
            </div>
            </MDBCol>

        </MDBRow>
        </MDBContainer>

    )
}

export default TourPage;