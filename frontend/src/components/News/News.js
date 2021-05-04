import { Component } from "react";
import React from "react";

// import Events from "./Events";
import "../../assets/stylesheets/app.css";
import "../../assets/stylesheets/newsPage.css";
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
    var yy = date.getFullYear();

    switch(dd){
      case 1:
      case 21:
      case 31: 
        dd +="st";
      break
      case 2:
      case 22: 
        dd +="nd";
      break
      case 3: 
      case 23: 
        dd += "rd";
      break
      default: 
        dd += "th";
    }

    return monthNames[mm] + " " + dd + ", " + yy;
  }
  componentDidMount() {
    getNews().then((req) => {
      this.setState({ news: req.data });
    });
  }

  render() {
    const NEWS_PER_PAGE = 2;
    const PREVIEW_LENGTH = 100;

    return (
      <div className="news-page">
        {/* <Events /> */} 
        {/* we used to have both events and news on this page. Now we just have news. */}
        {this.props.user ? this.loggedIn() : null}
        <h1 className="Events-heading">Hampton Roads News</h1>
        <h2 className="Events-heading">Upcoming News</h2>
        <div className="Events">
          {this.state.news.length != 0 ? (
            this.state.news
              .slice(
                NEWS_PER_PAGE * this.state.currentPage,
                NEWS_PER_PAGE * this.state.currentPage + NEWS_PER_PAGE
              )
              .map((news, idx) => (
                <div className="row event" key={ news.title + idx}>
                  <div className="event-image-container col-sm-12 col-md-3">
                  <img
                    className="event-image"
                    src={getSpecificImage("small", news.image) ||  icon}
                  />
                </div>
                  <div className="col-sm-12 col-md-8 col-lg-5 event-info">
                    <h3>{news.Title}</h3>
                    <div className="news-date">{this._getDateFormatted(new Date(news.date))} </div>
                    <p className="news-description">{news.description.length > PREVIEW_LENGTH ? (news.description.substr(0,PREVIEW_LENGTH).trim() + "...") : news.description}</p>
                  </div>
                </div>
              ))
          ) : (
            <h4 className="Events-heading justify-content-md-center row">
              <u>No news available. Check back soon for updates!</u> 
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
              var numPages = this.state.news.length / NEWS_PER_PAGE;
              this.setState({
                currentPage: Math.min(
                  this.state.currentPage + 1,
                  numPages % 1 == 0 ?  Math.floor(numPages) - 1 : Math.floor(numPages) 
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
