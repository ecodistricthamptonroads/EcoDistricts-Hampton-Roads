import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Dropdown from 'react-bootstrap/Dropdown';
const JOB_TYPES = [
  'Executive',
  'General Management',
  'Supervisor',
  'Operations',
  'Administrative'
];
const CAREERS = [
  'Credential',
  'Coaching',
  'Counseling',
  'Apprenticeship',
  'Internship',
  'Fellowship',
  'Scholarship',
  'Research'
];
class AddJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: React.createRef(),
      notInitial: false,
      title: '',
      description: '',
      company: '',
      location: '',
      salary: '',
      industry: '',
      jobType: '',
      career: '',
      link: '',
      draft: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validateFields() {
    this.setState({ notInitial: true });
    return (
      this.validateTitle() &&
      this.validateDescription() &&
      this.validateCompany() &&
      this.validateLocation() &&
      this.validateSalary() &&
      this.validateIndustry()
    );
  }

  validateTitle() {
    return this.state.title != '';
  }

  validateDescription() {
    return this.state.description != '';
  }

  validateCompany() {
    return this.state.company != '';
  }

  validateLocation() {
    return this.state.location != '';
  }

  validateSalary() {
    return this.state.salary != '';
  }

  validateIndustry() {
    return this.state.industry != '';
  }
  validateJobTypes() {
    return JOB_TYPES.includes(this.state.jobType);
  }
  validateCareer() {
    return CAREERS.includes(this.state.career);
  }

  validateLink() {
    var reg = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    return reg.test(this.state.link);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // todo: remove this
    if (this.state.description != '') {
      document.getElementById('desc-feedback').style.display = 'None';
    } else {
      document.getElementById('desc-feedback').style.display = 'block';
    }

    if (this.validateFields()) {
      let job = {
        title: this.state.title,
        description: this.state.description,
        company: this.state.company,
        location: this.state.location,
        salary: this.state.salary,
        industry: this.state.industry,
        jobType: this.state.jobType,
        career: this.state.career,
        draft: this.state.draft,
        link: this.state.link
      };
      axios
        .post('/api/job/', job)
        .then(job => {
          this.props.newJob(job.data);
        })
        .catch(err => {
          console.error(err);
        });
      this.setState({
        notInitial: false,
        title: '',
        description: '',
        company: '',
        location: '',
        salary: '',
        industry: '',
        jobType: '',
        career: '',
        link: '',
        draft: true
      });
      this.state.editor.current.getInstance().setMarkdown('');
    }
  }
  addJobForms() {
    return (
      <div>
        <Form>
          <Form.Group controlId="Title">
            <Form.Label>Job Title</Form.Label>
            <Form.Control
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
              type="text"
              placeholder="Enter Job Title"
              isInvalid={this.state.notInitial && !this.validateTitle()}
            />
            <Form.Control.Feedback type="invalid">
              Please include a title
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="Description">
            <Form.Label>Job Description</Form.Label>

            <Editor
              previewStyle="vertical"
              height="400px"
              initialEditType="markdown"
              initialValue={this.state.description}
              ref={this.state.editor}
              onChange={() => {
                this.setState({
                  description: this.state.editor.current
                    .getInstance()
                    .getMarkdown()
                });
              }}
              useCommandShortcut={true}
            />
            <Form.Control.Feedback id="desc-feedback" type="invalid">
              Please enter a description
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="Company">
            <Form.Label>Company</Form.Label>
            <Form.Control
              as="textarea"
              rows="1"
              name="company"
              onChange={this.handleChange}
              value={this.state.company}
              type="text"
              placeholder="Enter Company"
              isInvalid={this.state.notInitial && !this.validateCompany()}
            />
            <Form.Control.Feedback type="invalid">
              Please enter the requested company
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="Location">
            <Form.Label>Job Location</Form.Label>
            <Form.Control
              as="textarea"
              rows="1"
              name="location"
              onChange={this.handleChange}
              value={this.state.location}
              type="text"
              placeholder="Enter Job Location"
              isInvalid={this.state.notInitial && !this.validateLocation()}
            />
            <Form.Control.Feedback type="invalid">
              Please enter the requested location
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="Job Salary">
            <Form.Label>Job Salary</Form.Label>
            <Form.Control
              name="salary"
              value={this.state.salary}
              onChange={this.handleChange}
              type="text"
              placeholder="Enter Job Salary"
              isInvalid={this.state.notInitial && !this.validateSalary()}
            />
            <Form.Control.Feedback type="invalid">
              Please include the requested salary
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="Job Industry">
            <Form.Label>Job Industry</Form.Label>
            <Form.Control
              name="industry"
              value={this.state.industry}
              onChange={this.handleChange}
              type="text"
              placeholder="Enter Job Industry"
              isInvalid={this.state.notInitial && !this.validateIndustry()}
            />
            <Form.Control.Feedback type="invalid">
              Please include the requested industry
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="Job type">
            <Form.Label>Job Type</Form.Label>
            <Form.Control
              name="jobType"
              value={this.state.jobType}
              onChange={this.handleChange}
              as="select"
              placeholder="Select Job Type"
              isInvalid={this.state.notInitial && !this.validateJobTypes()}
            >
              {JOB_TYPES.map(job => (
                <option value={job}>{job}</option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please include the requested Job Type
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="Job Career">
            <Form.Label>Job Type</Form.Label>
            <Form.Control
              name="career"
              value={this.state.career}
              onChange={this.handleChange}
              as="select"
              placeholder="Select Job Career"
              isInvalid={this.state.notInitial && !this.validateCareer()}
            >
              {CAREERS.map(career => (
                <option value={career}>{career}</option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please include the requested Job Career
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="Link">
            <Form.Label>link</Form.Label>
            <Form.Control
              as="textarea"
              rows="1"
              name="link"
              onChange={this.handleChange}
              value={this.state.link}
              type="text"
              placeholder="Enter Job apply Link"
              isInvalid={this.state.notInitial && !this.validateLink()}
            />
            <Form.Control.Feedback type="invalid">
              Please enter the requested link
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
        <BootstrapSwitchButton
          checked={true}
          onlabel="Draft"
          offlabel="Publish"
          onstyle="primary"
          width={100}
          onChange={isDraft => {
            this.setState({ draft: isDraft });
          }}
        />
        <br />
        <Button onClick={this.handleSubmit}>Create New Job</Button>
      </div>
    );
  }
  render() {
    return (
      <div>
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Toggle the AddJob Forms
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>{this.addJobForms()}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default AddJob;
