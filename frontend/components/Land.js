import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import { Image, Carousel } from 'react-bootstrap';

import '../../public/app.css';
import carousel_1 from '../assets/images/carousel_1.jpg';
import carousel_2 from '../assets/images/carousel_2.jpg';
import carousel_3 from '../assets/images/carousel_3.jpg';
import carousel_4 from '../assets/images/carousel_4.jpg';
import about_us from '../assets/images/about_us.jpg';
import what_we_do from '../assets/images/what_we_do.jpg';
import instagram from '../assets/images/instagram.png';
import facebook from '../assets/images/facebook.png';
import twitter from '../assets/images/twitter.jpg';

class Land extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div
          style={{
            'text-align': 'center',
            'font-size': '48px',
            color: 'darkgrey'
          }}
        >
          Eco Districts Hampton Roads
        </div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carousel_1}
              alt="Eco Districts Hampton Roads"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carousel_2}
              alt="Eco Districts Hampton Roads"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carousel_3}
              alt="Eco Districts Hampton Roads"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carousel_4}
              alt="Eco Districts Hampton Roads"
            />
          </Carousel.Item>
        </Carousel>
        <br />
        <div className={'container-fluid'}>
          <div className={'row'}>
            <div className={'col-4'}>
              <div
                style={{
                  'text-align': 'center',
                  'font-size': '48px',
                  color: 'darkgrey'
                }}
              >
                About Us
              </div>
              <div style={{ 'font-size': '18px' }}>
                Eco Districts Hampton Roads hopes to create a beautiful and
                sustainable community within Virginia's Hampton Roads, the
                largest African American community. We hope to bring the
                community together in order to face social and educational
                challenges, creating a vibrant neighborhood.
              </div>
            </div>
            <div className={'col-8'}>
              <img width={'100%'} src={about_us} />
            </div>
          </div>
        </div>
        <br />
        <div className={'container-fluid'}>
          <div className={'row'}>
            <div className={'col-8'}>
              <img width={'100%'} src={what_we_do} />
            </div>
            <div className={'col-4'}>
              <div
                style={{
                  'text-align': 'center',
                  'font-size': '48px',
                  color: 'darkgrey'
                }}
              >
                What We Do
              </div>
              <div style={{ 'font-size': '18px' }}>
                In order to help the community, Eco Districts Hampton Roads
                conducts multiple projects done by volunteers in order to fix
                various problems identified by residents. If you would like to
                join us for a project, please click here to see current or
                future projects. If you have a problem you believe needs to be
                fixed, please click here.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Land;
