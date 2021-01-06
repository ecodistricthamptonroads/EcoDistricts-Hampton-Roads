import { Component } from 'react';
import React from 'react';
import Table from 'react-bootstrap/Table';
import { Image, Carousel } from 'react-bootstrap';

import resident from '../../assets/images/resident.jpg';
import elder1 from '../../assets/images/carousel_2.jpg';
import elder2 from '../../assets/images/carousel_3.jpg';
import elder3 from '../../assets/images/carousel_4.jpg';

class Recognition extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={'container-fluid'}>
          <div className={'row'}>
            <div className={'col-4'}>
              <div
                style={{
                  'text-align': 'center',
                  'font-size': '24px',
                  color: 'darkgrey'
                }}
              >
                Resident of the Month
              </div>
              <div style={{ 'font-size': '16px' }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur."
              </div>
            </div>

            <div className={'col-8'}>
              <img width={'100%'} src={resident} />
              <div
                style={{
                  'text-align': 'center'
                }}
              >
                <a href="www.google.com">
                  Nominate Your Next Resident of the Month Here!
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div
          style={{
            'text-align': 'center',
            'font-size': '32px',
            color: 'darkgrey'
          }}
        >
          Honoring Our Elders
        </div>

        <div
          style={{
            'text-align': 'center'
          }}
        >
          <Carousel>
            <Carousel.Item>
              <img src={elder1} alt="Elder1" width="600" height="300" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={elder2} alt="Elder2" width="600" height="300" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={elder3} alt="Elder3" width="600" height="300" />
            </Carousel.Item>
          </Carousel>
          <a href="www.google.com">Nominate An Elder to Honor Here!</a>
        </div>

        <br />
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    issues: state.form.issues
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {};
};

export default connect(null, mapDispatchToProps())(Recognition);
