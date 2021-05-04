import { Component } from 'react';
import React from 'react';
import '../../assets/stylesheets/app.css';
import '../../assets/stylesheets/aboutPage.css';
import { Link } from "react-router-dom";

import carousel_1 from '../../assets/images/land_slideshow_img/main1.jpg';
// import infographic from '../../assets/images/info.jpg';
import infographic from '../../assets/images/infographic-priorities.png';

// import carousel_2 from '../../assets/images/carousel_2.jpg';
// import carousel_3 from '../../assets/images/carousel_3.jpg';
// import carousel_4 from '../../assets/images/carousel_4.jpg';
class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let images = [carousel_1];//, carousel_2, carousel_3, carousel_4];
    return (
      <div>
        <div className="About-Hero-Header">About Us</div>

        <div className="flex-container">
          <img className="About-image" src={infographic} />

          <div className="col About-text">
            <h1 className="About-h1"> Who are we?</h1>
            <p className="About-p">
              Eco Districts Hampton Roads hopes to create a beautiful and
              sustainable community within Virginia's Hampton Roads, the largest
              African American community. We hope to bring the community
              together in order to face social and educational challenges,
              creating a vibrant neighborhood.
            </p>
            <p className="About-p">
              We believe that sustainability is holding, practicing, and sometimes even
              fighting for the principles of an equitable community, an
              economy that works for everyone, and stewarding our community
              environment well. Through our initiatives, we hope to bring a sustainable future to Hampton Roads.
            </p>

             <Link className="ButtonWrapper" to="/team">
                <button className = "button">
                  Meet the Team!
                </button>
              </Link>  

        

            </div>
        </div>
      </div>

    );
  }
}

export default About;
