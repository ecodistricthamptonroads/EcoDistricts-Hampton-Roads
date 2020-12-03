import { Component } from 'react';
import React from 'react';
import '../../assets/stylesheets/app.css';

import carousel_1 from '../../assets/images/carousel_1.jpg';
import carousel_2 from '../../assets/images/carousel_2.jpg';
import carousel_3 from '../../assets/images/carousel_3.jpg';
import carousel_4 from '../../assets/images/carousel_4.jpg';
class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let images = [carousel_1, carousel_2, carousel_3, carousel_4];
    return (
      <div className="col-sm-10 offset-md-1">
        {/* TODO: add parallax  */}
        <div className="About-Heading">About Us</div>
        <div className="About-body">
          <div className="About-who"> Who are we?</div>
          <br />
          <div className="About-row">
            <div className="About-video"> video</div>
            <div className="About-text">
              Eco Districts Hampton Roads hopes to create a beautiful and
              sustainable community within Virginia's Hampton Roads, the largest
              African American community. We hope to bring the community
              together in order to face social and educational challenges,
              creating a vibrant neighborhood.
            </div>
          </div>
          <br />
          <div className="About-gallery">
            <div id="CrossFade">
              {/* <img src="//unsplash.it/1600/900?image=1043" alt="img" />
              <img src="//unsplash.it/1600/900?image=1039" alt="img" />
              <img src="//unsplash.it/1600/900?image=1017" alt="img" />
              <img src="//unsplash.it/1600/900?image=929" alt="img" /> */}
              {images.map(img => (
                <img src={img} alt="img" />
              ))}

              <div class="intro">
                <h1>Eco-D</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perferendis impedit facilis nesciunt quam vitae voluptatibus
                  ullam vero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;