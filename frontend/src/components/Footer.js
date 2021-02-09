import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import fb_icon from "../assets/images/social-logos/fb.png"
import twitter_icon from "../assets/images/social-logos/twitter.png"
import instragram_icon from "../assets/images/social-logos/instagram.png"
import linkedin_icon from "../assets/images/social-logos/linkedin.png"

import "../assets/stylesheets/app.css";
import "../assets/stylesheets/footerstyle.css"

class Footer extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){}

    
    render(){
      const CONTACT_US_LINK =
      "https://us4.list-manage.com/contact-form?u=51eb002c7ef49ac4bf7de17e2&form_id=c58d36b6f54bd9b975ec2607253190d2";
    
        return(
        <div id="footer-body">
          <div id="major-box">
            <h1 id="footer-heading"><b>ECO DISTRICT HAMPTON ROADS</b></h1>
            <div>
              <a href="/about" className="col-md-2 col-sm-12">About</a>
              <a href="/news" className="col-md-2 col-sm-12">News & Events</a>
              <a href={CONTACT_US_LINK} className="col-md-2 col-sm-12">Report An Issue</a>
              <a href="/surveys" className="col-md-2 col-sm-12">Surveys</a>
              <a href="/jobs" className="col-md-2 col-sm-12">Jobs</a>
              <a href="/resources" className="col-md-2 col-sm-12">Resources</a>
              <a href="/projects" className="col-md-2 col-sm-12">Projects</a>
            </div>
          </div>
          <div id="contact-box">
            <p>Contact us!</p>
            <p>info@csc-att.org</p>
            <p>(404) 936-0629</p>
          </div>
          <div id="sns-section">
            <a href="https://www.facebook.com/Center-for-Sustainable-Communities-Atlanta-219072231567212"><img className="sns-button" src={fb_icon}/></a>
            <a href="https://twitter.com/eco_dis_hampton"><img className="sns-button" src={twitter_icon}/></a>
            <a href="https://www.instagram.com/ecodistricthamptonroads/"><img className="sns-button" src={instragram_icon}/></a>
            <a href="https://linkedin.com"><img className="sns-button" src={linkedin_icon}/></a>
          </div>
        </div>);
    }
}

export default Footer;