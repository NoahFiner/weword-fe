import React, {Component} from 'react';
import socketIOClient from "socket.io-client";
import './App.scss';
import Logo from '../Logo';
import Footer from '../Footer';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class App extends Component {
  constructor() {
    super();
    this.state = {
      words: [],
      // TODO THIS IS HELLA INSECURE
      endpoint: process.env.NODE_ENV ? "https://weword-app.herokuapp.com/" : "http://127.0.0.1:4001",
      // endpoint: "http://127.0.0.1:4001",
      socket: null,
      disabled: false,
    };
    console.log(process.env.NODE_ENV);
  }


  componentDidMount() {
    const {endpoint} = this.state;
    const socket = socketIOClient(endpoint);
    this.setState({socket})
    socket.on("sendWords", words => {
      this.setState({words});
    });

    socket.on("disable", data => {
      this.setState({disabled: true});
    })

    socket.on("enable", data => {
      this.setState({disabled: false});
    })
  }

  render() {
    const {words} = this.state;
    console.log(words);
    return (
      <div className="everything-outer">
        <div className="content-outer">
          <div className="left-navbar">
            <Logo size='80' />
            <h1>Book title</h1>
            <div className="divider"></div>
          </div>
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

export default App;
