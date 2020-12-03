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
        name: 'google',
        image: 'https://i.imgur.com/ElWjENc.png'
      },
      {
        link: 'https://www.google.con',
        name: 'google1',
        image: 'https://i.imgur.com/ElWjENc.png'
      },
      {
        link: 'https://www.google.con',
        name: 'google2',
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
          <div className="Resource-row">
            <h1 className="Resource-Heading">Second Chance Resources</h1>
            <div className="Resource-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <ul>
              {RESOURCE_LINKS.map(({ name, link }) => (
                <li key={name}>
                  <a href={link}>{name}</a>
                </li>
              ))}
            </ul>
          </div>
          <br />
          <div className="Resource-gallery">
            <div className="Resource-Heading">Apps</div>
            <div className="Resource-grid row ">
              {RESOURCE_LINKS.map(({ name, link, image }) => (
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resource;
