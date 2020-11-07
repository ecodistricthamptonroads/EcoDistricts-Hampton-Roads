import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import axios from 'axios';
import AddJob from './AddJob';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import '../../../public/app.css';
class EducationJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentJob: null,
      jobs: []
    };
  }
  render() {
    return (
      <div className="col-sm-10 offset-md-1">
        <Jobs loggedIn={this.props} />
      </div>
    );
  }
}

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      salary: 0,
      industry: '',
      location: '',
      location: '',
      jobs: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value.toLowerCase() });
  }

  handleSearch(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value.toLowerCase() });
  }

  componentDidMount() {
    axios.get('/api/job/').then(jobs => {
      this.setState({ jobs: jobs.data });
    });
  }

  adminDeleteJob(job) {
    if (this.props.loggedIn) {
      let newJobs = this.state.jobs.slice();
      let index = newJobs.indexOf(job);
      newJobs.splice(index, 1);
      return (
        <Button
          className="delete-job-btn"
          variant="danger"
          onClick={() => {
            this.setState({ jobs: newJobs });
            axios.delete('/api/job/' + job._id);
          }}
        >
          Delete
        </Button>
      );
    }
  }
  filterJob(job) {
    return (
      (job.title && job.title.toLowerCase().includes(this.state.search)) ||
      (job.description &&
        job.description.toLowerCase().includes(this.state.search) &&
        job.salary >= this.state.salary &&
        job.industry.toLowerCase().includes(this.state.industry) &&
        job.location.toLowerCase().includes(this.state.location))
    );
  }
  displayJobs() {
    return (
      <div className="jobs d-flex flex-row flex-nowrap overflow-auto">
        {this.state.jobs
          .filter(job => this.filterJob(job))
          .map(job => {
            return (
              <Card
                key={job._id}
                className="job-elem card card-block mx-1"
                style={{ minWidth: '18rem' }}
                onClick={() =>
                  this.props.loggedIn.history.push('/jobs/' + job._id)
                }
              >
                <Card.Img
                  variant="top"
                  src="https://brands-cdn.employbridge.com/content/assets/news//40169262_14124173_Large.jpg"
                />
                <Card.Body>
                  <Card.Title>{job.title} </Card.Title>
                  <Card.Text>{'@  ' + job.company} </Card.Text>
                  <Card.Text>{'$  ' + job.salary} </Card.Text>

                  {this.adminDeleteJob(job)}
                </Card.Body>
              </Card>
            );
          })}
      </div>
    );
  }

  addJob() {
    return (
      <AddJob
        newJob={newJob => {
          var newJobs = this.state.jobs.slice();
          newJobs.push(newJob);
          this.setState({ jobs: newJobs });
        }}
      />
    );
  }

  getSearch() {
    return (
      <Form onSubmit={this.handleSearch}>
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
    );
  }
  render() {
    let addJob = null;

    if (this.props.loggedIn.loggedIn) {
      addJob = this.addJob();
    }
    return (
      <div>
        <div
          className="Job-Heading"
          style={{ textAlign: 'left', fontSize: '22px' }}
        >
          <h1> Open Positions</h1>
        </div>
        {addJob}
        {this.getSearch()}
        {this.displayJobs()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.login.user
  };
};

export default connect(mapStateToProps)(EducationJobs);
