import { Component } from 'react';
import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import '../../assets/stylesheets/ProjectPage.css';
import { getSpecificImage } from '../../helpers/api';
import { Carousel } from "react-bootstrap";

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.location;
    this.idx = parseInt(this.state.pathname.substr(9));
    this.curProject = this.state.state[this.idx];
  }
  render() {
    return (
      <div className="project-page">
        <div className=" project-heading" style={{
          // Using the first image we have
          backgroundImage: `url(${getSpecificImage("large", this.curProject.projectImages[0])})`
        }}>
          <div>
            <h1>{this.curProject.projectName}</h1>
            <h2>Start Date: {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit"
            }).format(new Date(this.curProject.startDate))}</h2>
          </div>
        </div>
        <div className="project-row our-goal">
          <h1>Our goal</h1>
          <p>
          {this.curProject.goal}  
          </p>
        </div>
        <div className="project-row">
            <Carousel>
              {this.curProject.projectImages.length != 0 ? (this.curProject.projectImages.map((image, idx) => (
                <Carousel.Item>
                  <div className="project-img-gal" style={{
                    backgroundImage: `url(${getSpecificImage("medium", image)})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center"
                  }} />
                </Carousel.Item>
              ))) : <Carousel><Carousel.Item><p>No project images yet</p></Carousel.Item></Carousel>}
            </Carousel>
        </div>
        <div className="project-row potential-outcomes">
          <h1>Potential Outcomes</h1>
          <p>
            {this.curProject.potentialOutcomes}
          </p>
        </div>
        <div className="project-row meet-team">
          <h1>Meet the Team!</h1>
        </div>
        <div className="project-row team">
          <div className="col ">
            <img className="team-leader-img" 
              src={getSpecificImage("medium", this.curProject.teamLeaderImage)}
            />
            <h2>Team Lead: {this.curProject.teamLeader}</h2>
          </div>
          <p className="col">
            List of rest of team: {
              this.curProject.otherMembers.split(",").map((indivMember) => {
                return(
                  <p>{indivMember.trim()}</p>
                )
              })
            }
          </p>
        </div>
      </div>
    );
  }
}
export default ProjectPage;
