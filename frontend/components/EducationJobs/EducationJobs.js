import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import AddJob from './AddJob';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

class EducationJobs extends Component {
  constructor(props) {
    super(props);
    var job1 = {
      title: 'job1',
      description: 'This is a description of job 1',
      responsibilities: 'These are the responsibilities for job 1',
      requirements: 'These are the requirements for job 1'
    };
    var job2 = {
      title: 'job2',
      description: 'A description of job 2',
      responsibilities: 'These are the responsibilities for job 2',
      requirements: 'These are the requirements for job 2'
    };
    this.state = {
      currentJob: null,
      jobs: [job1, job2]
    };
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
        <td>
          {' '}
          {React.createElement(
            'button',
            { onClick: () => this.setState({ jobs: newJobs }) },
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
    loggedIn: state.login.loggedIn
  };
};

export default connect(mapStateToProps)(EducationJobs);
