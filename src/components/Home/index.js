import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Story from  '../Story';
import Book from '../Book';
import Logo from '../Logo';
import axios from 'axios';
import './Home.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {withRouter} from 'react-router';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      stories: [],
      // TODO THIS IS HELLA INSECURE
      // endpoint: process.env.NODE_ENV ? "https://weword-app.herokuapp.com/" : "http://127.0.0.1:4001",
      endpoint: "http://127.0.0.1:4001",
    };
    console.log(process.env.NODE_ENV);
  }

  async componentDidMount() {
    const { endpoint } = this.state;
    try {
      const response = await axios.get(endpoint + "/stories");
      const stories = response.data.stories;
      this.setState({stories});
    } catch(e) {
      console.error(e);
    }
  }

  render() {
    const stories = this.state.stories;
    return (
      <div className="everything-outer">
        <Logo size='150' />
        <h1>Write a story with a bunch of random people online</h1>
          <TransitionGroup className="books-outer">
              {stories.map((story, idx) => {
                return (<CSSTransition key={story._id} timeout={50*idx} classNames="story">
                  <Link to={"/stories/" + story._id}>
                    <Book story={story} />
                  </Link>
                </CSSTransition>)
              })}
          </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(Home);
