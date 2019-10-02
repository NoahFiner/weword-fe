import React, {Component} from 'react';
import './Footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {word: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({word: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('handling submit');
    this.props.socket.emit("addWord", this.state.word);
    this.setState({word: ''});
  }

  render() {
    return (
      <div className="footer">
        <form onSubmit={this.handleSubmit}>
          <h1>Add a word:</h1>
          <input type="text" onChange={this.handleChange} value={this.state.word} className="add-word-input"></input>
          <input type="submit" value="submit" className="button"></input>
        </form>
      </div>
    );
  }
}

export default Footer;