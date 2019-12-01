import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import axios from 'axios';
import AddJob from './AddJob';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

class EducationJobs extends Component {
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
      let deleteJob = job;
      let newJobs = this.state.jobs.slice();
      let index = newJobs.indexOf(job);
      newJobs.splice(index, 1);
      return (
        <td>
          {' '}
          {React.createElement(
            'button',
            {
              onClick: () => {
                this.setState({ jobs: newJobs });
                axios.delete('/api/job/' + job._id);
              }
            },
            'Delete Job'
          )}{' '}
        </td>
      );
    }
  }

  displayJobs() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>View Job</th>
            {this.adminTableHeader()}
          </tr>
        </thead>
        <tbody>
          {this.state.jobs.map(job => {
            return (
              <tr>
                <td> {job.title} </td>
                <td> {job.description} </td>
                <td>
                  {' '}
                  {React.createElement(
                    'button',
                    { onClick: () => this.setState({ currentJob: job }) },
                    'View Job'
                  )}{' '}
                </td>
                {this.adminDeleteJob(job)}
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }

  displayDetailedJob(currentJob) {
    var title = this.createCard('Job Title', currentJob.title);
    var description = this.createCard('Description', currentJob.description);
    var responsibilities = this.createCard(
      'Responsibilities',
      currentJob.responsibilities
    );
    var requirements = this.createCard('Requirements', currentJob.requirements);
    var apply = React.createElement('button', {}, 'Apply');
    var back = React.createElement(
      'button',
      { onClick: () => this.setState({ currentJob: null }) },
      'Back'
    );
    return React.createElement('div', {}, [
      title,
      description,
      responsibilities,
      requirements,
      back,
      apply
    ]);
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
    let body = null;
    let addJob = null;
    if (this.state.currentJob == null) {
      body = this.displayJobs();
    } else {
      body = this.displayDetailedJob(this.state.currentJob);
    }
    if (this.props.loggedIn) {
      addJob = this.addJob();
    }
    return (
      <div>
        <div style={{ textAlign: 'center', fontSize: '36px' }}>
          Job opportunities and Education
        </div>
        {addJob}
        {body}
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
