import React, {Component} from 'react';
import Logo from '../Logo';
import axios from 'axios';
import './CreateBook.scss';
import {withRouter} from 'react-router';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

class CreateBook extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      error: null,
      // TODO THIS IS HELLA INSECURE
      // endpoint: process.env.NODE_ENV ? "https://weword-app.herokuapp.com/" : "http://127.0.0.1:4001",
      endpoint: "http://127.0.0.1:4001",
    };
    console.log(process.env.NODE_ENV);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      error: null,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const params = {
      name: this.state.title,
      description: this.state.description,
    }
    console.log("submitting", params);
    try {
      const {data} = await axios.post(this.state.endpoint + '/create', null, {params});
      this.props.history.push('/stories/' + data.story._id);
    } catch(error) {
      console.log(error);
      this.setState({error: JSON.stringify(error)});
    }
  }

  render() {
    return (
      <div className="everything-outer">
        <Logo size='150' />
        <h1>Let's start something great</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title
            <span>Think of something short and sweet</span>
          </label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />

          <label>
            Description
            <span>What's this thing even about?</span>
          </label>
          <input type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
          <input type="submit" value="Submit" />
          <p className="error" style={{display: (this.state.error ? "block" : "none")}}>Error in creating your story</p>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateBook);
