import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Router from './Routers/routers'
import Header from '../src/Pages/header'
import Footer from '../src/Pages/footer'
import Carousel from '../src/Pages/home/carousel'

const App = ()=> (

  <BrowserRouter >
    
    <Header/>
   <Carousel/>
    <Router/>

    <Footer/>
  </BrowserRouter>
)

export default App;
