import { Component } from "react";
import React from "react";
import { Image, Carousel } from "react-bootstrap";
import "../assets/stylesheets/app.css";
import "../assets/stylesheets/HomePage.css";
import axios from "axios";

// import main_futuresuburbs from "../assets/images/futuresuburbs.gif";
import main_futuresuburbs from "../assets/images/survey-futuresuburbs.jpg";

import branding_logo from "../assets/images/Branding_White.svg";

// import other_carousel_1 from "../assets/images/carousel_1.jpg";
// import other_carousel_2 from "../assets/images/carousel_2.jpg";
// import other_carousel_3 from "../assets/images/carousel_3.jpg";
// import other_carousel_4 from "../assets/images/carousel_4.jpg";

import img_main1 from "../assets/images/land_slideshow_img/main1.jpg";
import img_main2 from "../assets/images/land_slideshow_img/main2.jpg";
import img_main4 from "../assets/images/land_slideshow_img/main4.jpg";

// import carousel_main_3 from "../assets/images/land_slideshow_img/images Slideshow-3.png";
// import carousel_main_4 from "../assets/images/land_slideshow_img/images Slideshow-4.png";

import img_work1 from "../assets/images/our_work_img/OurWork_1.jpg";
import img_work2 from "../assets/images/our_work_img/OurWork_2.jpg";
import img_work3 from "../assets/images/our_work_img/OurWork_3.jpg";

import img_priority1 from "../assets/images/six_community_priorities/priority1.jpg";
import img_priority2 from "../assets/images/six_community_priorities/priority2.jpg";
import img_priority3 from "../assets/images/six_community_priorities/priority3.jpg";
import img_priority4 from "../assets/images/six_community_priorities/priority6.jpg";
import img_priority5 from "../assets/images/six_community_priorities/priority5.jpg";
import img_priority6 from "../assets/images/six_community_priorities/priority4.jpg";


import about_us from "../assets/images/about_us.jpg";
import our_story from "../assets/images/our_story.jpg";
import what_we_do from "../assets/images/what_we_do.jpg";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import icon from "../assets/images/icon.png";

