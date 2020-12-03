import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import NewsCard from './NewsCard';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { addArticle, deleteArticle, getArticles } from '../../actions';
import axios from 'axios';
import '../../assets/stylesheets/app.css';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notInitial: false,
      title: '',
      description: '',
      text: '',
      author: '',
      image: null,
      startingPoint: 0,
      endingPoint: 3,
      pageNumber: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    console.log(e.target.value);
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
    if (this.props.user) {
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
  }
  incrementStartingPoint() {
    const { startingPoint, endingPoint, pageNumber } = this.state;
    if (startingPoint + 3 > this.props.news.length) {
      this.setState({ startingPoint: 0, endingPoint: 3, pageNumber: 1 });
    } else {
      this.setState({
        startingPoint: startingPoint + 3,
        endingPoint: endingPoint + 3,
        pageNumber: pageNumber + 1
      });
    }
  }
  decrementStartingPoint() {
    const { startingPoint, endingPoint, pageNumber } = this.state;
    if (startingPoint - 3 < 1) {
      this.setState({ startingPoint: 0, endingPoint: 3, pageNumber: 1 });
    } else {
      this.setState({
        startingPoint: startingPoint - 3,
        endingPoint: endingPoint - 3,
        pageNumber: pageNumber - 1
      });
    }
  }
  render() {
    console.log('Render function', this.props.news);
    const { startingPoint, endingPoint, pageNumber } = this.state;
    return (
      <div className="col-sm-10 offset-md-1">
        {this.loggedIn()}
        <h1> Hampton Roads News </h1>
        <br />
        <div className="news">
          {this.props.news.slice(startingPoint, endingPoint).map(article => {
            return (
              <div key={article._id}>
                <div
                  onClick={() =>
                    this.props.history.push('/news/' + article._id)
                  }
                >
                  <NewsCard article={article} />
                </div>
                {this.props.user ? (
                  <button onClick={() => this.props.deleteArticle(article)}>
                    Delete
                  </button>
                ) : null}
                <br />
              </div>
            );
          })}
        </div>
        <button onClick={() => this.decrementStartingPoint()}>Backward</button>
        <div>{pageNumber}</div>
        <button onClick={() => this.incrementStartingPoint()}>Forward</button>
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
