import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import axios from 'axios';
import AddJob from './AddJob';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import '../../assets/stylesheets/JobsPage.css';
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
      industry: [],
      location: [],
      jobTypes: [],
      careers: [],
      location: [],
      // what is this VV
      company: '',
      jobs: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleCheckboxLocation = this.handleCheckboxLocation.bind(this);
    this.handleCheckboxIndustry = this.handleCheckboxIndustry.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleCheckboxJobType = this.handleCheckboxJobType.bind(this);
    this.handleCheckboxCareer = this.handleCheckboxCareer.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value.toLowerCase() });
  }
  handleChangeNumber(e) {
    this.setState({ [e.target.name]: parseInt(e.target.value.toLowerCase()) });
  }
  handleCheckboxLocation(e) {
    const location_name = e.target.value.toLowerCase();
    if (this.state.location.includes(location_name)) {
      var newLocation = [
        ...this.state.location.filter(
          location => !location.includes(location_name)
        )
      ];
    } else {
      var newLocation = [...this.state.location, location_name];
    }
    this.setState({ location: newLocation });
  }
  handleCheckboxIndustry(e) {
    const industry_name = e.target.value.toLowerCase();
    if (this.state.industry.includes(industry_name)) {
      var newIndustry = [
        ...this.state.industry.filter(
          industry => !industry.includes(industry_name)
        )
      ];
    } else {
      var newIndustry = [...this.state.industry, industry_name];
    }
    this.setState({ industry: newIndustry });
  }
  handleCheckboxJobType(e) {
    const jobType_value = e.target.value.toLowerCase();
    if (this.state.jobTypes.includes(jobType_value)) {
      var newJobType = [
        ...this.state.jobTypes.filter(
          jobType => !jobType.includes(jobType_value)
        )
      ];
    } else {
      var newJobType = [...this.state.jobTypes, jobType_value];
    }
    this.setState({ jobTypes: newJobType });
  }
  handleCheckboxCareer(e) {
    const career_value = e.target.value.toLowerCase();
    if (this.state.careers.includes(career_value)) {
      var newJobType = [
        ...this.state.careers.filter(career => !career.includes(career_value))
      ];
    } else {
      var newJobType = [...this.state.careers, career_value];
    }
    this.setState({ careers: newJobType });
  }
  handleCheckboxLocation(e) {
    const location_name = e.target.value.toLowerCase();
    if (this.state.location.includes(location_name)) {
      var newLocation = [
        ...this.state.location.filter(
          location => !location.includes(location_name)
        )
      ];
    } else {
      var newLocation = [...this.state.location, location_name];
    }
    this.setState({ location: newLocation });
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

  deleteJob(job) {
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
            e.preventDefault();
            this.setState({ jobs: newJobs });
            axios.delete('/api/job/' + job._id);
          }}
        >
          Delete
        </Button>
      );
    }
  }
  _getDateFormatted(date) {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];

    var mm = date.getMonth();
    var dd = date.getDate();
    date.get;

    return [monthNames[mm], (dd > 9 ? '' : '0') + dd, date.getFullYear()].join(
      '-'
    );
  }
  _jobsIndustryIsChecked(job) {
    return (
      this.state.industry.length == 0 ||
      this.state.industry.includes(job.industry.toLowerCase())
    );
  }
  _jobsTypeIsChecked(job) {
    return (
      this.state.jobTypes.length == 0 ||
      this.state.jobTypes.includes(job.jobType.toLowerCase())
    );
  }
  _jobsLocationIsChecked(job) {
    return (
      this.state.location.length == 0 ||
      this.state.location.includes(job.location.toLowerCase())
    );
  }
  _jobsCareerIsChecked(job) {
    return (
      this.state.careers.length == 0 ||
      this.state.careers.includes(job.career.toLowerCase())
    );
  }
  filterJob(job) {
    let search_filter_contains =
      job.title && job.title.toLowerCase().includes(this.state.search);
    search_filter_contains =
      search_filter_contains ||
      (job.description &&
        job.description.toLowerCase().includes(this.state.search));

    return (
      search_filter_contains &&
      this._jobsIndustryIsChecked(job) &&
      this._jobsLocationIsChecked(job) &&
      this._jobsTypeIsChecked(job) &&
      this._jobsCareerIsChecked(job) &&
      job.salary >= this.state.salary &&
      (this.props.parentProps.loggedIn || !job.draft)
    );
  }
  displayJobs() {
    const JOBS_TO_SHOW = this.state.jobs.filter(job => this.filterJob(job));
    return (
      <div className="jobs card-columns ">
        {JOBS_TO_SHOW.length != 0 ? (
          JOBS_TO_SHOW.map(job => {
            return (
              <a key={job._id} href={job._id}>
                <Card className="job-elem col-4" style={{ maxWidth: '36rem' }}>
                  <div className="job-card-row">
                    <Card.Img
                      className="job-card-img"
                      variant="top"
                      src="https://brands-cdn.employbridge.com/content/assets/news//40169262_14124173_Large.jpg"
                    />
                    <Card.Title
                      style={{
                        padding: '5%',
                        textOverflow: 'clip',
                        overflowWrap: 'break-word',
                        width: '50%'
                      }}
                    >
                      {job.title || ''}
                    </Card.Title>
                  </div>
                  <hr />
                  <Card.Body>
                    <Card.Text>
                      {'Posted on ' +
                        this._getDateFormatted(new Date(job.postDate))}
                    </Card.Text>
                    <Card.Text>{'@  ' + (job.company || '')} </Card.Text>
                    <Card.Text>{'$  ' + (job.salary || '')} </Card.Text>
                    <Card.Text>{'📍 ' + (job.location || '')} </Card.Text>

                    <hr />
                    <div
                      className="job-card-row flex-center "
                      style={{ padding: '5%' }}
                    >
                      {this.props.parentProps.loggedIn && job.draft ? (
                        <Button
                          onClick={e => {
                            e.stopPropagation();
                            e.preventDefault();
                            job.draft = false;
                            axios
                              .put('/api/job/', job)
                              .then(res => {
                                const new_job = res.data;
                                let newJobs = this.state.jobs.slice();
                                let index = newJobs.indexOf(job);
                                newJobs[index] = new_job;

                                this.setState({ jobs: newJobs });
                              })
                              .catch(err => {
                                console.error(err);
                              });
                          }}
                          className="btn-info btn"
                        >
                          📰Draft➡Publish📢
                        </Button>
                      ) : null}
                      <Button
                        onClick={e => {
                          e.preventDefault();
                          window.location.href = job.link;
                        }}
                      >
                        Apply
                      </Button>
                      {this.deleteJob(job)}
                    </div>
                  </Card.Body>
                </Card>
              </a>
            );
          })
        ) : (
          <div>
            <div className="marquee">
              <h1>Didn't find any Jobs :(</h1>
            </div>
            <div className="marquee">
              <h1>Didn't find any Jobs :(</h1>
            </div>
            <div className="marquee">
              <h1>Didn't find any Jobs :(</h1>
            </div>
          </div>
        )}
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
    let filteredJobs = this.state.jobs.filter(
      job => this.props.parentProps.loggedIn || !job.draft
    );
    const locations = [
      ...new Set(filteredJobs.map(job => job.location))
    ].sort();
    const salaries = [
      ...new Set(filteredJobs.map(job => parseInt(job.salary)))
    ].sort(function(a, b) {
      return a - b;
    });
    const industries = [
      ...new Set(filteredJobs.map(job => job.industry))
    ].sort();
    const careers = [...new Set(filteredJobs.map(job => job.career))].sort();
    const jobTypes = [...new Set(filteredJobs.map(job => job.jobType))].sort();
    console.log(filteredJobs);
    return (
      <div className="grid-child job-filter-box ">
        {locations.length != 0 ? (
          <div className="location-checkboxes row">
            <u className="col">Locations:</u>
            <div className="col checkbox-options">
              {locations.map((location_name, idx) => {
                return (
                  <div
                    key={location_name}
                    className="form-check col form-check-inline"
                  >
                    <input
                      className="form-check-input location-checkbox"
                      id={location_name + idx}
                      type="checkbox"
                      name="location"
                      value={location_name}
                      onClick={this.handleCheckboxLocation}
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
            <Button
              className="col-1"
              bsPrefix="job-btn"
              onClick={e => {
                this.setState({ location: [] });
                Array.from(
                  document.getElementsByClassName('location-checkbox')
                ).map(checkbox => (checkbox.checked = false));
              }}
            >
              Clear All
            </Button>
          </div>
        ) : null}

        {salaries.length != 0 ? (
          <div className="salary-checkboxes row">
            <u className="col">Salaries:</u>
            <div className="col checkbox-options">
              {salaries.map((salary_value, idx) => {
                return (
                  <div
                    key={salary_value}
                    className="form-check col form-check-inline salary-checkbox"
                  >
                    <input
                      className="form-check-input"
                      id={salary_value + idx}
                      type="radio"
                      name="salary"
                      value={salary_value}
                      onClick={this.handleChangeNumber}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={salary_value + idx}
                    >
                      {'$' + salary_value + '+'}
                    </label>
                  </div>
                );
              })}
            </div>
            <div
              key="AllSalaries"
              className="col-1 form-check form-check-inline"
            >
              <input
                className="form-check-input salary-checkbox"
                id="AllSalaries"
                type="radio"
                name="salary"
                value={0}
                defaultChecked={true}
                onClick={this.handleChangeNumber}
              />
              <label className="form-check-label" htmlFor="AllSalaries">
                All Salaries
              </label>
            </div>
          </div>
        ) : null}
        {industries.length != 0 ? (
          <div className="industry-checkboxes row">
            <u className="col">Industries:</u>
            <div className="col checkbox-options">
              {industries.map((industry_name, idx) => {
                return (
                  <div
                    key={industry_name}
                    className="form-check col form-check-inline"
                  >
                    <input
                      className="form-check-input industry-checkbox"
                      id={industry_name + idx}
                      type="checkbox"
                      name="industry"
                      value={industry_name}
                      onClick={this.handleCheckboxIndustry}
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
            <Button
              className="col-1"
              bsPrefix="job-btn "
              onClick={e => {
                this.setState({ industry: [] });
                Array.from(
                  document.getElementsByClassName('industry-checkbox')
                ).map(checkbox => (checkbox.checked = false));
              }}
            >
              Clear All
            </Button>
          </div>
        ) : null}
        {careers.length != 0 ? (
          <div className="career-checkboxes row">
            <u className="col">Career Development Opportunities:</u>
            <div className="col checkbox-options">
              {careers.map((career, idx) => {
                return (
                  <div
                    key={career}
                    className="form-check col form-check-inline"
                  >
                    <input
                      className="form-check-input career-checkbox"
                      id={career + idx}
                      type="checkbox"
                      name="career"
                      value={career}
                      onClick={this.handleCheckboxCareer}
                    />
                    <label className="form-check-label" htmlFor={career + idx}>
                      {career.toUpperCase()}
                    </label>
                  </div>
                );
              })}
            </div>
            <Button
              className="col-1"
              bsPrefix="job-btn"
              onClick={e => {
                this.setState({ careers: [] });
                Array.from(
                  document.getElementsByClassName('career-checkbox')
                ).map(checkbox => (checkbox.checked = false));
              }}
            >
              Clear All
            </Button>
          </div>
        ) : null}
        {jobTypes.length != 0 ? (
          <div className="JobType-checkboxes row">
            <u className="col">Job Types:</u>
            <div className="col checkbox-options">
              {jobTypes.map((jobType, idx) => {
                return (
                  <div
                    key={jobType}
                    className="form-check col form-check-inline"
                  >
                    <input
                      className="form-check-input JobType-checkbox"
                      id={jobType + idx}
                      type="checkbox"
                      name="JobType"
                      value={jobType}
                      onClick={this.handleCheckboxJobType}
                    />
                    <label className="form-check-label" htmlFor={jobType + idx}>
                      {jobType.toUpperCase()}
                    </label>
                  </div>
                );
              })}
            </div>
            <Button
              className="col-1"
              bsPrefix="job-btn"
              onClick={e => {
                this.setState({ JobTypes: [] });
                Array.from(
                  document.getElementsByClassName('JobType-checkbox')
                ).map(checkbox => (checkbox.checked = false));
              }}
            >
              Clear All
            </Button>
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
          style={{ textAlign: 'left', fontSize: '64px' }}
        >
          <h1>Sustainable Jobs Center</h1>
          <a href="https://us4.list-manage.com/contact-form?u=51eb002c7ef49ac4bf7de17e2&form_id=c58d36b6f54bd9b975ec2607253190d2">
            <Button bsPrefix="job-btn">
              Are you an employer? To submit a job posting, click here.
            </Button>
          </a>
        </div>
        {this.props.parentProps.loggedIn ? this.addJob() : null}
        {this.getSearch()}
        <div className="job-container">
          {this.displayFilters()}
          {this.displayJobs()}
          <iframe
            src="https://calendar.google.com/calendar/embed?src=fgv68k6tk5ji5sr4jjiuc2q90k%40group.calendar.google.com&ctz=America%2FNew_York"
            style={{
              border: 0,
              width: '100%',
              height: '75vh',
              display: 'inline-flex'
            }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
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