import { Fade, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { getNews } from "../helpers/api";
// import { getEvents, getNews } from "../helpers/api";

// const test_value = {
//   title: "Lorem ipsum dolor",
//   description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec gravida lorem. Cras molestie orci velit, nec venenatis eros",
//   date: Date.now(),
//   link: [],
// };


const MAIL_CHIMP_EMBEDDED = `<div>

<div id="mc_embed_signup">
<form action="https://ecodistricthamptonroads.us4.list-manage.com/subscribe/post?u=51eb002c7ef49ac4bf7de17e2&amp;id=cca6d76921" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
    <h2 class="Homepage-h2">
            Join Our Newsletter
          </h2>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>

</div>

	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_51eb002c7ef49ac4bf7de17e2_cca6d76921" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Join Now" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[0]='EMAIL';ftypes[0]='email';fnames[3]='MMERGE3';ftypes[3]='birthday';fnames[4]='MMERGE4';ftypes[4]='address';fnames[5]='MMERGE5';ftypes[5]='dropdown';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
</div>`;


class Land extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      events: [],
      eventsIdx: 0,
      newsIdx: 0,
    };
  }
  componentDidMount() {
    // getEvents().then((events) => {
    //   this.setState({ events: events.data });
    // });
    // getNews().then((news) => {
    //   this.setState({ news: news.data });
    // });
  }
  _getDateFormatted(date) {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    var mm = date.getMonth();
    var dd = date.getDate();

    return [monthNames[mm], (dd > 9 ? "" : "0") + dd].join("-");
  }

  getNews() {
    const NEWS2SHOW = [
      ...this.state.news,
      /*{
        title:
          "SDG Projects in the Atlanta Community Grant Winners Announcement",
        description:
          "The RCE Greater Atlanta Youth Network is excited to announce the four winning projects and teams of the SDG Projects in the Atlanta Community Grant.",
      },*/
    ];
    return (
      <section
        style={{
          height: "80vh",
        }}
      >
        <div
          className={"container-fluid"}
          style={{
            width: "inherit",
            height: "inherit",
          }}
        >
          <div className={"row h-100"}>
            <div className="col-2" />
            <div className="col-8 my-auto" style={{ textAlign: "center" }}>
              <h1 style={{ color: "#dda73c" }}>
                <b>Recent News</b>
              </h1>

              {/* News Carousel */}
              <Carousel style={{ padding: "1%" }}>
                {NEWS2SHOW.length != 0 ?  (NEWS2SHOW.map((news, idx) => (
                  <Carousel.Item
                    key={news.title + idx}
                    style={{ height: "50vh"}}
                  >
                    <div
                      className=""
                      style={{
                        borderRadius: "10px",
                      }}
                    >
                      <div
                        style={{ height: "50vh" }}
                        className="card-img-top d-flex align-items-center bg-light"
                      >
                        <div className="col-4">
                          <h2>{news.title}</h2>
                          <h3>By {news.author}</h3>
                          <h3>{new Date(news.date).toDateString()}</h3>
                          <p>{news.description}</p>
                        </div>

                        {/*<img
                          className="img-fluid col-8"
                          src={news.image || main_futuresuburbs}
                          style={{
                            backgroundRepeat: "no-repeat",
                            backgroundAttachment: "fixed",
                            backgroundPosition: "center",
                            borderLeft: "1px solid black",
                            // height: "50vh",
                            padding: 0,
                            // width:100%
                          }}
                        />*/}
                        <div
                            className="col-8"
                            style={{
                              backgroundImage: `url(${news.image || main_futuresuburbs})`,
                              backgroundSize: 'cover',
                              height: "100%",
                            }}
                          >
                          </div>
                      </div>
                    </div>
                  </Carousel.Item>
                ))) : 
                          <Carousel.Item key="231234" style={{height: "50vh"}}>
                          <div
                      className=""
                      style={{
                        borderRadius: "10px",
                      }}
                    >
                      <div
                        style={{ height: "50vh" }}
                        className="card-img-top d-flex align-items-center bg-light"
                      >
                        <div className="col-4">
                          <h2>No news yet</h2>
                          <h3></h3>
                          <h3></h3>
                          <p>Check back soon!</p>
                        </div>

                        {/*<img
                          className="col-8"
                          src={main_futuresuburbs}
                          style={{
                            backgroundRepeat: "no-repeat",
                            // backgroundAttachment: "fixed",
                            //backgroundPosition: "center",
                            backgroundSize: "cover",
                            borderLeft: "1px solid black",
                            // height: "50vh",
                            padding: 0,
                            // height: "100%",
                            // width:100%
                          }}
                        />*/}
                          <div
                            className="col-8"
                            style={{
                              backgroundImage: `url(${main_futuresuburbs})`,
                              backgroundSize: 'cover',
                              height: "100%",
                            }}
                          >
                          </div>
                      </div>
                    </div>
                          </Carousel.Item>
                }
              </Carousel>
            </div>
            <div className="col-2" />
          </div>
        </div>
      </section>
    );
  }

  getLearnMoreButton() {
    return (
    <div
      style={{
        fontSize: '2vw',
        paddingTop: '1rem',
        fontFamily: 'Lato',
        textAlign: 'inherit'
      }}
    >
      <button
        style={{
          color: 'white',
          backgroundColor: '#153967',
          border: 'None',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          fontFamily: 'Lato',
          // margin: '4vh'
          // borderRadius: 10
        }}
      >
        Learn More
      </button>
    </div>
    )
  }
  getMainCarousel() {
    const images = [
      img_main1, 
      img_main2,
      img_main4
    ];

    const headers = ["1. Create a sense of place", "2 prosperity", "3 health_wellness.jpeg", "4 living infrastructure.jpeg"]
    const transitionProperties = {
      duration: 1500,
      transitionDuration: 1500,
      infinite: true,
      indicators: false,
      scale: 0.1,
      arrows: false,
    };
    return (
      <section
        style={{
          height: "90vh",
          width: "100vw",
          padding: 0
        }}
        className="slide-container main-carousel col-12"
      >
        <div>
          <Fade {...transitionProperties}> 
            {images.map((each, index) => (
              <div
                key={index}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, .35), rgba(0, 0, 0, 0.5)), url(${each})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  height: "90vh",
                  width: "100vw",
               
                  // filter: "brightness(50%)",
                }}
                src={each}
              >
                <div class="hero-text">
                  <div style={{transform: "translate(-115%, -25%)"}}> 
                    <img src={branding_logo} class="branding-logo" />
                    <h1>Building Sustainble Communities</h1>
                  </div>
                </div>
              </div>
            ))}
          </Fade>
        </div>
     
      </section>
    );
  }
  getSecondaryCarousel() {
    const images = [
      img_priority1, 
      img_priority2,
      img_priority3, 
      img_priority4,
      img_priority5,
      img_priority6
    ];
    const priorities = [
      "Priority 1: Place",
      "Priority 2: Prosperity",
      "Priority 3: Health + Wellbeing",
      "Priority 4: Connectivity",
      "Priority 5: Living Infrastructure",
      "Priority 6: Resource Restoration"
    ];
    const priorityDescription = [
      "Create inclusive and vibrant communities.",
      "Support education and economic opportunities that build prosperity and accelerate innovation",
      "Nurture people’s health and happiness.",
      "Build effective and equitable connections between people and places.",
      "Enable flourishing ecosystems and restore natural capital.",
      "Move towards a net positive world."
    ];
    const transitionProperties = {
      duration: 1500,
      transitionDuration: 1500,
      infinite: true,
      indicators: true,
      scale: 0.1,
      arrows: false,
    };
    return (
      <section
        style={{
          height: "90vh",
          width: "100vw",
          padding: 0,
          marginBottom: "5rem"
        }}
        className="slide-container col-12"
      >
        <h1 className={'Homepage-h1'}>
            Six Community Priorities
          </h1>
        <div>
          <Slide {...transitionProperties}> 
            {images.map((each, index) => (
              <div
                key={index}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${each})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  height: "90vh",
                  width: "100vw",
                  color: "white",
                  fontFamily: "Lato"
                }}
                src={each}
              >
                <div className={'row h-100'}>
              <div className="col-7"/>
                <div
                  className="Homepage-info col-4 my-auto"
                  style={{
                    padding: '2%'
                  }}
                >
                  <h1 className="Homepage-info-header">
                    {priorities[index]}
                  </h1>
                  <p>
                    {priorityDescription[index]}
                  </p>
                
                  {this.getLearnMoreButton()}

                </div>
              <div className="col-1" />
            </div>
              </div>
            ))}
          </Slide>
        </div>
     
      </section>
    );
  }
  render() {
    return (
      <div
        className="col-12"
        style={{
          padding: 0,
          background: "white"
        }}
      >
        {/* Starting carousel */}
        {this.getMainCarousel()}

        {<section
          style={{
            backgroundImage: `url('${our_story}')`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            textAlign: 'center',
            height: '150vh'
          }}
        >
          <div
            className={'container-fluid'}
            style={{
              color: '#ffffff',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              backgroundPosition: '8px 8px',
              width: 'inherit',
              height: 'inherit',
              fontFamily: "Lato"
            }}
          >
            <div className={'row h-100'}>
              <div className="col-7"/>
                <div
                  className="Homepage-info col-4 my-auto"
                  style={{
                    padding: '2%'
                  }}
                >
                  <h1 className="Homepage-info-header">
                    Our Story
                  </h1>
                  <p>
                    Eco Districts Hampton Roads hopes to create a beautiful and
                    sustainable community within Virginia's Hampton Roads, the
                    largest African American community.
                  </p>
                  
                  {this.getLearnMoreButton()}

                </div>
              <div className="col-1" />
            </div>
          </div>
        </section> }

        {
          
          <h1 className={'Homepage-h1'}>
            Our Work
          </h1>
         
        }
        {/* What we do! */}
        {<section className="Homepage-gallery">
          <div className={'container-fluid'} 
            style={{
              // paddingRight: '2.5rem',
              // paddingLeft: '2.5rem',
              backgroundColor: 'rgba(0, 0, 0, 0.0)'
            }}
          >
            <div className={'row h-100'}>
              <div className="Hompage-panel-img fade-in1 col-4" 
                style={{backgroundImage: `url('${img_work1}')`}}>
                  <div className="Homepage-panel-info">
                    <h1 className="Homepage-panel-header">
                      Workforce Development
                    </h1>
                    <p>
                      Eco Districts Hampton Roads hopes to create a beautiful and
                      sustainable community within Virginia's Hampton Roads, the
                      largest African American community.
                    </p>
                    
                    {this.getLearnMoreButton()}

                  </div>
            </div>
              <div className="Hompage-panel-img fade-in2 col-4" 
                  style={{
                    backgroundImage: `url('${img_work2}')`, 
                  }}>
                    <div
                      className="Homepage-panel-info"
                    >
                      <h1 className="Homepage-panel-header">
                        Projects
                      </h1>
                      <p>
                        Eco Districts Hampton Roads hopes to create a beautiful and
                        sustainable community within Virginia's Hampton Roads, the
                        largest African American community.
                      </p>
                      
                      {this.getLearnMoreButton()}

                    </div>
              </div>
              <div className="Hompage-panel-img fade-in3 col-4" 
                  style={{
                    backgroundImage: `url('${img_work3}')`, 
                  }}>
                    <div
                      className="Homepage-panel-info"
                    >
                      <h1 className="Homepage-panel-header">
                        Resources
                      </h1>
                      <p>
                        Eco Districts Hampton Roads hopes to create a beautiful and
                        sustainable community within Virginia's Hampton Roads, the
                        largest African American community.
                      </p>
                      
                      {this.getLearnMoreButton()}

                    </div>
              </div>
            </div>
          </div>
        </section>}

        {this.getSecondaryCarousel()}

        {/*Information */}
        {/* <div className="Homepage-container">
          <div>
            <div className="row">
              <h1 className="row Homepage-leftheader"> Who are we?</h1>
              <div className="col">
                <h1
                  className="row focus-text"
                  Style="font-size: 1.5em; color: #303030;"
                >
                  We are an initiative started by a man out on a mission from
                  within the Cavalier Manor neighborhood. We have a simple goal
                  of reinvigorating the Cavalier Manor neighborhood and
                  empowering the neighborhood through sustainability.
                </h1>
                <h1
                  className="row focus-text"
                  Style="font-size: 1.5em; color: #303030;"
                >
                  However, we absolutely CANNOT do this without YOU. You are the
                  community and know what is best for your neighborhood. We are
                  here in the background to serve you. Find out more about this
                  movement below and the ways you can make a difference in your
                  local neighborhood!
                </h1>
              </div>
            </div>
          </div>

          <div class="row" Style="text-align: center; padding-top: 2%;">
            <div class="column" Style="width:33%; color: #f75002;">
              <div class="percent">
                <p>7</p>
              </div>
              <h4 class="title">Sub-Communities</h4>
            </div>
            <div class="column" Style="width:33%; color: #f29e02;">
              <div class="percent">
                <p>10000</p>
              </div>
              <h4 class="title">People Impacted</h4>
            </div>
            <div class="column" Style="width:33%; color: #374059;">
              <div class="percent">
                <p>5-100</p>
              </div>
              <h4 class="title">Age Range Involved</h4>
            </div>
          </div>

          <div
            class="row"
            Style="text-align: left; padding-top: 5%; font-weight: 400;"
          >
            <div class="column Homepage-column">
              <h3 class="title">What is an ECODistrict?</h3>
              <p>
                An ECODistrict is a community developed with a holistic
                sustainable view in mind. We strive to make sure our
                neighborhoods are sustainable- Equitable, Economical, and
                Environmental.
              </p>
            </div>
            <div class="column Homepage-column">
              <h3 class="title">What is Sustainability?</h3>
              <p>
                Sustainability is holding, practicing, and sometimes even
                fighting for the principles of an equitable community, an
                economy that works for everyone, and stewarding our community
                environment well.
              </p>
            </div>
            <div class="column Homepage-column">
              <h3 class="title">Why Should I Join?</h3>
              <p>
                Want to feel a sense of belonging, finally find out who those
                strangers living around you are, or make a tangible difference?
                We do to. The American system has disinvested from the Cavalier
                Manor neighborhood in previous decades, and we can change that
                narrative now! Come empower the neighborhood again through
                sustainable initiatives that will tangibily make our
                neighborhood more affordable, healthier, and connected.
              </p>
            </div>
          </div>
        </div>
         */}
        {/* Recent News */}
        {this.getNews()}
        {/* Join the community */}

        <section
          style={{
            height: "90vh",
          }}
        >
          <div
            className={"container"}
            style={{
              width: "inherit",
              height: "inherit",
            }}
          >
            
            <div className={"row"} style={{ height: "max-content" }}>
              <div className="col-1" />
              {/* <div
                className="col-3 my-auto"
                Style="text-align: left; font-weight: bold;"
              >
                <div
                  style={{ fontSize: "3vw", color: "blue", marginTop: "-7vw" }}
                >
                  Join the
                </div>
                <div
                  style={{
                    fontSize: "4vw",
                    color: "#eca61f",
                    marginTop: "-2vw",
                  }}
                >
                  community
                  <span style={{ color: "blue" }}>.</span>
                </div>

                <div class="row" Style="padding-left: 5%; padding-right: 5%; ">
                  
                  <p>
                    We will use your email to communicate with you about
                    happenings so that you can stay updated and involved, your
                    birthday so that we can gauge the age of our audience to
                    make our initiatives better serve the prevalent age groups,
                    your address to inform us about which neighborhood in the
                    Cavalier Manor area you live in to more appropriately plan
                    our programs to serve exactly where our community lives, and
                    your name so that we can begin to know you! We hope that you
                    want to join us to make the neighborhood connected!
                  </p>
                </div>
              </div> */}
              
              <div
                className="Mail-Chimp-signup"
                dangerouslySetInnerHTML={{ __html: MAIL_CHIMP_EMBEDDED }}
              />
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default Land;
