import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import '../../assets/stylesheets/ProjectPage.css';

class ProjectPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="project-page">
        <div className=" project-heading">
          <div>
            <h1>Warfield Canal Project</h1>
            <h2>Start Date: Oct 30,2020</h2>
          </div>
        </div>
        <div className="project-row our-goal">
          <h1>Our goal</h1>
          <p>
            The initial aims of the proposed Warfield Canal project submitted
            included chemical analysis, contamination assessment and evaluation,
            community planning for restoration, clean up and beautification,
            resource access and enhancement ( example ( a walkable pathway) and
            designation as a potential Bird Estuary and Conservation Area ( due
            to current bird habitat)
          </p>
        </div>
        <div className="project-row">
          <img className="project-img-gal" />
        </div>
        <div className="project-row potential-outcomes">
          <h1>Potential Outcomes</h1>
          <p>
            Potential Outcomes of the Project; (1) clean up, beautification and
            restoration of the canal waterway and boundary area (2) pollution
            prevention from stormwater and homeowner yard discharge (3)
            elimination of a potential Environmental Justice issues and health
            hazard (4) additional funding from Federal and State sources for
            similar projects and further enhancement; (5) disignation as a Bird
            Sanctuary or Conservation area.
          </p>
        </div>
        <div className="">
          <div className="programs">
            <h2>More Info on similar programs</h2>
          </div>
          <div className="button-row">
            <Button>Planet Stewardship Project</Button>
            <Button>Weather Ready Nation Program</Button>
          </div>
        </div>
        <div className="project-row meet-team">
          <h1>Meet the Team!</h1>
        </div>
        <div className="project-row team">
          <div className="col ">
            <img className="team-leader-img" />
            <h2>Team Lead</h2>
          </div>
          <p className="col">
            List of rest of team: <br />
            Onson Sweemey <br />
            Rey Mcsriff <br /> Mario Mcalwain <br />
            Raul Chamgerlain <br /> Kevin Nogilny <br />
            Jeromy Gridean <br /> Shown Furcom <br /> Mike Truk <br />
            Tim Sandaelem <br />
            Todd Bonzales
          </p>
        </div>
      </div>
    );
  }
}
export default ProjectPage;
