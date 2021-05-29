import { Component } from "react";
import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Dropdown from "react-bootstrap/Dropdown";
import "../../assets/stylesheets/JobsPage.css";
import { getJobs, getJobParameters } from "../../helpers/api";
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
      jobTypes: [],
      opportunityTypes: [],
      industryTypes: [],
      location: [],
      possibleJobTypes: [],
      possibleOpportunityTypes: [],
      possibleIndustryTypes: [],
      company: "",
      useDefaultCheckJob: true,
      useDefaultCheckOpp: true,
      jobs: [],
      // jobs refers to all posts, including other opportunities
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    
    this.handleCheckboxJobType = this.handleCheckboxJobType.bind(this);
    this.handleCheckboxOpportunityType = this.handleCheckboxOpportunityType.bind(this);
    this.handleCheckboxIndustryType = this.handleCheckboxIndustryType.bind(this);
    this.handleCheckboxLocation = this.handleCheckboxLocation.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value.toLowerCase() });
  }
  handleSearch(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value.toLowerCase() });
  }
  handleChangeNumber(e) {
    this.setState({ [e.target.name]: parseInt(e.target.value.toLowerCase()) });
  }
  handleCheckboxJobType(e) {
    // const jobType_value = e.target.value.toLowerCase();
    const jobType_value = e.target.value;
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
  handleCheckboxOpportunityType(e) {
    // const oppType_value = e.target.value.toLowerCase();
    const oppType_value = e.target.value;
    if (this.state.opportunityTypes.includes(oppType_value)) {
      var newJobType = [
        ...this.state.opportunityTypes.filter(
          (jobType) => !jobType.includes(oppType_value)
        ),
      ];
    } else {
      var newJobType = [...this.state.opportunityTypes, oppType_value];
    }
    this.setState({ opportunityTypes: newJobType });
  }
  handleCheckboxIndustryType(e) {
    const industry_name = e.target.value.toLowerCase();
    if (this.state.industryTypes.includes(industry_name)) {
      var newIndustry = [
        ...this.state.industryTypes.filter(
          (industry) => !industry.includes(industry_name)
        ),
      ];
    } else {
      var newIndustry = [...this.state.industryTypes, industry_name];
    }
    this.setState({ industryTypes: newIndustry });
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

  componentDidMount() {
    getJobs().then((jobs) => {
      this.setState({ jobs: jobs.data });
    });

    getJobParameters().then((model) => {
      const schema = model.data.data.schema.attributes;
      this.setState({ 
        possibleJobTypes: schema.jobType.enum,
        possibleOpportunityTypes: schema.opportunityType.enum,
        jobTypes: schema.jobType.enum,
        opportunityTypes: schema.opportunityType.enum });
    });
  }

  _getDateFormatted(date) {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    var mm = date.getMonth();
    var dd = date.getDate();
    // date.get;

    return [monthNames[mm], (dd > 9 ? "" : "0") + dd].join(
      " "
    );
  }
  _jobTypeIsChecked(job) {
    return (
      (this.state.useDefaultCheckJob && this.state.jobTypes.length == 0) ||
      this.state.jobTypes.includes(job.jobType)
    );
  }
  _opportunityTypeIsChecked(job) {
    return (
      (this.state.useDefaultCheckOpp && this.state.opportunityTypes.length == 0) ||
      this.state.opportunityTypes.includes(job.opportunityType)
    );
  }
  _industryTypeIsChecked(job) {
    return (
      // (this.state.useDefaultCheck && this.state.industryTypes.length == 0) ||
      this.state.industryTypes.length == 0 ||
      this.state.industryTypes.includes(job.industryType)
    );
  }

  _locationIsChecked(job) {
    return (
      this.state.location.length == 0 ||
      this.state.location.includes(job.location.toLowerCase()) ||
      // TODO: get rid of this hacky way
      this.state.location.includes("")
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
      this._locationIsChecked(job) &&
      this._industryTypeIsChecked(job) &&
      (this._opportunityTypeIsChecked(job) ||
      this._jobTypeIsChecked(job))
      // job.salary >= this.state.salary
    );
  }
  displayJobs() {
    const JOBS_TO_SHOW = this.state.jobs.filter((job) => this.filterJob(job));
    return (
      <div className="jobs row">
        {JOBS_TO_SHOW.length != 0 ? (
          JOBS_TO_SHOW.map((job) => {
            return (
              <a key={job._id} href={job._id} className="col-sm-12 col-lg-4 d-flex flex-fill"> 
                <Card className="job-elem">
                  <div>
                    <Card.Img
                      className="card-img-top"
                      style={{
                        padding: "0.3em",
                      }}
                      src="https://brands-cdn.employbridge.com/content/assets/news//40169262_14124173_Large.jpg"
                    />
                    <Card.Title
                      style={{
                        padding: "1em 1em 0em 1em",
                        textOverflow: "clip",
                        overflowWrap: "break-word",
                        width: "100%",
                      }}
                    >
                      {job.title || "Unknown Job Name"}
                    </Card.Title>
                  </div>
                  <Card.Body>
                    <Card.Text>
                      {"Posted on " +
                        this._getDateFormatted(new Date(job.published_at))}
                    </Card.Text>
                    <Card.Text className="job-card-description">
                      {(job.Description)}
                    </Card.Text>
                    <Card.Text>{"@ " + (job.company || "")} </Card.Text>
                    {/* <Card.Text>{"$" + (job.salary || "")} </Card.Text> */}
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
    let allPosts = this.state.jobs;
    let filteredJobs = this.state.jobs;
    const locations = [
      ...new Set(allPosts.map(job => job.location))
    ].sort();
    // const salaries = [
    //   ...new Set(filteredJobs.map(job => parseInt(job.salary)))
    // ].sort(function(a, b) {
    //   return a - b;
    // });
    // const jobTypes = [
    //   ...new Set(filteredJobs.map((job) => job.industry)),
    // ].sort();
    // const careers = [...new Set(filteredJobs.map(job => job.career))].sort();
    // const opportunityTypes = [...new Set(filteredJobs.map(job => job.jobType))].sort();

    let opportunityTypes = this.state.possibleOpportunityTypes;
    let jobTypes = this.state.possibleJobTypes;

    return (
      <div className="grid-child job-filter-box ">
        {jobTypes.length != 0 ? (
          <div className="jobtype-checkboxes row">
            <div className="col-3">
              <h3 className="row">Job Type:</h3>
            </div>
            <div className="col-9 checkbox-options">
              {jobTypes.map((jobtype_name, idx) => {
                return (
                  <div
                    key={jobtype_name}
                    className="form-check col-4  form-check-inline"
                  >
                    <input
                      className="form-check-input jobtype-checkbox"
                      id={jobtype_name + idx}
                      type="checkbox"
                      name="jobtype"
                      value={jobtype_name}
                      checked={this.state.jobTypes.includes(jobtype_name) || 
                              (this.state.useDefaultCheckJob && this.state.jobTypes == 0)}
                      onClick={this.handleCheckboxJobType}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={jobtype_name + idx}
                    >
                      {jobtype_name}
                    </label>
                  </div>
                );
              })}
            </div>
            <Button
              // className="clear-btn"
              bsPrefix="clear-btn "
              onClick={(e) => {
                this.setState({ jobTypes: [], useDefaultCheckJob: false });
                Array.from(
                  document.getElementsByClassName("jobtype-checkbox")
                ).map((checkbox) => (checkbox.checked = false));
              }}
            >
              Clear All
            </Button>
            <Button
              // className="clear-btn"
              bsPrefix="clear-btn "
              onClick={(e) => {
                this.setState({ jobTypes: [], useDefaultCheckJob: true });
                Array.from(
                  document.getElementsByClassName("jobtype-checkbox")
                ).map((checkbox) => (checkbox.checked = true));
              }}
            >
              select All
            </Button>
          </div>
        ) : null}
        <br/>
        {opportunityTypes.length != 0 ? (
          <div className="opptype-checkboxes row">
            <div className="col-3">
              <h3 className="row">Other Opportunity Type:</h3>
              {/* <h3 className="row">Paid opportunities' Type</h3> */}
            </div>
            <div className="col-9 checkbox-options">
              {opportunityTypes.map((oppType, idx) => {
                return (
                  <div
                    key={oppType}
                    className="form-check col-4 form-check-inline"
                  >
                    <input
                      className="form-check-input opptype-checkbox"
                      id={oppType + idx}
                      type="checkbox"
                      name="oppType"
                      value={oppType}
                      checked={this.state.opportunityTypes.includes(oppType) || 
                              (this.state.useDefaultCheckOpp && this.state.opportunityTypes.length == 0)}
                      onClick={this.handleCheckboxOpportunityType}
                    />
                    <label className="form-check-label" htmlFor={oppType + idx}>
                      {oppType}
                    </label>
                  </div>
                );
              })}
            </div>
            <Button
              // className="clear-btn"
              bsPrefix="clear-btn "
              onClick={(e) => {
                this.setState({ opportunityTypes: [], useDefaultCheckOpp: false });
                Array.from(
                  document.getElementsByClassName("opptype-checkbox")
                ).map((checkbox) => (checkbox.checked = false));
              }}
            >
              Clear All
            </Button>
            <Button
              // className="clear-btn"
              bsPrefix="clear-btn "
              onClick={(e) => {
                this.setState({ opportunityTypes: [], useDefaultCheckOpp: true });
                Array.from(
                  document.getElementsByClassName("opptype-checkbox")
                ).map((checkbox) => (checkbox.checked = true));
              }}
            >
              Select All
            </Button>


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
        {/* {this.getSearch()} */}
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
