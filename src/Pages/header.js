import React , { Component} from 'react'
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,MDBIcon, } from "mdbreact";

import { BrowserRouter as Router } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";



class header extends Component {

  state ={
    isOpen:false
    
  }

   gallarey=()=> {
    ("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
    }

  toggleCollapse = ()=>{
    this.setState({isOpen: !this.state.isOpen})
  }

  render(){
    return(

      <div>

        {/* Nav Bar */}

      <Router>

      <MDBNavbar color="white"  transparent light expand="md"  scrolling fixed="top" >

        <MDBNavbarBrand href="/" >
        <MDBIcon fab icon="free-code-camp fa-3x" /> 
         <h6 className="font-weight-bold">SpaceBlink</h6>
        
              
        </MDBNavbarBrand>

        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>


          <MDBNavbarNav left className=" my-2 ">


          <MDBDropdown>
                <MDBDropdownToggle nav caret>

                  <strong className=" font-weight-bold  h6-responsive"> Home 
                  </strong>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="/">Owl Carousel Slider</MDBDropdownItem>
                  <MDBDropdownItem href="/">Home Items with Carousel</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>

                <MDBDropdown>
                <MDBDropdownToggle color="" nav caret>

                  <strong  className=" font-weight-bold h6-responsive"> Tours
                  </strong>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem  href="/allTours">All Tour List</MDBDropdownItem>
                  <MDBDropdownItem href="/allTours">All Tour Grid</MDBDropdownItem>
                  <MDBDropdownItem href="/allTours">All Tour Sort Masonry</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>

              <MDBDropdown>
                <MDBDropdownToggle nav caret>

                  <strong className=" font-weight-bold  h6-responsive">Hotels
                  </strong>

                </MDBDropdownToggle>
                <MDBDropdownMenu>
                <MDBDropdownItem  href="/allHotels">All Hotels</MDBDropdownItem>
                  <MDBDropdownItem  href="/allHotels">Visa Guides</MDBDropdownItem>
                  <MDBDropdownItem  href="/allHotels">Travel Guides</MDBDropdownItem>
                  <MDBDropdownItem  href="/allHotels">Food</MDBDropdownItem>
                  <MDBDropdownItem   href="/allHotels">Hotel Reviews</MDBDropdownItem>
                  <MDBDropdownItem  href="#!">Start a Travel Blog</MDBDropdownItem>
                  <MDBDropdownItem  href="/allHotels">Sustainable Travel</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>

              <MDBDropdown>
                <MDBDropdownToggle nav caret>

                  <strong className=" font-weight-bold h6-responsive"> Resturants
                  </strong>
                </MDBDropdownToggle>
                <MDBDropdownMenu transparent> 
                  <MDBDropdownItem href="/allResturant"  >All Resturants List</MDBDropdownItem>
                  <MDBDropdownItem href="/allResturant">All Resturants Grid</MDBDropdownItem>
                  <MDBDropdownItem href="/allResturant!">All Resturants Sort Masonry</MDBDropdownItem>

                </MDBDropdownMenu>
              </MDBDropdown>

              <MDBDropdown>
                <MDBDropdownToggle nav caret>

                  <strong className=" font-weight-bold h6-responsive"> Transfer
                  </strong>
                </MDBDropdownToggle>
                <MDBDropdownMenu transparent> 
                  <MDBDropdownItem href="/allTransfers"  >All Transfer List</MDBDropdownItem>
                  <MDBDropdownItem href="/allTransfers">All Transfer Grid</MDBDropdownItem>
                  <MDBDropdownItem href="/allTransfers">All Transfer Sort Masonry</MDBDropdownItem>

                </MDBDropdownMenu>
              </MDBDropdown>

            <MDBDropdown>
              
                <MDBDropdownToggle nav caret>
                  <strong className=" font-weight-bold  h6-responsive"> Pages
                  </strong>
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                  <MDBDropdownItem href="/faqs">FAQs</MDBDropdownItem>
                  <MDBDropdownItem href="/AboutUs">About Us</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>

              

          </MDBNavbarNav>

          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>

                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>



                     
</div>


    )
  }
}

export default header;