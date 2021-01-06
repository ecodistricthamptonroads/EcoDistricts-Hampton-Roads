import { Component } from 'react';
import React from 'react';
import '../../assets/stylesheets/app.css';

import { Card } from 'react-bootstrap';
class Resource extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const RESOURCE_LINKS = [
      {
        link: 'https://www.google.con',
        name: 'Globe Observer',
        image: 'https://play-lh.googleusercontent.com/2iBA5BkZ6G7G5idLd5RhMGNW1aC0kQ-MIKWe75cM0ub8PxXhevfu1rJWOt4--wGalA=s180',
        description: 'GLOBE Observer invites you to make observations of the Earth around you. Observations you collect and submit with this app are designed to help scientists better understand satellite data collected by NASA from space. '
      },

      {
        link: 'https://www.google.con',
        name: 'Sea Level Rise App',
        image: 'https://i.imgur.com/ElWjENc.png'
      },
     
    ];
    const SECONDCHANCE_LINKS = [
      {
        link: 'thedreamcorps.org',
        name: 'The Dreamcorps',
        image: 'https://www.thedreamcorps.org/wp-content/themes/dreamcorps/dist/images/logo_7c9a110c.svg'
      },
      {
        link: 'https://www.google.con',
        name: 'Resource2',
        image: 'https://i.imgur.com/ElWjENc.png'
      },
      {
        link: 'https://www.google.con',
        name: 'Resource3',
        image: 'https://i.imgur.com/ElWjENc.png'
      }
    ];
    return (
      <div className="Resource-container">
        <h1 className="Resource-Heading">Resources</h1>
        <div className="Resource-body">
          <div className="Resource-text">
            Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus dapibus metus sit amet turpis finibus semper. Praesent eu
            tortor tortor.
          </div>
          <br />
          <div className="Resource-gallery">
            <div className="Resource-Heading">Apps</div>
            <div className="Resource-Grid row ">
              {RESOURCE_LINKS.map(({ name, link, image, description }) => (
                <a className="col-md-4 col-sm-12" key={name} href={link}>
                  <Card className="Resource-card">
                    <div className="card-heading">
                      <Card.Img
                        className="Resource-img"
                        variant="top"
                        src={image}
                      />
                      <Card.Title>{name}</Card.Title>
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
            <h1 className="Resource-Heading">Second Chance Resources</h1>
            <div className="Resource-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <ul>
              {SECONDCHANCE_LINKS.map(({ name, link }) => (
                <li key={name}>
                  <a className="Resource-list" href={link}>{name}</a>
                </li>
              ))}
            </ul>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default Resource;
