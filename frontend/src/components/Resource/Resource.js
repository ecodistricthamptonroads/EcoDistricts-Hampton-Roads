import { Component } from 'react';
import React from 'react';
import '../../assets/stylesheets/app.css';
import '../../assets/stylesheets/resourcestyle.css';

import { Card } from 'react-bootstrap';
class Resource extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const RESOURCE_LINKS = [
      {
        link: 'https://play.google.com/store/apps/details?id=gov.nasa.globe.observer&hl=en',
        name: 'Globe Observer',
        image: 'https://play-lh.googleusercontent.com/2iBA5BkZ6G7G5idLd5RhMGNW1aC0kQ-MIKWe75cM0ub8PxXhevfu1rJWOt4--wGalA=s180',
        description: 'GLOBE Observer invites you to make observations of the Earth around you. Observations you collect and submit with this app are designed to help scientists better understand satellite data collected. '
      },

      {
        link: 'https://www.vims.edu/people/loftis_jd/Catch%20the%20King/index.php',
        name: 'Sea Level Rise App',
        image: 'https://drive.google.com/uc?export=view&id=1oELWmseUho5RMonP9vOJwT5fUwoHLsKm',
        // image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple71/v4/c0/5f/34/c05f3446-d638-0fdc-e685-2935ebc3ef6b/mzl.ogzyxgyf.png/1200x630wa.png',
        description: 'Get information about this global phenomena of Sea Level Rise and participate (as a volunteer) in capturing the data we need to better understand and solve the challenges it brings.'
      },
     
      {
        link: 'https://duckduckgo.com',
        name: 'Word Up App',
        image: 'https://drive.google.com/uc?export=view&id=13QPYzXmhCa_inkjTTID4Caag02TRrn_K',
        description: 'This description is currently behaving as a placeholder, because the appropriate description is not yet known.'
      },

      {
        link: 'https://duckduckgo.com',
        name: 'Healthy Homes',
        image: 'https://drive.google.com/uc?export=view&id=1KHRiNAWZaejm0gJlLoUANVAfmmTHQ7K6',
        description: 'This description is currently behaving as a placeholder, because the appropriate description is not yet known.'
      },

      {
        link: 'https://duckduckgo.com',
        name: 'Housing Justice App',
        image: 'https://drive.google.com/uc?export=view&id=1KHRiNAWZaejm0gJlLoUANVAfmmTHQ7K6',
        description: 'This description is currently behaving as a placeholder, because the appropriate description is not yet known.'
      },

      {
        link: 'https://duckduckgo.com',
        name: 'Street Level Observation',
        image: 'https://drive.google.com/uc?export=view&id=1KHRiNAWZaejm0gJlLoUANVAfmmTHQ7K6',
        description: 'This description is currently behaving as a placeholder, because the appropriate description is not yet known.'
      },
    ];

    const SECONDCHANCE_LINKS = [
      {
        link: 'thedreamcorps.org',
        name: 'The Dreamcorps',
        image: 'https://www.thedreamcorps.org/wp-content/themes/dreamcorps/dist/images/logo_7c9a110c.svg',
        description: 'This organization provides resources for formerly incarcerated people to re-enter the workforce in the clean energy center.'
      },
      {
        link: 'https://www.google.con',
        name: 'Resource2',
        image: 'https://i.imgur.com/ElWjENc.png',
        description: 'Description sample lorem ipsum et cetera that is all that is all; there is nothing else, although this is some text that is being used as filler for when there will be a proper description, which will be added soon.'
      },
      {
        link: 'https://www.google.con',
        name: 'Resource3',
        image: 'https://i.imgur.com/ElWjENc.png',
        description: 'Description sample lorem ipsum et cetera that is all that is all; there is nothing else, although this is some text that is being used as filler for when there will be a proper description, which will be added soon.'
      }
    ];

    const cardImageStyle = {
      borderRadius: "8px",
      boxShadow: "3px 2px 5px 2px rgba(0, 0, 0, 0.25)"
    };

    return (
      <div className="Resource-container">
        <h1 className="Resource-Heading section-title">Resources</h1>
        <div className="Resource-body">
          <div className="Resource-text">
            Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus dapibus metus sit amet turpis finibus semper. Praesent eu
            tortor tortor.
          </div>
          <br />
          <div className="Resource-gallery">
            <div className="Resource-Heading section-title" style={{textAlign:"left"}}>Apps</div>
            <div className="Resource-Grid row ">
              {RESOURCE_LINKS.map(({ name, link, image, description }) => (
                <a className="col-md-4 col-sm-12 d-flex flex-fill" key={name} href={link}>
                  <Card className="Resource-card">
                    <div className="card-heading">
                      <Card.Img
                        className="Resource-img"
                        variant="top"
                        src={image}
                        style={cardImageStyle}
                      />
                      <br />
                      <h1 className="Resource-Name">{name}</h1>
                    </div>
                    <Card.Body>
                      <Card.Text>
                        {description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              ))}
            </div>
          </div>
          <div className="Resource-row">
            <h1 className="Resource-Heading section-title" style={{textAlign:"left"}}>Second Chance Resources</h1>
            <div className="Resource-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
              {SECONDCHANCE_LINKS.map(({ name, link, description }) => (
                <div className="Resource-text" key={name}>
                  <button className="second-chance-button"><a className="Resource-list" href={link}>{name}</a></button>
                  <p className="resource-desc">{description}</p>
                </div>
              ))}
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default Resource;
