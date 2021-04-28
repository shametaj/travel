import React from 'react';
import CardSection from './cardSection'
import HotelsTours from './Hotel&TourList'
import BlogNews from './blogs'

const home =()=>{
  return(
    <div>
      {/* <Carousel/> */}
      <br/> <br/> <br/> 
      <CardSection/>
      <br/>
      <HotelsTours/>
      <br/>
      <BlogNews/>
    </div>
  )
  
}

export default home;