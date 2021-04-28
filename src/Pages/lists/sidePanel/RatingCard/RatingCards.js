import React, {Component} from 'react';
import { MDBCard} from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css"; 
import RatingCard from './RatingCard';

class RatingCards extends Component{

    state={
      star:[
        {'id':'1','starNo':5},
        {'id':'2','starNo':4},
        {'id':'3','starNo':3},
        {'id':'4','starNo':2},
        {'id':'5','starNo':1},
        ],
      distNames: [],
      TitleName: ''
      
    }

    componentWillMount(){
      this.setState({distNames:this.props.districtNames})
    }

  render(){

    let ratingCard = <p >something went wrong!</p>
        if(!this.state.error){
            ratingCard = this.state.star.map(card => {
                return (
                        //  <Link to={'/' + post.id} key={post.id} >
                            
                            
                            <RatingCard                               
                            key={card.id}
                            keyss={card.id}
                            starNo = {card.starNo}
                            />
                        // </Link>
                            )
            });
        }

        let distCard = <p >something went wrong!</p>
        if(!this.state.error){
            distCard = this.state.distNames.map(dNames => {
                return (
                        //  <Link to={'/' + post.id} key={post.id} >
                            
                        
                            <div key={dNames.name} className="custom-control custom-checkbox mx-2 my-1">
                            <input type="checkbox" className="custom-control-input" id={dNames.name} />
                            <label className="custom-control-label" htmlFor={dNames.name}>
                                      {dNames.name}
                              </label> 
                          </div>
                        // </Link>
                            )
            });
        }

      

    return(
  
      <MDBCard style={{ width: "22rem", marginTop: "1rem" }} >
    
      <h6 className="h6-responsive mx-3 my-3">
               Rating
      </h6><br/>
      {ratingCard}
      
      <hr/>
    
     <h6 className="h6-responsive mx-3 my-1 ">
                {this.props.titleName}
       </h6><br/>
      {distCard}
       


      </MDBCard>
    
    );
  }
}


export default RatingCards;
