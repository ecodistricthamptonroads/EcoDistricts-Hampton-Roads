import { Component } from "react";
import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "../../assets/stylesheets/JobsPage.css";
import { getJobs } from "../../helpers/api";
class EducationJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentJob: null,
      jobs: [],
    };
  }
  render() {
    return <Jobs />;
  }
}

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      salary: 0,
      industry: [],
      location: [],
      jobTypes: [],
      careers: [],
      location: [],
      company: "",
      jobs: [],
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
          (location) => !location.includes(location_name)
        ),
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
          (industry) => !industry.includes(industry_name)
        ),
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
          (jobType) => !jobType.includes(jobType_value)
        ),
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
        ...this.state.careers.filter(
          (career) => !career.includes(career_value)
        ),
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
          (location) => !location.includes(location_name)
        ),
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
    getJobs().then((jobs) => {
      this.setState({ jobs: jobs.data });
      console.log(jobs.data);
    });
  }

  _getDateFormatted(date) {
    const monthNames = [
      "Jan.",
      "Feb.",
      "Mar.",
      "Apr.",
      "May.",
      "Jun.",
      "Jul.",
      "Aug.",
      "Sep.",
      "Oct.",
      "Nov.",
      "Dec.",
    ];

    var mm = date.getMonth();
    var dd = date.getDate();
    // date.get;

    return [monthNames[mm], (dd > 9 ? "" : "0") + dd].join(
      " "
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
      this.state.location.includes(job.location.toLowerCase()) ||
      // TODO: get rid of this hacky way
      this.state.location.includes("")
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
      job.salary >= this.state.salary
    );
  }
  displayJobs() {
    const JOBS_TO_SHOW = this.state.jobs.filter((job) => this.filterJob(job));
    return (
      <div className="jobs row card-columns ">
        {JOBS_TO_SHOW.length != 0 ? (
          JOBS_TO_SHOW.map((job) => {
            return (
              <a key={job._id} href={job._id}>
                <Card className="job-elem col-sm-12 col-lg-4"> {/* style={{ maxWidth: "36rem" }}*/}
                  <div className="job-card-row row">
                    <Card.Img
                      className="job-card-img col-5"
                      variant="top"
                      src="https://brands-cdn.employbridge.com/content/assets/news//40169262_14124173_Large.jpg"
                    />
                    <Card.Title className="col-7"
                      style={{
                        padding: "1em",
                        textOverflow: "clip",
                        overflowWrap: "break-word",
                        width: "50%",
                      }}
                    >
                      {job.title || ""}
                    </Card.Title>
                  </div>
                  <Card.Body>
                    <Card.Text>
                      {"Posted on " +
                        this._getDateFormatted(new Date(job.published_at))}
                    </Card.Text>
                    {/* <Card.Text>{"@ " + (job.company || "")} </Card.Text>
                    <Card.Text>{"$" + (job.salary || "")} </Card.Text> */}
                    <Card.Text>{"📍 " + (job.location || "")} </Card.Text>
                    <div
                      className="job-card-row flex-center "
                    >
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = job.link;
                        }}
                      >
                        Apply
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </a>
            );
          })
        ) : (
          <div>
            <div className="marquee">
              <h1>No jobs found</h1>
            </div>
            <div className="marquee">
              <h1>No jobs found</h1>
            </div>
            <div className="marquee">
              <h1>No jobs found</h1>
            </div>
          </div>
        )}
      </div>
    );
  }

  getSearch() {
    return (
      <Form className="Job-search row" onSubmit={this.handleSearch}>
        <Form.Group controlId="exampleForm.ControlInput1" className="col-9">
          <Form.Control
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
            type="text"
            placeholder="Search"
          />
        </Form.Group>
        <Form.Group className="col-3" controlId="Job Career">
          <Form.Control
            name="location"
            onChange={this.handleCheckboxLocation}
            as="select"
            placeholder="Select Job Career"
          >
            <option value="">All Locations</option>

            {[
              "Location 1",
              "Location 2",
              "Location 3",
              "Location 3",
              "Location 4",
              "Location 5",
              "Location 6",
            ].map((career) => (
              <option value={career}>{career}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }
  displayFilters() {
    let filteredJobs = this.state.jobs;
    // const locations = [
    //   ...new Set(filteredJobs.map(job => job.location))
    // ].sort();
    // const salaries = [
    //   ...new Set(filteredJobs.map(job => parseInt(job.salary)))
    // ].sort(function(a, b) {
    //   return a - b;
    // });
    // const industries = [
    //   ...new Set(filteredJobs.map((job) => job.industry)),
    // ].sort();
    // const careers = [...new Set(filteredJobs.map(job => job.career))].sort();
    // const jobTypes = [...new Set(filteredJobs.map(job => job.jobType))].sort();
    const jobTypes = [
      "Job type: 1",
      "Job type: 2",
      "Job type: 3",
      "Job type: 4",
      "Job type: 5",
      "Job type: 6",
    ];
    const industries = [
      "Industry type: 1",
      "Industry type: 2",
      "Industry type: 3",
      "Industry type: 4",
      "Industry type: 5",
      "Industry type: 6",
    ];
    return (
      <div className="grid-child job-filter-box ">
        {industries.length != 0 ? (
          <div className="industry-checkboxes row">
            <div className="col-3">
              <h3 className="row">Industry:</h3>
              <p className="row">Which Industry Jobs belong to.</p>
            </div>
            {/* <div className="row"></div> */}
            <div className="col-9 checkbox-options">
              {industries.map((industry_name, idx) => {
                return (
                  <div
                    key={industry_name}
                    className="form-check col-4  form-check-inline"
                  >
                    <input
                      className="form-check-input industry-checkbox"
                      id={industry_name + idx}
                      type="checkbox"
                      name="industry"
                      value={industry_name}
                      checked={true}
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
            {/* <Button
              className="col-1"
              bsPrefix="job-btn "
              onClick={(e) => {
                this.setState({ industry: [] });
                Array.from(
                  document.getElementsByClassName("industry-checkbox")
                ).map((checkbox) => (checkbox.checked = false));
              }}
            >
              Clear All
            </Button> */}
          </div>
        ) : null}

        {jobTypes.length != 0 ? (
          <div className="JobType-checkboxes row">
            <div className="col-3">
              <h3 className="row">Job Type:</h3>
              <h3 className="row">Paid opportunities' Type</h3>
            </div>
            <div className="col-9 checkbox-options">
              {jobTypes.map((jobType, idx) => {
                return (
                  <div
                    key={jobType}
                    className="form-check col-4 form-check-inline"
                  >
                    <input
                      className="form-check-input JobType-checkbox"
                      id={jobType + idx}
                      type="checkbox"
                      name="JobType"
                      value={jobType}
                      checked={true}
                      onClick={this.handleCheckboxJobType}
                    />
                    <label className="form-check-label" htmlFor={jobType + idx}>
                      {jobType}
                    </label>
                  </div>
                );
              })}
            </div>

            {/* <Button
              className="col-1"
              bsPrefix="job-btn"
              onClick={(e) => {
                this.setState({ JobTypes: [] });
                Array.from(
                  document.getElementsByClassName("JobType-checkbox")
                ).map((checkbox) => (checkbox.checked = false));
              }}
            >
              Clear All
            </Button> */}
          </div>
        ) : null}
      </div>
    );

    {
      /* {careers.length != 0 ? (
          <div className="career-checkboxes row">
            <div className="col">
              <h3 className="row">Career Development Opportunities:</h3>
              <p className="row">
                Develop your skills and get resources needed for your next job
              </p>
            </div>
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
        ) : null} */
    }
    {
      /* {locations.length != 0 ? (
          <div className="location-checkboxes row">
            <div className="col">
              <h3 className="row"> Locations:</h3>
              <p className="row">Location of the Jobs</p>
            </div>

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
        ) : null} */
    }

    {
      /* {salaries.length != 0 ? (
          <div className="salary-checkboxes row">
            <div className="col">
              <h3 className="row"> Salary:</h3>
              <p className="row"> Annual Salary of Job</p>
            </div>
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
        ) : null} */
    }
  }
  render() {
    return (
      <div className="job-body">
        <div
          className="Job-Heading"
          style={{ textAlign: "left", fontSize: "64px" }}
        >
          <h1>Sustainable Jobs Center</h1>
          <a href="https://us4.list-manage.com/contact-form?u=51eb002c7ef49ac4bf7de17e2&form_id=c58d36b6f54bd9b975ec2607253190d2">
            <Button bsPrefix="job-btn">
              Are you an employer? To submit a job posting, click here.
            </Button>
          </a>
        </div>
        {this.getSearch()}
        <div className="job-container">
          {this.displayFilters()}
          {this.displayJobs()}
          {/*<iframe
            src="https://calendar.google.com/calendar/embed?src=fgv68k6tk5ji5sr4jjiuc2q90k%40group.calendar.google.com&ctz=America%2FNew_York"
            style={{
              border: 0,
              width: "100%",
              height: "75vh",
              display: "inline-flex",
            }}
            frameBorder="0"
            scrolling="no"
          ></iframe>*/}
        </div>
      </div>
    );
  }
}

export default EducationJobs;
