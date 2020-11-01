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
import instagram from '../assets/images/instagram.svg';
import facebook from '../assets/images/facebook.svg';
import twitter from '../assets/images/twitter.svg';

import MailChimpSubscribe from './MailChimpSubscribe.js';

class Land extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* Starting carousel */}
        <section
          style={{
            backgroundImage: `url('${carousel_2}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            textAlign: 'left',
            height: '90vh'
          }}
        >
          <div
            className={'container-fluid'}
            style={{
              color: '#ffffff',
              background:
                'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2))',
              width: 'inherit',
              height: 'inherit'
            }}
          >
            <div className={'row h-100'}>
              <div className="col-9 my-auto">
                <div
                  style={{
                    fontSize: '6vw',
                    fontFamily: 'Rozha One, serif',
                    color: '#dda73c'
                  }}
                >
                  Connecting the Neighborhood!
                </div>
                <div style={{ fontSize: '3vw' }}>
                  <div style={{ marginBottom: '2vh' }}>
                    ECODistrict
                    <br />
                    Hampton Roads, VA
                  </div>
                  <div>Are you in the district?</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who are we? */}
        <section
          style={{
            backgroundImage: `url('${about_us}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            textAlign: 'center',
            height: '70vh'
          }}
        >
          <div
            className={'container-fluid'}
            style={{
              color: '#ffffff',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              width: 'inherit',
              height: 'inherit'
            }}
          >
            <div className={'row h-100'}>
              <div className="col-1" />
              <div
                className="col-5 my-auto"
                style={{
                  fontSize: '7vw',
                  fontFamily: 'Rozha One, serif'
                }}
              >
                <div style={{ color: '#dda73c' }}>Who are we?</div>
              </div>
              <div
                className="col-5 my-auto"
                style={{
                  fontSize: '2.5vw',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  borderRadius: '30px/30px',
                  padding: '20px'
                }}
              >
                Eco Districts Hampton Roads hopes to create a beautiful and
                sustainable community within Virginia's Hampton Roads, the
                largest African American community.
                <div
                  style={{
                    fontSize: '4vw',
                    fontFamily: 'Rozha One, serif'
                  }}
                >
                  <button
                    style={{
                      color: 'black',
                      backgroundColor: '#8cca7c',
                      borderRadius: 10
                    }}
                  >
                    Learn More!
                  </button>
                </div>
              </div>
              <div className="col-1" />
            </div>
          </div>
        </section>

        {/* What we do! */}
        <section
          style={{
            backgroundImage: `url('${what_we_do}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            textAlign: 'center',
            height: '70vh'
          }}
        >
          <div
            className={'container-fluid'}
            style={{
              color: '#ffffff',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              width: 'inherit',
              height: 'inherit'
            }}
          >
            <div className={'row h-100'}>
              <div className="col-1" />
              <div
                className="col-5 my-auto"
                style={{
                  fontSize: '2.5vw',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  borderRadius: '30px/30px',
                  padding: '20px'
                }}
              >
                <div>
                  In order to help the community, Eco Districts Hampton Roads
                  conducts multiple projects done by volunteers in order to fix
                  various problems identified by residents
                </div>
                <div
                  style={{
                    fontSize: '4vw',
                    fontFamily: 'Rozha One, serif'
                  }}
                >
                  <button
                    style={{
                      color: 'black',
                      backgroundColor: '#8cca7c',
                      borderRadius: 10
                    }}
                  >
                    Learn More!
                  </button>
                </div>
              </div>
              <div
                className="col-5 my-auto"
                style={{
                  fontSize: '7vw',
                  fontFamily: 'Rozha One, serif'
                }}
              >
                <div style={{ color: '#dda73c' }}>What do we do?</div>
              </div>
              <div className="col-1" />
            </div>
          </div>
        </section>

        {/* Recent News */}
        <section
          style={{
            height: '70vh',
            background:
              'linear-gradient(to bottom, rgba(29, 132, 227, 1), rgba(29, 132, 227, 0.65))'
          }}
        >
          <div
            className={'container-fluid'}
            style={{
              width: 'inherit',
              height: 'inherit'
            }}
          >
            <div className={'row h-100'}>
              <div className="col-2" />
              <div className="col-8 my-auto" style={{ textAlign: 'center' }}>
                <h1 style={{ color: '#dda73c' }}>
                  <b>Recent News</b>
                </h1>

                {/* News Carousel */}
                <div
                  id="multi-item-example"
                  className="carousel slide carousel-multi-item"
                  dataRide="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      dataTarget="#multi-item-example"
                      dataSlideTo="0"
                      class="active"
                    ></li>
                    <li dataTarget="#multi-item-example" dataSlideTo="1"></li>
                  </ol>

                  <div
                    className="carousel-inner"
                    role="listbox"
                    style={{
                      // width: "70vw",
                      height: '50vh',
                      textAlign: 'center',
                      color: 'rgba(152, 179, 145, 1)'
                    }}
                  >
                    {/* Item 1 */}
                    <div class="carousel-item active">
                      <div className="card">
                        <div className="card-img-top d-flex align-items-center bg-light">
                          <div className="col-4 p-2 m-4">
                            <h2>
                              SDG Projects in the Atlanta Community Grant
                              Winners Announcement
                            </h2>
                            <p>
                              The RCE Greater Atlanta Youth Network is excited
                              to announce the four winning projects and teams of
                              the SDG Projects in the Atlanta Community Grant.
                            </p>
                          </div>

                          <div>
                            <img className="img-fluid" src={sdg} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div class="carousel-item">
                      <div className="card">
                        <div className="card-img-top d-flex align-items-center bg-light">
                          <p className="col p-2 m-0">Placeholder text</p>
                          <div>
                            <img
                              className="img-fluid"
                              src="https://picsum.photos/400"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* End carousel items */}
                  </div>
                </div>
              </div>
              <div className="col-2" />
            </div>
          </div>
        </section>

        {/* Join the community */}
        <section
          style={{
            height: '70vh',
            background:
              'linear-gradient(to bottom, rgba(29, 132, 227, 0.65), rgba(29, 132, 227, 0.3))'
          }}
        >
          <div
            className={'container-fluid'}
            style={{
              width: 'inherit',
              height: 'inherit'
            }}
          >
            <div className={'row h-100'}>
              <div className="col-1" />
              <div className="col-3 my-auto" style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '3vw', color: 'white' }}>Join the</div>
                <div
                  style={{
                    fontSize: '4vw',
                    color: '#eca61f',
                    marginTop: '-2vw'
                  }}
                >
                  community
                  <span style={{ color: 'white' }}>.</span>
                </div>
              </div>
              <div className="col-1" />
              <div
                className="col-6 my-auto"
                style={{
                  fontSize: '1.5vw',
                  color: 'white',
                  // backgroundColor: "green",
                  backgroundColor: '#92a989',
                  borderRadius: '40px/40px',
                  textAlign: 'left',
                  padding: 30
                }}
              >
                <form>
                  <div class="form-group">
                    <label for="name">Full Name:</label>
                    <input
                      type="username"
                      class="form-control"
                      id="name"
                      aria-describedby="usernameHelp"
                      placeholder="Enter your Name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address:</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password:</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <button
                      type="submit"
                      class="btn btn-primary"
                      style={{
                        width: 'auto',
                        backgroundColor: 'rgba(60, 133, 220, 1)'
                      }}
                    >
                      Join Now!
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-1" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <section style={{}}>
          <div className="container-fluid">
            <div className="row">
              <div className="col" style={{ textAlign: 'center', padding: 70 }}>
                <a
                  href="https://www.instagram.com/ecodistricthamptonroads/"
                  style={{ padding: '0px 20px' }}
                >
                  <img src={instagram} width={'65px'} height={'65px'} />
                </a>
                <a
                  href="https://www.facebook.com/Center-for-Sustainable-Communities-Atlanta-219072231567212"
                  style={{ padding: '0px 20px' }}
                >
                  <img src={facebook} width={'65px'} height={'65px'} />
                </a>
                <a
                  href="https://twitter.com/eco_dis_hampton"
                  style={{ padding: '0px 20px' }}
                >
                  <img src={twitter} width={'65px'} height={'65px'} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Land;
