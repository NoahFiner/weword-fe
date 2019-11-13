import React, {Component} from 'react';
import './LeftNavbar.scss';
import Logo from '../Logo';

class LeftNavbar extends Component {
  render() {
    return (
      <div className="left-navbar">
        <Logo size='80' />
        <h1>{this.props.story.name}</h1>
        <p>{this.props.story.description}</p>
        <div className="divider"></div>
      </div>
    );
  }
}

export default LeftNavbar;
