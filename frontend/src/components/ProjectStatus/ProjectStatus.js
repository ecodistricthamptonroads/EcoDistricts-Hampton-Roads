import { Component } from "react";
import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { getProjects } from "../../helpers/api";
import { getSpecificImage } from '../../helpers/api';
import WarfieldCanalProject from "../../assets/images/WarfieldCanalProject.jpg";
import WhatWeDo from "../../assets/images/what_we_do.jpg";

class ProjectStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notInitial: false,
      search: "",
      projects: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
  }

  componentDidMount() {
    getProjects().then((req) => {
      this.setState({ projects: req.data });
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit1(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  // Search functionality was partly implemented, but was put on hold. May not be necessary.
  search(item) {
    item = item || "";
    const lc = item.toLowerCase();
    const filter = this.state.search.toLowerCase();
    return lc.includes(filter);
  }

  getSearch() {
    return (
      <div
        className="Project-Search-Bar"
        // style={{
        //   backgroundImage: `url(${WhatWeDo})`,
          
        //   'linear-gradient(rgba(0, 0, 0, 0.5),
        //                rgba(0, 0, 0, 0.5)), url("url_of_image"))'
        // }}
      >
        <div className="Project-heading">
          <h1 Style="color: white; font-weight: bold;">Our Projects</h1>
          {/* <Form onSubmit={this.handleSubmit1}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                name="search"
                value={this.state.search}
                onChange={this.handleChange}
                type="text"
                placeholder="Search"
              />
            </Form.Group>
          </Form> */}
        </div>
      </div>
    );
  }

  getProjectList() {
    return (
      <div className="row ProjectList align-items-center ">
        {
          // Lists all projects on the page
          this.state.projects
          .filter((project) => this.search(project.projectName))
          .map((project, idx) => {
            return (
              <div
                key={project.projectName + idx}
                className="col-12 col-sm-6 col-md-4 card-project"
              >
                <Card
                  // Takes you to the page for the individual project (ProjectPage.js)
                  // Sends the data that corresponds to the project so that it displays correctly
                  onClick={() => {
                    this.props.history.push({
                      pathname: "/Project/" + idx,
                      state: this.state.projects
                    });
                  }}
                  style={{ width: "18rem" }}
                >
                  <Card.Title style={{ fontWeight: 500 }}>
                    {project.projectName}
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    onError={(e) => {
                      // Uses a default image (WarfieldCanalProject) if we encounter an error in loading
                      // the image that corresponds to the project 
                      e.target.src = WarfieldCanalProject;
                    }}
                    src={getSpecificImage("medium", project.projectImages[0]) || WarfieldCanalProject}
                  />
                  <Card.Body>
                    <Card.Text style={{ fontWeight: 400 }}>
                      {project.goal}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
      </div>
    );
  }
  render() {
    return (
      <div className="Project-body ">
        {this.getSearch()}
        <h2 className="project-text-info">
          In order to help the community, Eco Districts Hampton Roads conducts
          multiple projects done by volunteers in order to fix various problems
          identified by residents.
        </h2>
        {console.log(this.state.projects)}
        {this.getProjectList()}
      </div>
    );
  }
}

export default ProjectStatus;
