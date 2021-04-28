import React, { Component } from "react";

import Card from './Card';
// import resort from './alexander.jpg';
// import {Link} from 'react-router-dom';

import './Cards.css';

class Cards extends Component {
    state = {
        cards : [],
    }

    componentWillMount(){
      this.setState({cards:this.props.CardData});
    }

     render () {
        let cards = <p >something went wrong!</p>
        if(!this.state.error){
            cards = this.state.cards.map(card => {
                return (
                        //  <Link to={'/' + post.id} key={post.id} >
                            
                            
                            <Card                               
                            key={card.id}
                            tourName = {card.productName}
                            price={card.price} 
                            text={card.text}
                            source={card.imagesrc}
                            lightName={this.props.lightName}
                            />
                        // </Link>
                            )
            });
        }
         return(
            <section className="box">
            {cards}

            <nav aria-label="Page navigation example">
                 <ul class="pagination pg-blue">
                 <li class="page-item">
                 <a class="page-link" aria-label="Previous" href="/">
                       <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                 </a>
            </li>
             <li class="page-item"><a class="page-link" href="/">1</a></li>
            <li class="page-item"><a class="page-link" href="/">2</a></li>
            <li class="page-item"><a class="page-link" href="/">3</a></li>
            <li class="page-item">
             <a class="page-link" aria-label="Next" href="/">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
            </a>
            </li>
            </ul>
            </nav>

            </section>
            
         );
     }
}


export default Cards;