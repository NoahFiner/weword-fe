import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './Book.scss';

class Book extends Component {
  render() {
    return (
      <div className={"book-outer " + (this.props.create ? "create" : "")}>
        {
          this.props.create ? (
            <div className="book-single">
              <h1>create a new story</h1>
              <FontAwesomeIcon icon={faPlusCircle} className="create-book" ></FontAwesomeIcon>
            </div>
          ) : (
            <>
              <div className="book-header">
                <h1>{this.props.story.name}</h1>
                <p>{this.props.story.description}</p>
              </div>
              <div className="book-footer">
                <p>{this.props.story.length} words</p>
                <p>20 writers</p>
              </div>
            </>
          )
        }
      </div>
    );
  }
}

export default Book;
