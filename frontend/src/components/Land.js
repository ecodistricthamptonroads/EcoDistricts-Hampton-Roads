import { Component } from "react";
import React from "react";
import { Image, Carousel } from "react-bootstrap";
import "../assets/stylesheets/app.css";
import "../assets/stylesheets/HomePage.css";
import axios from "axios";
import { Link } from "react-router-dom";

import main_futuresuburbs from "../assets/images/survey-futuresuburbs.jpg";
import branding_logo from "../assets/images/Branding_White.svg";

import img_main1 from "../assets/images/land_slideshow_img/main1.jpg";
import img_main2 from "../assets/images/land_slideshow_img/main2.jpg";
import img_main4 from "../assets/images/land_slideshow_img/main4.jpg";

import img_work1 from "../assets/images/our_work_img/OurWork_1.jpg";
import img_work2 from "../assets/images/our_work_img/OurWork_2.jpg";
import img_work3 from "../assets/images/our_work_img/OurWork_3.jpg";

import img_priority1 from "../assets/images/six_community_priorities/priority1.jpg";
import img_priority2 from "../assets/images/six_community_priorities/priority2.jpg";
import img_priority3 from "../assets/images/six_community_priorities/priority3.jpg";
import img_priority4 from "../assets/images/six_community_priorities/priority4.jpg";
import img_priority5 from "../assets/images/six_community_priorities/priority5.jpg";
import img_priority6 from "../assets/images/six_community_priorities/priority6.jpg";


import about_us from "../assets/images/about_us.jpg";
import our_story from "../assets/images/our_story.jpg";
import what_we_do from "../assets/images/what_we_do.jpg";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import icon from "../assets/images/icon.png";

