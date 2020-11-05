import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import axios from 'axios';
import AddJob from './AddJob';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class JobPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentJob: {
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
    console.log(this.state.currentJob);
    return <div>{'' + this.state.currentJob.company}</div>;
  }
  componentDidMount() {
    axios.get('/api/job/5fa47c583975109867eb8526').then(job => {
      this.setState({ job: job.data });
    });
  }
}

export default JobPage;
