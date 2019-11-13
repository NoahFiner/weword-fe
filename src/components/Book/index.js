import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './Book.scss';

class Book extends Component {
  render() {
    return (
      <div className="book-outer">
        <div className="book-header">
          <h1>{this.props.story.name}</h1>
          <p>{this.props.story.description}</p>
        </div>
        <div className="book-footer">
          <p>{this.props.story.length} words</p>
          <p>20 writers</p>
        </div>
      </div>
    );
  }
}

export default Book;
