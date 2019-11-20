import React, {Component} from 'react';
import './Footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {word: '', error: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({word: event.target.value, error: ''});
  }

  handleSubmit(event) {
    event.preventDefault();
    let {storyId} = this.props;

    this.props.socket.emit("addWord", {word: this.state.word.trim(), room: storyId}, (error) => {
      if(error) {
        if(error !== "duplicate word") {
          this.setState({error});
        }
      } else {
        this.setState({word: ''});
      }
    });
  }

  render() {
    return (
      <div className={"footer " + (this.props.inactive ? 'inactive':  '')}>
        <form onSubmit={this.handleSubmit}>
          <h1>Add a word:</h1>
          <input type="text" onChange={this.handleChange} value={this.state.word} className={"add-word-input " + (this.state.error ? 'error' : '')}></input>
          <input type="submit" value="submit" className="button"></input>
        </form>
        <p id="error-msg">
          {this.state.error}
        </p>
      </div>
    );
  }
}

export default Footer;
