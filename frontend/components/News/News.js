import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import NewsCard from './NewsCard';
import Form from 'react-bootstrap/Form';
import { addArticle, deleteArticle, getArticles } from '../../actions';
import axios from 'axios';
import Events from './Events';
import '../../assets/stylesheets/app.css';
import { Button } from 'react-bootstrap';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notInitial: false,
      title: '',
      description: '',
      text: '',
      author: '',
      eventData: Date.now(),
      image: null,
      currentPage: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
  componentDidMount() {
    this.props.getNews();
  }
  validateFields() {
    this.setState({ notInitial: true });
    return (
      this.validateTitle() &&
      this.validateAuthor() &&
      this.validateDescription() &&
      this.validateText() &&
      this.validateImage()
    );
  }
  validateTitle() {
    return this.state.title != '';
  }
  validateAuthor() {
    return this.state.author != '';
  }
  validateDescription() {
    return this.state.description != '';
  }
  validateText() {
    return this.state.text != '';
  }
  validateImage() {
    return this.state.image !== null /*&& this.state.image != undefined*/;
  }
  handleChange(e) {
    if (e.target.name == 'image') {
      this.setState({ [e.target.name]: e.target.files[0] });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.validateFields()) {
      var formData = new FormData();
      formData.append('image', this.state.image);
      axios
        .post('/api/file/', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then(res => {
          let imageId = res.data;
          let news = {
            title: this.state.title,
            author: this.state.author,
            description: this.state.description,
            text: this.state.text,
            image: imageId
          };
          this.props.addArticle(news);
          document.getElementById('imageToUpload').value = '';
          this.setState({
            notInitial: false,
            title: '',
            description: '',
            text: '',
            author: '',
            image: null
          });
        });
    }
  }
  loggedIn() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              type="text"
              placeholder="Title"
              isInvalid={this.state.notInitial && !this.validateTitle()}
            />
            <Form.Control.Feedback type="invalid">
              Please include a title
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput4">
            <Form.Label>Author</Form.Label>
            <Form.Control
              name="author"
              value={this.state.author}
              onChange={this.handleChange}
              type="text"
              placeholder="Author"
              isInvalid={this.state.notInitial && !this.validateAuthor()}
            />
            <Form.Control.Feedback type="invalid">
              Please include an author
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              type="Description"
              placeholder="Description"
              isInvalid={this.state.notInitial && !this.validateDescription()}
            />
            <Form.Control.Feedback type="invalid">
              Please include a description
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Label>Text</Form.Label>
            <Form.Control
              as="textarea"
              rows="8"
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
              type="Text"
              placeholder="Text"
              isInvalid={this.state.notInitial && !this.validateText()}
            />
            <Form.Control.Feedback type="invalid">
              Please include the main text for the news article
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput4">
            <Form.Label>Image</Form.Label>
            <Form.Control
              as="br"
              disabled
              isInvalid={this.state.notInitial && !this.validateImage()}
            />
            <div>
              <input
                type="file"
                id="imageToUpload"
                onChange={this.handleChange}
                name="image"
                isInvalid={true}
              />
            </div>
            <Form.Control.Feedback type="invalid">
              Please upload an image
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
        <button
          variant="primary"
          type="submit"
          value="submit"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }
  deleteNews(news) {
    if (this.props.user) {
      let newEvents = this.props.news.slice();
      let index = newEvents.indexOf(news);
      newEvents.splice(index, 1);
      return (
        <Button
          className="delete-job-btn col-4 "
          variant="danger"
          onClick={e => {
            e.stopPropagation();
            e.preventDefault();
            this.props.deleteArticle(news);
          }}
        >
          Delete
        </Button>
      );
    }
  }
  render() {
    const NEWS_PER_PAGE = 3;
    return (
      <div className="news-page">
        <Events loggedIn={this.props.user} />
        {this.props.user ? this.loggedIn() : null}
        <h1 className="Events-heading">Events</h1>
        <h2 className="Events-heading">Upcoming Events</h2>
        <div className="Events">
          {this.props.news.length != 0 ? (
            this.props.news
              .slice(
                NEWS_PER_PAGE * this.state.currentPage,
                NEWS_PER_PAGE * this.state.currentPage + NEWS_PER_PAGE
              )
              .map((news, idx) => (
                <div className="row event" key={news.title + idx}>
                  <img className="col-2 event-date" src={news.image || logo} />

                  <div className="col-6 event-info">
                    <h2>{news.title}</h2>
                    <h3> {this._getDateFormatted(new Date(news.date))}</h3>
                    <p>{news.description}</p>
                  </div>
                  {this.deleteNews(news)}
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
                  Math.ceil(this.props.news.length / NEWS_PER_PAGE) - 1
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

const mapStateToProps = state => {
  return {
    news: state.news.news,
    user: state.login.user
  };
};
const mapDispatchToProps = (/* dispatch */) => {
  return {
    addArticle: addArticle,
    getNews: getArticles,
    deleteArticle: deleteArticle
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(News);
