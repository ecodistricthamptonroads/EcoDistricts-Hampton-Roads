import { Component } from 'react';
import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import Button from 'react-bootstrap/Button';
import '../../assets/stylesheets/jobPage.css';
class JobPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job: {
        title: '',
        description: '',
        company: '',
        location: '',
        salary: '',
        industry: ''
      }
    };
  }
  render() {
    return (
      <div className="job-page-body">
        <div className="Posting-Header">
          <h1>{this.state.job.title}</h1>
          <h2>{this.state.job.industry}</h2>
        </div>
        <div className="info-block">
          <h3 className="company">Company</h3>
          {this.state.job.company}
          <h3 className="location">Location</h3>
          {this.state.job.location}
          <h3 className="salary">Salary</h3>
          {this.state.job.salary}
        </div>
        <hr />
        <ReactMarkdown source={this.state.job.description} />
        <Button
          className="apply-btn"
          onClick={() => {
            alert(
              'This is partially done and will be finished in the next sprint :D'
            );
          }}
        >
          Apply Now
        </Button>
      </div>
    );
  }
  componentDidMount() {
    axios.get('/api/job/' + this.props.match.params.id).then(job => {
      this.setState({ job: job.data });
    });
  }
}

export default JobPage;
