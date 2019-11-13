import React, {Component} from 'react';
import socketIOClient from "socket.io-client";
import './Story.scss';
import Footer from '../Footer';
import LeftNavbar from '../LeftNavbar';
import axios from 'axios';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Story extends Component {
  constructor() {
    super();
    this.state = {
      story: {},
      words: [],
      // TODO THIS IS HELLA INSECURE
      // endpoint: process.env.NODE_ENV ? "https://weword-app.herokuapp.com/" : "http://127.0.0.1:4001",
      endpoint: "http://127.0.0.1:4001",
      socket: null,
      disabled: false,
    };
    console.log(process.env.NODE_ENV);
  }


  async componentDidMount() {
    let {storyId} = this.props.match.params;
    const {endpoint} = this.state;
    try {
      const response = await axios.get(endpoint + "/stories/" + storyId);
      const {story} = response.data;
      console.log(story);
      this.setState({story});
    } catch(e) {
      console.error(e);
    }


    const socket = socketIOClient(endpoint);
    this.setState({socket});
    socket.on("sendWords", words => {
      this.setState({words});
    });

    socket.on("disable", data => {
      this.setState({disabled: true});
    });

    socket.on("enable", data => {
      this.setState({disabled: false});
    });
  }

  render() {
    const {words} = this.state;
    console.log(words);
    return (
      <div>
        <LeftNavbar story={this.state.story} />
        <div className="content-outer">
          <div className="content">
            <TransitionGroup>
              {words.map((value, idx) => {
                return (<CSSTransition timeout={500} classNames="word">
                  <p key={idx} className="word">{value}</p>
                </CSSTransition>)
              })}
              <div className="next-word"></div>
            </TransitionGroup>
          </div>
        </div>
        <Footer inactive={this.state.disabled} socket={this.state.socket} />
      </div>
    );
  }
}

export default Story;
