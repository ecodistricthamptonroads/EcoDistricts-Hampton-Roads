import { Component } from 'react';
import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import '../../assets/stylesheets/ProjectPage.css';

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.location;
    this.idx = parseInt(this.state.pathname.substr(9));
  }
  render() {
    return (
      <div className="project-page">
        <div className=" project-heading">
          <div>
            <h1>{this.state.state[this.idx].title}</h1>
            <h2>Start Date: {new Intl.DateTimeFormat("en-US", {
              year: "numeric", 
              month: "long", 
              day: "2-digit"
            }).format(new Date(this.state.state[this.idx].startDate))}</h2>
          </div>
        </div>
        <div className="project-row our-goal">
          <h1>Our goal</h1>
          <p>{this.state.state[this.idx].Goal}
          </p>
        </div>
        <div className="project-row">
          <img className="project-img-gal" />
        </div>
        <div className="project-row potential-outcomes">
          <h1>Potential Outcomes</h1>
          <p>{this.state.state[this.idx].potentialOutcomes}
          </p>
        </div>
        <div className="project-row meet-team">
          <h1>Meet the Team!</h1>
        </div>
        <div className="project-row team">
          <div className="col ">
            <img className="team-leader-img" />
            <h2>Team Lead: {this.state.state[this.idx].teamLead}</h2>
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
