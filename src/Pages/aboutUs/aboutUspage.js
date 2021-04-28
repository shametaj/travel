import React , {Component} from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import AboutusComp from './AboutUsComponent'


class AboutUs extends Component
{
  state = {
    boxes  : [
      {
        id:1,
        iconsleft: "fas fa-user ",
        headingleft:" 1000+ Customers",
        bodyleft : "Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.",

        iconsright : "fas fa-city",
        headingright:" +120 Premium city tours",
        bodyright : "Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.",
        
      },
      {
        id:2,
        iconsleft: "fas fa-headset ",
        iconsright : "fas fa-american-sign-language-interpreting",
        headingleft:" H24 Support",
        bodyleft : "Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.",
        headingright:" 10 Languages available",
        bodyright : "Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu."
      },
      {
        id:3,
        iconsleft: "fas fa-wheelchair ",
        iconsright : "fas fa-paw",
        headingleft:"Accesibility managment",
        bodyleft : "Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu.",
        headingright:" Pet allowed",
        bodyright : "Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex, appareat similique an usu."
      }
    ],

    customers :[
      {
        id:1,
        headingleft:" Jhon Doe",
        bodyleft : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        imgourceright : "https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg",
        star:"fas fa-star blue-text",
        star1:"fas fa-star blue-text",
        
        headingright:" Anna Aston",
        bodyright : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        imgourceleft : "https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
      },
      {
        id:2,
        imgourceleft : "https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg",
        headingleft:"Maria Kate",
        bodyleft : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        star:"fas fa-star blue-text",
        star1:"far fa-star blue-text",

        imgourceright : "https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg",
        headingright:" Peter Gabriel",
        bodyright : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus."
      }
    ]
  }

  render()
  {

    let Boxes = this.state.boxes.map(box =>
      {
        
        return(
          <AboutusComp
          iconsleft = {box.iconsleft}
          iconsright = {box.iconsright}
          headingleft = {box.headingleft}
          bodyleft = {box.bodyleft}
          headingright = {box.headingright}
          bodyright = {box.bodyright}
          />
        )
      })

      let Customers  = this.state.customers.map(customer=>
        {
          return(
           <AboutusComp
           headingleft = {customer.headingleft}
           bodyleft = {customer.bodyleft}
           headingright = {customer.headingright}
           bodyright = {customer.bodyright}
           imgourceleft={customer.imgourceleft}
           imgourceright={customer.imgourceright}
           star = {customer.star}
           star1 = {customer.star1}
           />
          )

        })
    return(

      <MDBContainer>
        <br/>

        <h2 className="h2-responsive font-weight-bold my-2 text-center ">
           Some Good Reasons
         </h2>
         <p className="text-center">Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.</p>
         
         <br/>

        {Boxes}

        <br/>

        <MDBRow>

          <MDBCol >

          <h4 className="h4-responsive  my-2  ">
          Pertinax elaboraret sed
         </h4> <br/>
         <p className="text-center">Ad cum movet fierent assueverit, mei stet legere ne. Mel at vide soluta, ut utamur antiopam inciderint sed. Ut iriure perpetua voluptaria has, vim postea denique in, mollis pertinax elaboraret sed in. Per no vidit timeam, quis omittam sed at.</p>

         <MDBRow>
           <MDBCol>
           <i class="fas fa-mug-hot fa-2x my-3"></i>
         <h6>Break Fast</h6>
           </MDBCol>

           <MDBCol>
           <i class="fas fa-utensils fa-2x my-3"></i>
         <h6>Dinner</h6>
           </MDBCol>

           <MDBCol>
           <i class="fas fa-images fa-2x my-3"></i>
         <h6>Photo Collection</h6>
           </MDBCol>

           <MDBCol>
           <i class="fas fa-shopping-bag fa-2x my-3"></i>
         <h6>Personal Shopper</h6>
           </MDBCol>

         </MDBRow> 

          </MDBCol>
          

          <MDBCol>

          <h4 className="h4-responsive  my-2 ">
          Mel at vide soluta
         </h4><br/>
         <p className="text-center">Ad cum movet fierent assueverit, mei stet legere ne. Mel at vide soluta, ut utamur antiopam inciderint sed. Ut iriure perpetua voluptaria has, vim postea denique in, mollis pertinax elaboraret sed in. Per no vidit timeam, quis omittam sed at.</p>

         <MDBRow>
           <MDBCol>
           <i class="fas fa-microphone fa-2x my-3"></i>
         <h6>Audio guide</h6>
           </MDBCol>

           <MDBCol>
           <i class="fas fa-parking fa-2x my-3"></i>
         <h6>Parking</h6>
           </MDBCol>

           <MDBCol>
           <i class="fas fa-dollar-sign fa-2x my-3"></i>
         <h6>Exchange</h6>
           </MDBCol>

           <MDBCol>
           <i class="fas fa-mobile-alt fa-2x my-3"></i>
         <h6>Mobile</h6>
           </MDBCol>

         </MDBRow> 
            
          </MDBCol>

        </MDBRow>

        <br/><br/><hr/> <br/>

        <h2 className="h2-responsive font-weight-bold my-2 text-center ">
           What Customers Says
         </h2>
         <p className="text-center">Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.</p>
         
         <br/>

        {Customers}

        <br/>

        <MDBRow>
          <MDBCol>
          <img
                    src={require('../img/logo.JPG')}
                    alt="Responsive"
                    className=""
                  />
          </MDBCol>
          <MDBCol>
            

          <h4 className="h4-responsive  my-2  ">
           Get Started With SpaceBlink
         </h4><br/>
         <p >Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset.</p>

         <i class="far fa-bell ">  Select your preferred tours</i><br/><br/>
         <i class="far fa-bell ">  Purchase tickets and options</i><br/><br/>
         <i class="far fa-bell ">  Pick them directly from your office</i> <br/><br/><br/>

         <button className="btn btn-flat "><strong>Start Now </strong><i class="fas fas fa-angle-right pl-1"></i></button>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}

export default AboutUs;