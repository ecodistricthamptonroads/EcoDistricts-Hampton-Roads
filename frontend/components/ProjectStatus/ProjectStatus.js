import { Component } from 'react';
import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { addProject, deleteProject, getProjects, updateProject } from "../../actions";
import { connect } from 'react-redux';

class ProjectStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    let issue = {
      title: this.state.title,
      link: this.state.link,
      status: this.state.status
    };
    this.props.addProject(issue);
    this.setState({
      title: '',
      link: '',
      status: ''
    });
  }
  handleSubmit1(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  search(item) {
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
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                type="text"
                placeholder="Title"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput4">
              <Form.Label>Link</Form.Label>
              <Form.Control
                name="link"
                value={this.state.link}
                onChange={this.handleChange}
                type="text"
                placeholder="Link"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>Status</Form.Label>
              <Form.Control
                name="status"
                value={this.state.status}
                onChange={this.handleChange}
                type="Description"
                placeholder="Status"
              />
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

  render() {
    return (
      <div>
        {this.loggedIn()}
        <br />
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
        <br />
        <Table>
          <thead>
            <tr>
              <th> Project Name </th>
              <th> Status </th>
              {this.props.loggedIn ? <th> Delete? </th> : null}
            </tr>
          </thead>
          <tbody>
            {this.props.projects
              .filter(project => this.search(project.title))
              .map(project => {
                let a = '';
                if (project.link === '') {
                  a = <td>{project.title} </td>;
                } else {
                  a = (
                    <td>
                      {' '}
                      <a href={project.link}>{project.title}</a>{' '}
                    </td>
                  );
                }
                return (
                  <tr>
                    {a}
                    <td>
                      <form onSubmit={(e) =>{e.preventDefault(); this.props.updateProject(project)}}>
                        <input name="status" defaultValue={project.status} onChange={(e) => project.status = e.target.value}/>
                        <input type="submit" value="Submit"/>
                      </form>
                     </td>
                    {this.props.loggedIn ? <td><button onClick={() => this.props.deleteProject(project)}>Delete</button></td> : null}
                  </tr>
                );
              })}
          </tbody>
        </Table>
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
