import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import axios from 'axios';
import AddJob from './AddJob';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
        <div style={{ textAlign: 'left', fontSize: '36px' }}>Jobs Heading</div>
        <div style={{ textAlign: 'left', fontSize: '14px' }}></div>
        <div>
          <Jobs loggedIn={this.props} />
        </div>
      </div>
    );
  }
}

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentJob: null,
      jobs: []
    };
  }

  componentDidMount() {
    axios.get('/api/job/').then(jobs => {
      this.setState({ jobs: jobs.data });
    });
  }

  adminTableHeader() {
    if (this.props.loggedIn) {
      return <th>Delete Job</th>;
    }
  }

  adminDeleteJob(job) {
    if (this.props.loggedIn) {
      let newJobs = this.state.jobs.slice();
      let index = newJobs.indexOf(job);
      newJobs.splice(index, 1);
      return (
        <div>
          <br />
          <Button
            variant="danger"
            onClick={() => {
              this.setState({ jobs: newJobs });
              axios.delete('/api/job/' + job._id);
            }}
          >
            Delete
          </Button>
        </div>
      );
    }
  }
  filterJob(job) {}
  displayJobs() {
    return (
      <div className="jobs">
        {this.state.jobs.map(job => {
          return (
            <a key={job._id} className="job-elem" href={job.link}>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  src="https://brands-cdn.employbridge.com/content/assets/news//40169262_14124173_Large.jpg"
                />
                <Card.Body>
                  <Card.Title>{job.title} </Card.Title>
                  <Card.Text>{job.company} </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() =>
                      this.props.loggedIn.history.push('/jobs/' + job._id)
                    }
                  >
                    Go Somewhere
                  </Button>
                  {this.adminDeleteJob(job)}
                </Card.Body>
              </Card>
            </a>
          );
        })}
      </div>
    );
  }

  createCard(cardTitle, cardText) {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text>{cardText}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  addJob() {
    console.log('Jobs supposed to be added');
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

  render() {
    let addJob = null;

    if (this.props.loggedIn.loggedIn) {
      addJob = this.addJob();
    }
    return (
      <div>
        <div style={{ textAlign: 'left', fontSize: '22px' }}>
          Open Positions
        </div>
        {addJob}
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