import { Fade, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { getNews, getSpecificImage } from "../helpers/api";

// import { getEvents, getNews } from "../helpers/api";

// const test_value = {
//   title: "Lorem ipsum dolor",
//   description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec gravida lorem. Cras molestie orci velit, nec venenatis eros",
//   date: Date.now(),
//   link: [],
// };

const MAIL_CHIMP_EMBEDDED = `
<div>
<div id="mc_embed_signup">
<form action="https://ecodistricthamptonroads.us4.list-manage.com/subscribe/post?u=51eb002c7ef49ac4bf7de17e2&amp;id=cca6d76921" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
    <h2 class="Homepage-h2">
            Join Our Newsletter
    </h2>
    <p class="signup-text">
      Want to feel a sense of belonging and make a tangible difference? We do too. 
      <br>
      Join our newsletter to stay
      connected on our initiatives to make our
      neighborhood more affordable, healthier, and more connected!
    </p>
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
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'>
</script><script type='text/javascript'>(function($) {window.fnames = new Array(); 
  window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
</div>
`;
const MAIL_CHIMP_EMBEDDED_OLD = `
<div>
<div id="mc_embed_signup">
<form action="https://ecodistricthamptonroads.us4.list-manage.com/subscribe/post?u=51eb002c7ef49ac4bf7de17e2&amp;id=cca6d76921" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
    <h2 class="Homepage-h2">
            Join Our Newsletter
    </h2>
    <p class="signup-text">
      Want to feel a sense of belonging and make a tangible difference? We do too. 
      <br>
      Join our newsletter to stay
      connected on our initiatives to make our
      neighborhood more affordable, healthier, and more connected!
    </p>
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
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'>
</script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[0]='EMAIL';ftypes[0]='email';fnames[3]='MMERGE3';ftypes[3]='birthday';fnames[4]='MMERGE4';ftypes[4]='address';fnames[5]='MMERGE5';ftypes[5]='dropdown';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
</div>
`;


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
    getNews().then((news) => {
      this.setState({ news: news.data });
    });
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

  getNewsLink(){

  }

  getNews() {
    const NEWS2SHOW = [
      ...this.state.news,
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
            <div className="col-1" />
            <div className="col-10 my-auto" style={{ textAlign: "center" }}>
              <h1 className="Homepage-h1-alt"> 
                <b>Recent News</b>
              </h1>

              {/* News Carousel */}
              <Carousel style={{ padding: "1%" }}>
                {NEWS2SHOW.length != 0 ?  (NEWS2SHOW.map((news, idx) => (
                  // Generates the news item in the Carousel
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
                        <div className="col-6">
                          <h2>{news.title}</h2>
                          <h5>By {news.author}</h5>
                          <h5>{new Date(news.date).toDateString()}</h5>
                          <p className="pnews">{news.description}</p>

                          {/* <Link to={{"/news:" : news.id}}> */}
                          <Link to="/news">
                            <button className = "button-read button-more">
                              Read More
                            </button>
                          </Link>

                        </div>
                        
                        <div
                          className="col-6"
                          /*src={getSpecificImage("medium", news.image)|| main_futuresuburbs}*/
                          // Other half of the Carousel item: the image
                          style={{
                            backgroundImage: `url(${getSpecificImage("medium", news.image)})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundColor: "grey",
                            height:"100%",
                          }}
                        />
        
                      </div>
                    </div>
                  </Carousel.Item>
                ))) : 
                // Generates the only Carousel item when there are no news items
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
                  <div className="col-6" >
                    <h2>No news yet</h2>
                    <h3></h3>
                    <h3></h3>
                    <p>Check back soon!</p>
                  </div>
                  <div
                    className="col-6"
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
            <div className="col-1" />
          </div>
        </div>
      </section>
    );
  }

  getMainCarousel() {
    const images = [
      img_main1, 
      img_main2,
      img_main4
    ];

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
                  backgroundPosition: "initial",
                  height: "90vh",
                  width: "100vw",
               
                  // filter: "brightness(50%)",
                }}
                src={each}
              >
                <div class="hero-text">
                    <img src={branding_logo} class="branding-logo" />
                    <h1>Building Sustainble Communities</h1>
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
      img_priority6,
    ];
    const priorities = [
      "Place",
      "Prosperity",
      "Resource Restoration",
      "Health + Wellbeing",
      "Living Infrastructure",
      "Connectivity",
    ];
    const priorityGoals = [
      "Create inclusive and vibrant communities.",
      "Support education and economic opportunities that build prosperity and accelerate innovation",
      "Move towards a net positive world.",
      "Nurture people’s health and happiness.",
      "Enable flourishing ecosystems and restore natural capital.",
      "Build effective and equitable connections between people and places.",
    ];

    const priorityObjectives = [
      "Strong civic engagement; preservation and celebration of culture and history; diverse and affordable housing; and accessible public spaces and services for daily needs.",
      "Equitable access to quality education and career pathways, a robust employment base with increasing jobs and job quality, and entrepreneurial innovation and business start-ups.",
      "Increase efficient water use; divert waste from landfills; productively reuse remediated land; and pursue energy efficiency, technology advancements, and clean, renewable energy production that reduces greenhouse gas emissions.",
      "Active living based on walkability and recreation; equitable health outcomes based on accessible, affordable health care; affordable, local fresh food; remediated toxic environments; and strong public safety.",
      "Healthy soils, water, trees, and wildlife habitat; accessible nature; and natural processes integrated into the built environment.",
      "A street network accommodating diverse ages and abilities using multiple travel modes and shared mobility options, and a high-quality digital network providing equitable connectivity and leveraged community data.",
    ]
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
        className="slide-container priorities-section"
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
                  fontFamily: "Lato",
                }}
                src={each}
              >
                <div className={'row'}>
              {/* <div className="col-7"/> */}
                <div
                  className="Homepage-info panel-right priority-panel"
                >
                  <h1 className="Homepage-info-header">
                    {priorities[index]}
                  </h1>
                  <p>
                    <span style={{fontWeight: "bold"}}>Goals: </span>{priorityGoals[index]}
                  </p>
                  <p>
                  <span style={{fontWeight: "bold"}}>Objective: </span>{priorityObjectives[index]}
                  </p>
                
                  {/* <Link to="/about">
                    <button className = "button-more">
                      Learn More
                    </button>
                  </Link> */}

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
                <div
                  className="Homepage-info panel-right my-auto"
                >
                  <h1 className="Homepage-info-header">
                    Our Story
                  </h1>
                  <p>
                    Eco Districts Hampton Roads is a community developed with a holistic
                    sustainable view in mind. We strive to make sure our
                    neighborhoods are sustainable- Equitable, Economical, and
                    Environmental.
                  </p>
                  
                  <Link to="/about">
                    <button className = "button-more">
                      Learn More
                    </button>
                  </Link>


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
          <div className={'container-fluid'}>
            <div className={'row'}>
              <div className="Homepage-panel-img column" 
                style={{backgroundImage: `url('${img_work1}')`}}>
                  <div className="Homepage-panel-info">
                    <h1 className="Homepage-panel-header">
                      Workforce Development
                    </h1>
                    <p>
                      The Eco Districts Hampton Roads Sustainable Job Center provides a path towards sustainable jobs for members of the community.
                    </p>

                    <Link to="/opportunities">
                      <button className = "button-more">
                        Learn More
                      </button>
                    </Link>        
                    

                  </div>
            </div>
              <div className="Homepage-panel-img column" 
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
                        Eco Districts Hampton Roads works on a variety of projects to support a flourishing, sustainable, and equitable community.
                      </p>
                      
                      <Link to="/projectstatus">
                        <button className = "button-more">
                          Learn More
                        </button>
                      </Link>  

                    </div>
              </div>
              <div className="Homepage-panel-img column" 
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
                        Eco Districts Hampton Roads compiles resources to help residents facing barriers to employement and tools for environmental justice.
                      </p>
                      
                      <Link to="/resources">
                        <button className = "button-more">
                          Learn More
                        </button>
                      </Link>  

                    </div>
              </div>
            </div>
          </div>
        </section>}

        {this.getSecondaryCarousel()}

        {/* Recent News */}
        {this.getNews()}

        {/* <section className="signup">
              <div
                className="Mail-Chimp-signup"
                dangerouslySetInnerHTML={{ __html: MAIL_CHIMP_EMBEDDED }}
              />
        </section> */}

      </div>
    );
  }
}

export default Land;

