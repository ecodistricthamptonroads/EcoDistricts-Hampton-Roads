import React from 'react';
import logo from '../../assets/images/logo.png';
import { getEvents } from '../../helpers/api';
class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      events: []
    };
  }

  componentDidMount() {
    getEvents().then(req => {
      this.setState({ events: req.data });
    });
  }

  _getDateFormatted(date) {
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

    return [monthNames[mm], (dd > 9 ? '' : '0') + dd].join('-');
  }

  render() {
    const EVENTS_PER_PAGE = 3;
    return (
      <div>
        <h1 className="Events-heading">Events</h1>
        <h2 className="Events-heading">Upcoming Events</h2>
        <div className="Events">
          {this.state.events.length != 0 ? (
            this.state.events
              .slice(
                EVENTS_PER_PAGE * this.state.currentPage,
                EVENTS_PER_PAGE * this.state.currentPage + EVENTS_PER_PAGE
              )
              .map((event, idx) => (
                <div className="row event" key={event.title + idx}>
                  <img className="col-2 event-date" src={event.image || logo} />

                  <div className="col-6 event-info">
                    <h2>{event.title}</h2>
                    <h3> {this._getDateFormatted(new Date(event.date))}</h3>
                    <p>{event.description}</p>
                  </div>
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
