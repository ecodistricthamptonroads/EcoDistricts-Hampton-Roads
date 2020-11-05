import { Component } from 'react';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {
  addProject,
  deleteProject,
  getProjects,
  updateProject
} from '../../actions';
import { connect } from 'react-redux';

class ProjectStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notInitial: false,
      search: '',
      title: '',
      link: '',
      status: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
  }

  componentDidMount() {
    this.props.getProjects();
  }

  validateFields() {
    this.setState({ notInitial: true });
    return this.validateTitle() && this.validateLink() && this.validateStatus();
  }

  validateTitle() {
    return this.state.title != '';
  }

  validateLink() {
    var reg = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    return reg.test(this.state.link);
  }

  validateStatus() {
    return this.state.status != '';
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();

    if (this.validateFields()) {
      let issue = {
        title: this.state.title,
        link: this.state.link,
        status: this.state.status
      };
      this.props.addProject(issue);
      this.setState({
        notInitial: false,
        title: '',
        link: '',
        status: ''
      });
    }
  }
  handleSubmit1(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  search(item) {
    item = item || '';
    const lc = item.toLowerCase();
    const filter = this.state.search.toLowerCase();
    return lc.includes(filter);
  }

  loggedIn() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                type="text"
                placeholder="Enter Project Name"
                isInvalid={this.state.notInitial && !this.validateTitle()}
              />
              <Form.Control.Feedback type="invalid">
                Please include a title
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput4">
              <Form.Label>Link</Form.Label>
              <Form.Control
                name="link"
                value={this.state.link}
                onChange={this.handleChange}
                type="text"
                placeholder="Enter Project Link"
                isInvalid={this.state.notInitial && !this.validateLink()}
              />
              <Form.Control.Feedback type="invalid">
                Please include a valid url link starting with http
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>Status</Form.Label>
              <Form.Control
                name="status"
                value={this.state.status}
                onChange={this.handleChange}
                type="Description"
                placeholder="Enter Project Status"
                isInvalid={this.state.notInitial && !this.validateStatus()}
              />
              <Form.Control.Feedback type="invalid">
                Please include a project status
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
          <button
            variant="primary"
            type="submit"
            value="submit"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </div>
      );
    }
  }
  getSearch() {
    return (
      <div className="Project-Search-Bar">
        <Form onSubmit={this.handleSubmit1}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control
              name="search"
              value={this.state.search}
              onChange={this.handleChange}
              type="text"
              placeholder="Search"
            />
          </Form.Group>
        </Form>
      </div>
    );
  }

  getProjectList() {
    return (
      <div className="ProjectList">
        {this.props.projects
          .filter(project => this.search(project.title))
          .map(project => {
            let card = (
              <a href={project.link}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img
                    variant="top"
                    src="https://ffipractitioner.org/wp-content/uploads/2014/11/ffi-working-together.jpg"
                  />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.status}</Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </a>
            );

            return (
              <div className="Project-elem">
                {card}
                {this.props.loggedIn ? (
                  <div>
                    <form
                      onSubmit={e => {
                        e.preventDefault();
                        this.props.updateProject(project);
                      }}
                    >
                      <input
                        name="status"
                        defaultValue={project.status}
                        onChange={e => (project.status = e.target.value)}
                      />
                      <input type="submit" value="Update" />
                    </form>
                    <button onClick={() => this.props.deleteProject(project)}>
                      Delete
                    </button>
                  </div>
                ) : null}
              </div>
            );
          })}
      </div>
    );
  }
  render() {
    return (
      <div className="Project-body col-sm-10 offset-md-1">
        {this.loggedIn()}
        <br />
        {this.getSearch()}
        <br />
        {this.getProjectList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.project.projects,
    loggedIn: state.login.user
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    addProject: addProject,
    getProjects: getProjects,
    deleteProject: deleteProject,
    updateProject: updateProject
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ProjectStatus);
