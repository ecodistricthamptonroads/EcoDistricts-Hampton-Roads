import { Component } from 'react';
import React from 'react';
import '../../assets/stylesheets/app.css';
import '../../assets/stylesheets/aboutPage.css';
import { Link } from "react-router-dom";

import picture from '../../assets/images/InTheDistrict0.jpg';

class Donate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Support Us</h1>
        <Link>
          <button className = "button-more" href = "https://donatenow.networkforgood.org/1388125">
            DONATE
          </button>
        </Link>  
        <h2> 
          Click the button on the above to give securely online via our 501(c)(3) 
          Joint Plan of Work partner, Virginia Organizing.
        </h2>
        <h2>
          We thank you, in advance, for your generosity in helping us make our area a more sustainable environment in which to live, work and play.
        </h2>
          <p className="About-p">
          Note: Virginia Organizing is officially registered with the Department of Agriculture and Consumer Services, P.O. Box 1163, Richmond, VA 23209. You can write to this Department for all relevant financial statements and procedures regarding the solicitation of contributions. Your donation is tax-deductible to the extent allowed by law.
          </p>
          <br/>
        <div >
            <img className="picture" src={picture} alt="Smiling picture of two residents holding a sign saying In the District" />        
        </div>

      

      </div>
          

    );
  }
}

export default Donate;
