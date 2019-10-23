import React, {Component} from 'react';
import './LeftNavbar.scss';
import Logo from '../Logo';

class LeftNavbar extends Component {
  render() {
    return (
      <div className="left-navbar">
        <Logo size='80' />
        <h1>Book title</h1>
        <p>Description goes here I'm talking about the book and some of the cool parts about it</p>
        <div className="divider"></div>
      </div>
    );
  }
}

export default LeftNavbar;
