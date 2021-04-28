import React, { Component } from "react";
import { MDBCard, MDBListGroup, MDBListGroupItem, MDBContainer, MDBIcon } from "mdbreact";
// import SidePanel from './SidePanel';
import RatingCards from './RatingCard/RatingCards';
import HelpCard from './HelpCard';

class SidePanels extends Component {
    state = {
        sidePanels : [],
        error: false,
        show: true,
    }

    componentWillMount(){
        
        this.setState({sidePanels :this.props.sidepanel, show:this.props.show})
    }
    

     render () {
             
        let sidePanels = <p >something went wrong!</p>
        if(!this.state.error){
            sidePanels = this.state.sidePanels.map(sidePanel => { 
                return (

                            <MDBListGroupItem key={sidePanel.id} className="example hoverable ">
                                 <i className={sidePanel.icon} ></i> 
                                     {sidePanel.name} 
                                 <MDBIcon icon={sidePanel.icon1+" blue-text"} className="float-right"/> 
                            </MDBListGroupItem>
                            )
                            // "chevron-right" 
            });
        }

        let ratingCard = null;
        if(this.state.show){
            ratingCard = (<RatingCards districtNames={this.props.districtName}
                titleName={this.props.titleName}/>)
        }

         return(
            
            <MDBContainer style={{ margin: " 50px auto"}}>

            <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
            
                <MDBListGroup>
                    
                    {sidePanels}
            
                </MDBListGroup> 
            
            </MDBCard>

            {ratingCard}

            
            <HelpCard/> 

            </MDBContainer>
            
         );
     }
}


export default SidePanels;