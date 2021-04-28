import React from 'react'
import {Route , Switch} from 'react-router-dom'
import home from '../Pages/home/home'
import AboutUs from '../Pages/aboutUs/aboutUspage'
import TourPage from '../Pages/lists/TourPage/TourPage'
import ResturantPage from '../Pages/lists/RestaurantPage/RestaurantPage'
import HotelsPage from '../Pages/lists/HotelsPage/HotelsPage'
import TransferPage from '../Pages/lists/TransferPage/TransferPage'
import Faqs from '../Pages/FAQs/FaqPage'

const Router = ()=>(
  <Switch>
    <Route exact path="/" component ={home} ></Route>
    <Route exact path = "/AboutUs" component={AboutUs}></Route>
    <Route exact path = "/allTours" component={TourPage}></Route>
    <Route exact path = "/allResturant" component={ResturantPage}></Route>
    <Route exact path = "/allHotels" component={HotelsPage}></Route>
    <Route exact path = "/allTransfers" component={TransferPage}></Route>
    <Route exact path = "/faqs" component={Faqs}></Route>


  </Switch>
)

export default Router;