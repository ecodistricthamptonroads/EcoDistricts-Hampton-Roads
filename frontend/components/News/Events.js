import React from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
const test_value = {
  title: 'Lorem ipsum dolor',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec gravida lorem. Cras molestie orci velit, nec venenatis eros'
};
class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notInitial: false,
      title: '',
      description: '',
      date: new Date(),
      image: null,
      currentPage: 0,
      events: [test_value, test_value, test_value, test_value]
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleChange(e) {
    console.log(this.state.date);
    this.setState({ notInitial: true });
    this.setState({ [e.target.name]: e.target.value });
  }
  componentDidMount() {
    axios.get('/api/event/').then(events => {
      console.log(events.data);
      this.setState({ events: events.data });
    });
  }

  submit(e) {
    e.preventDefault();
    const event = {
      title: this.state.title,
      description: this.state.description,
      date: new Date(this.state.date)
    };
    axios
      .post('/api/event/', event)
      .then(event => {
        this.setState({ events: [...this.state.events, event] });
      })
      .catch(err => {
        console.error(err);
      });
    this.setState({
      title: '',
      description: '',
      date: new Date()
    });
  }

  deleteEvent(event) {
    if (this.props.loggedIn) {
      let newEvents = this.state.events.slice();
      let index = newEvents.indexOf(event);
      newEvents.splice(index, 1);
      return (
        <Button
          className="delete-job-btn col-4 "
          variant="danger"
          onClick={e => {
            e.stopPropagation();
            e.preventDefault();
            axios
              .delete('/api/event/' + event._id)
              .then(() => this.setState({ events: newEvents }))
              .catch(err => console.log(err));
          }}
        >
          Delete
        </Button>
      );
    }
  }
  _getDateFormatted(date) {
    console.log(date);
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

    return [monthNames[mm], (dd > 9 ? '' : '0') + dd].join('-');
  }

  loggedIn() {
    return (
      <div>
        <Form onSubmit={this.submit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              type="text"
              placeholder="Title"
              isInvalid={this.state.notInitial && !this.state.title != ''}
            />
            <Form.Control.Feedback type="invalid">
              Please include a title
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Label>Text</Form.Label>
            <Form.Control
              as="textarea"
              rows="8"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              type="Text"
              placeholder="Text"
              isInvalid={this.state.notInitial && !this.state.description != ''}
            />
            <Form.Control.Feedback type="invalid">
              Please include the main text for the Event description
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput4">
            <Form.Label>date</Form.Label>

            <Form.Control
              rows="8"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
              type="date"
              placeholder="Text"
              isInvalid={this.state.notInitial && !this.state.date}
            />
            <Form.Control.Feedback type="invalid">
              Please Pick a Date
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
        <button
          variant="primary"
          type="submit"
          value="submit"
          onClick={this.submit}
        >
          Add Event
        </button>
      </div>
    );
  }
  render() {
    const EVENTS_PER_PAGE = 3;
    return (
      <div>
        {this.props.loggedIn ? this.loggedIn() : null}
        <h1 className="Events-heading">Events</h1>
        <h2 className="Events-heading">Upcoming Events</h2>
        <div className="Events">
          {this.state.events.length != 0 ? (
            this.state.events
              .slice(
                EVENTS_PER_PAGE * this.state.currentPage,
                EVENTS_PER_PAGE * this.state.currentPage + EVENTS_PER_PAGE
              )
              .map(event => (
                <div className="row event">
                  <h1 className="col-2 event-date">
                    {this._getDateFormatted(new Date(event.date))}
                  </h1>
                  <div className="col-6 event-info">
                    <h2>{event.title}</h2>
                    <p>{event.description}</p>
                  </div>
                  {this.deleteEvent(event)}
                </div>
              ))
          ) : (
            <h4 className="Events-heading justify-content-md-center row">
              <u>No Upcoming Events comeback later !!!</u>
            </h4>
          )}
        </div>
        <div className="Event-btns row justify-content-md-center ">
          <div
            className="left-arrow col"
            onClick={() =>
              this.setState({
                currentPage: Math.max(this.state.currentPage - 1, 0)
              })
            }
          >
            ◀
          </div>
          <div className="pageNumber col">{this.state.currentPage + 1}</div>
          <div
            className="right-arrow col"
            onClick={() => {
              this.setState({
                currentPage: Math.min(
                  this.state.currentPage + 1,
                  Math.ceil(this.state.events.length / EVENTS_PER_PAGE) - 1
                )
              });
            }}
          >
            ▶
          </div>
        </div>
      </div>
    );
  }
}
export default Events;
