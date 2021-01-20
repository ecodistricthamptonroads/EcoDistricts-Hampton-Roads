import { Component } from "react";
import React from "react";

import Events from "./Events";
import "../../assets/stylesheets/app.css";
import icon from "../../assets/images/icon.png";
import { getNews, getSpecificImage } from "../../helpers/api";
class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notInitial: false,
      news: [],
      currentPage: 0,
    };
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

    return [monthNames[mm], (dd > 9 ? "" : "0") + dd].join("-");
  }
  componentDidMount() {
    getNews().then((req) => {
      this.setState({ news: req.data });
    });
  }

  render() {
    const NEWS_PER_PAGE = 3;

    return (
      <div className="news-page">
        <Events />
        {this.props.user ? this.loggedIn() : null}
        <h1 className="Events-heading">News</h1>
        <h2 className="Events-heading">Upcoming News</h2>
        <div className="Events">
          {this.state.news.length != 0 ? (
            this.state.news
              .slice(
                NEWS_PER_PAGE * this.state.currentPage,
                NEWS_PER_PAGE * this.state.currentPage + NEWS_PER_PAGE
              )
              .map((news, idx) => (
                <div className="row event" key={news.title + idx}>
                  <img
                    className="col-2 event-date"
                    src={getSpecificImage(news.image) || icon}
                  />

                  <div className="col-6 event-info">
                    <h2>{news.title}</h2>
                    <h3> {this._getDateFormatted(new Date(news.date))}</h3>
                    <p>{news.description}</p>
                  </div>
                </div>
              ))
          ) : (
            <h4 className="Events-heading justify-content-md-center row">
              <u>No News comeback later !!!</u>
            </h4>
          )}
        </div>
        <div className="Event-btns row justify-content-md-center ">
          <div
            className="left-arrow col"
            onClick={() =>
              this.setState({
                currentPage: Math.max(this.state.currentPage - 1, 0),
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
                  Math.ceil(this.props.news.length / NEWS_PER_PAGE) - 1
                ),
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

export default News;
