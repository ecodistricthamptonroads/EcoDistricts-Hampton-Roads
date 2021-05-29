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
          // backgroundImage: `url(${getSpecificImage(this.curProject.projectImages[0])})`
        }}>
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
            <Carousel>
              {/* {this.curProject.projectImages.length != 0 ? (this.curProject.projectImages.map((image, idx) => ( */}
                <Carousel.Item>
                  <div className="project-img-gal" style={{
                    // backgroundImage: `url(${getSpecificImage(image)})`,
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
            List of rest of team: {
              // this.curProject.otherMembers.split(",").map((indivMember) => {
              //   return(
              //     <p>{indivMember.trim()}</p>
              //   )
              // })
            }
          </p>
        </div>
      </div>
    );
  }
}
export default ProjectPage;
