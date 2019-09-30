import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import Table from 'react-bootstrap/Table';
class Surveys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surveys: [
        {
          ID: 1,
          Title: 'Community Satisfaction Survey',
          Date: '2019-09-22',
          Link:
            'https://docs.google.com/forms/d/1k0P3oD2ztKx7LGavjlNowVT6dawdPOpzk-DHzFH1Etg/edit'
        },
        {
          ID: 2,
          Title: 'Roadside Construction Survey',
          Date: '2019-08-14',
          Link: 'https://www.google.com/'
        }
      ]
    };
  }

  header() {
    let header = Object.keys(this.state.surveys[0]);
    return header.map((key, index) => {
      if (key != 'Link') {
        return <th key={index}>{key}</th>;
      }
    });
  }
  body() {
    return this.state.surveys.map((survey, index) => {
      const { ID, Title, Date, Link } = survey;
      return (
        <tr key={ID}>
          <td>{ID}</td>
          <td>
            <a href={Link}>{Title}</a>
          </td>
          <td>{Date}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <Table>
        <thead>{this.header()}</thead>
        <tbody>{this.body()}</tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => {
  return {
    surveys: state.surveys
  };
};

export default connect(mapStateToProps)(Surveys);
