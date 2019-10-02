import React, {Component} from 'react';
import socketIOClient from "socket.io-client";
import './App.scss';
import Logo from '../Logo';
import Footer from '../Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      words: [],
      // TODO THIS IS HELLA INSECURE
      endpoint: process.env.PROD_ENDPOINT || "http://127.0.0.1:4001",
      // endpoint: "https://weword-app.herokuapp.com/",
      socket: null,
    };
    console.log(process.env.PROD_ENDPOINT);
  }


  componentDidMount() {
    const {endpoint} = this.state;
    const socket = socketIOClient(endpoint);
    this.setState({socket})
    socket.on("sendWords", words => this.setState({words}));
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
            {words.map((value, idx) => {
              return <p key={idx} className="word">{value}</p>
            })}
            <div className="next-word"></div>
          </div>
        </div>
        <Footer socket={this.state.socket} />
      </div>
    );
  }
}

export default App;