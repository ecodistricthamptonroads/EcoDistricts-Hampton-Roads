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
    return <Jobs parentProps={this.props} />;
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
      company: '',
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
    if (this.props.parentProps.loggedIn) {
      let newJobs = this.state.jobs.slice();
      let index = newJobs.indexOf(job);
      newJobs.splice(index, 1);
      return (
        <Button
          className="delete-job-btn"
          variant="danger"
          onClick={e => {
            e.stopPropagation();
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
    let value =
      job.title && job.title.toLowerCase().includes(this.state.search);
    value =
      value ||
      (job.description &&
        job.description.toLowerCase().includes(this.state.search));
    value = value && job.salary >= this.state.salary;
    value = value && job.industry.toLowerCase().includes(this.state.industry);
    value = value && job.location.toLowerCase().includes(this.state.location);
    value = value && (this.props.parentProps.loggedIn || !job.draft);
    return value;
  }
  displayJobs() {
    return (
      <div className="jobs row ">
        {this.state.jobs
          .filter(job => this.filterJob(job))
          .map(job => {
            return (
              <Card
                key={job._id}
                className="job-elem col-xs-7 col-sm-6 col-lg-4"
                onClick={() =>
                  this.props.parentProps.history.push('/jobs/' + job._id)
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

                  {this.props.parentProps.loggedIn ? (
                    <Card.Text>Draft</Card.Text>
                  ) : null}

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
      <Form className="Job-search" onSubmit={this.handleSearch}>
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
  displayFilters() {
    let filteredJobs = this.state.jobs.filter(job => this.filterJob(job));
    let locations = [...new Set(filteredJobs.map(job => job.location))].sort();
    let salaries = [
      ...new Set(filteredJobs.map(job => parseInt(job.salary)))
    ].sort(function(a, b) {
      return a - b;
    });
    let industries = [...new Set(filteredJobs.map(job => job.industry))].sort();
    // let locations = [...new Set(this.state.jobs.map((job) => job.location))];
    return (
      <div className="grid-child job-filter-box ">
        {locations.length != 0 ? (
          <div className="location-checkbox">
            <u>Locations:</u>
            <div
              key="AllLocations"
              className="form-check col form-check-inline"
            >
              <input
                className="form-check-input"
                id="AllLocation"
                type="radio"
                name="location"
                defaultChecked={true}
                value=""
                onClick={this.handleChange}
              />
              <label className="form-check-label" htmlFor="AllLocation">
                All Locations
              </label>
            </div>
            {locations.map((location_name, idx) => {
              return (
                <div
                  key={location_name}
                  className="form-check col form-check-inline"
                >
                  <input
                    className="form-check-input"
                    id={location_name + idx}
                    type="radio"
                    name="location"
                    value={location_name}
                    onClick={this.handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={location_name + idx}
                  >
                    {location_name.toUpperCase()}
                  </label>
                </div>
              );
            })}
          </div>
        ) : null}

        {salaries.length != 0 ? (
          <div className="location-checkbox">
            <u>Salaries:</u>
            <div key="AllSalaries" className="form-check col form-check-inline">
              <input
                className="form-check-input"
                id="AllSalaries"
                type="radio"
                name="salary"
                value={0}
                defaultChecked={true}
                onClick={this.handleChange}
              />
              <label className="form-check-label" htmlFor="AllSalaries">
                All Salaries
              </label>
            </div>
            {salaries.map((salary_value, idx) => {
              return (
                <div
                  key={salary_value}
                  className="form-check col form-check-inline"
                >
                  <input
                    className="form-check-input"
                    id={salary_value + idx}
                    type="radio"
                    name="salary"
                    value={salary_value}
                    onClick={this.handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={salary_value + idx}
                  >
                    {salary_value + '+'}
                  </label>
                </div>
              );
            })}
          </div>
        ) : null}

        {industries.length != 0 ? (
          <div className="location-checkbox">
            <u>Industries:</u>
            <div
              key="AllIndustries"
              className="form-check col form-check-inline"
            >
              <input
                className="form-check-input"
                id="AllIndustries"
                type="radio"
                name="industry"
                defaultChecked={true}
                value=""
                onClick={this.handleChange}
              />
              <label className="form-check-label" htmlFor="AllIndustries">
                All Industries{' '}
              </label>
            </div>
            {industries.map((industry_name, idx) => {
              return (
                <div
                  key={industry_name}
                  className="form-check col form-check-inline"
                >
                  <input
                    className="form-check-input"
                    id={industry_name + idx}
                    type="radio"
                    name="industry"
                    value={industry_name}
                    onClick={this.handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={industry_name + idx}
                  >
                    {industry_name}
                  </label>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
  render() {
    return (
      <div className="job-body">
        <div
          className="Job-Heading"
          style={{ textAlign: 'left', fontSize: '22px' }}
        >
          <h1> Open Positions</h1>
        </div>
        {this.props.parentProps.loggedIn ? this.addJob() : null}
        {this.getSearch()}
        <div className="grid-container">
          {this.displayFilters()}
          {this.displayJobs()}
        </div>
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
