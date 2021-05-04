import { Component } from 'react';
import React from 'react';
import '../../assets/stylesheets/DonatePage.css';
import { Link } from "react-router-dom";
import picture from '../../assets/images/InTheDistrict0.jpg';

class Donate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"container-xl"} 
      >
        <h1 className="Donate-h1">Support Us</h1>
        <a  href = "https://donatenow.networkforgood.org/1388125" target="_blank">
        <button className = "button-donate">
            DONATE
          </button>
        </a>
          
         
        <h4 className="Donate-h4"> 
          Click the button on the above to give securely online via our 501(c)(3) 
          Joint Plan of Work partner, Virginia Organizing.
        </h4>
        <h4>
          We thank you for your generosity in helping us make our area a more sustainable environment in which to live, work and play.
        </h4>
        <h4>
          Note: Virginia Organizing is officially registered with the Department of Agriculture and Consumer Services, P.O. Box 1163, Richmond, VA 23209. You can write to this Department for all relevant financial statements and procedures regarding the solicitation of contributions. Your donation is tax-deductible to the extent allowed by law.
        </h4>
        
        <br/>
        <div >
            <img className="picture" src={picture} alt="Smiling picture of two residents holding a sign saying In the District" />        
        </div>

        <h3>Tax Deduction Information</h3>
        <br/>
        <h4>Did you know that charitable gifts to WISE.E are tax deductible under section 501(c)(3) of the Internal Revenue Code?</h4>

        <h4><span style={{fontWeight: 'bold'}}> Organization Name:</span> Virginia Organizing</h4>
        <h4><span style={{fontWeight: 'bold'}}> Tax ID:</span> 54-1674992</h4>
        <br/>
        <h4>To deduct a charitable contribution, you must file Form 1040 and itemize deductions on Schedule A. Here are some resources from the IRS to help:</h4>
        <div>
          <h4>
            <a href="https://www.irs.gov/taxtopics/tc506">- Publication 526</a>
          </h4>
          <h4>
            <a href="https://www.irs.gov/publications/p526#en_US_2015_publink1000229849">
              - How to report on lines 16 through 19 of Schedule A (Form 1040) </a>
          </h4>
          <br/>
          <h1 className="Donate-h1">Thank You!</h1>
        </div>
      </div>
          

    );
  }
}

export default Donate;
