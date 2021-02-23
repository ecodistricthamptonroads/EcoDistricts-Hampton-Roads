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
        <div id="footer-body" className="row">
          <div id="major-box" className="col-md-8 col-sm-12">
            <h1 id="footer-heading"><b>ECO DISTRICT HAMPTON ROADS</b></h1>
            <div>
              <a href="/about">About</a>
              <a href="/news">News & Events</a>
              <a href={CONTACT_US_LINK}>Report An Issue</a>
              <a href="/surveys">Surveys</a>
              <a href="/jobs">Jobs</a>
              <a href="/resources">Resources</a>
              <a href="/projects">Projects</a>
            </div>
          </div>
          <div id="contact-box" className="col-md-3 col-sm-12">
            <p><a href={CONTACT_US_LINK}>Contact us!</a></p>
            <p>info@csc-att.org</p>
            <p>(404) 936-0629</p>
          </div>
          <div id="sns-section" className="col-sm-12">
            <a href="https://www.facebook.com/ecodistricthamptonroads"><img className="sns-button" src={fb_icon}/></a>
            <a href="https://twitter.com/eco_dis_hampton"><img className="sns-button" src={twitter_icon}/></a>
            <a href="https://www.instagram.com/ecodistricthamptonroads/"><img className="sns-button" src={instragram_icon}/></a>
          </div>
        </div>);
    }
}

export default Footer;