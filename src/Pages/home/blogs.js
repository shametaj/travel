import React from 'react';
import { MDBMedia , MDBContainer } from 'mdbreact';

const BlogNews = () => {
  return (

    <MDBContainer >

      <MDBMedia>
        <MDBMedia left href="/" className="mr-4" >
          <img className="media-image" src="https://mdbootstrap.com/img/Others/documentation/img (1)-mini.jpg" alt="" />
        </MDBMedia>

        <MDBMedia body>
          <MDBMedia heading>
            Duis aute irure dolor in reprehenderit
        </MDBMedia>
        Ludus albucius adversarium eam eu. Sit eu reque tation aliquip. Quo no dolorum albucius lucilius, hinc eligendi ut sed. Ex nam quot ferri suscipit, mea ne legere alterum repudiandae. Ei pri quaerendum intellegebat, ut vel consequuntur voluptatibus. Et volumus sententiae adversarium duo
        
        <MDBMedia className="mt-4">
            <MDBMedia left href="/" className="pr-3">
              <img className="media-image" src="https://mdbootstrap.com/img/Others/documentation/img (107)-mini.jpg" alt="" />
            </MDBMedia>
            <MDBMedia body>
              <MDBMedia heading>
              Duis aute irure dolor in reprehenderit
            </MDBMedia>
            Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus nec, luctus a, lorem.....
          </MDBMedia>
          </MDBMedia>
        </MDBMedia>
      </MDBMedia>


      <MDBMedia>
        <MDBMedia left href="/" className="mr-4">
          <img className="media-image" src="https://mdbootstrap.com/img/Others/documentation/img (96)-mini.jpg" alt="" />
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>
          Duis aute irure dolor in reprehenderit
          </MDBMedia>
          Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus nec, luctus a, lorem.....
          <MDBMedia className="mt-3">
            <MDBMedia left href="/" className="pr-3">
              <img className="media-image" src="https://mdbootstrap.com/img/Others/documentation/img (101)-mini.jpg" alt="" />
            </MDBMedia>
            <MDBMedia body>
              <MDBMedia heading>
              Duis aute irure dolor in reprehenderit
              </MDBMedia>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </MDBMedia>
          </MDBMedia>
        </MDBMedia>
      </MDBMedia>

      <div className="team-section text-center my-5">
      <button className="btn btn-flat"><strong>View all </strong><i class="fas fas fa-angle-right pl-1"></i></button>
      </div>
    </MDBContainer>
  );
}

export default BlogNews;