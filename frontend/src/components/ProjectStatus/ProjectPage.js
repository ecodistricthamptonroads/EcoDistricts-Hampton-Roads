import { Component } from "react";
import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "../../assets/stylesheets/ProjectPage.css";
import ReactMarkdown from "react-markdown";
import { getProject } from "../../helpers/api";
class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Warfield Canal Project",
      subtitle: "Start Date: Oct 30,2020",
      goal:
        "The initial aims of the proposed Warfield Canal project submitted\
         included chemical analysis, contamination assessment and evaluation,\
         community planning for restoration, clean up and beautification,\
         resource access and enhancement ( example ( a walkable pathway) and\
         designation as a potential Bird Estuary and Conservation Area ( due\
         to current bird habitat)",
      outcome:
        " Potential Outcomes of the Project; (1) clean up, beautification and\
        restoration of the canal waterway and boundary area (2) pollution\
        prevention from stormwater and homeowner yard discharge (3)\
        elimination of a potential Environmental Justice issues and health\
        hazard (4) additional funding from Federal and State sources for\
        similar projects and further enhancement; (5) designation as a Bird\
        Sanctuary or Conservation area.",
      team:
        "List of rest of team: \n\
        Onson Sweemey \n\
        Rey Mcsriff \n Mario Mcalwain \n\
        Raul Chamgerlain \n Kevin Nogilny \n\
        Jeromy Gridean \n Shown Furcom \n Mike Truk \n\
        Tim Sandaelem \n\
        Todd Bonzales",
    };
  }
  componentDidMount() {
    // console.log(this.props.news);
    // this.this.props.match.params.id;
    getProject(this.props.match.params.id).then((res) => {
      this.setState(res.data);
    });
  }
  render() {
    return (
      <div className="project-page">
        <div className=" project-heading">
          <div>
            <h1>{this.state.title}</h1>
            <h2>{this.state.subtitle}</h2>
          </div>
        </div>
        <div className="project-row our-goal">
          <h1>Our goal</h1>
          <ReactMarkdown allowDangerousHtml={true} children={this.state.goal} />
        </div>
        <div className="project-row">
          <img className="project-img-gal" />
        </div>
        <div className="project-row potential-outcomes">
          <h1>Potential Outcomes</h1>
          <ReactMarkdown
            allowDangerousHtml={true}
            children={this.state.outcome}
          />
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
          <ReactMarkdown
            allowDangerousHtml
            className="col"
            source={this.state.team}
          />
        </div>
      </div>
    );
  }
}
export default ProjectPage;
