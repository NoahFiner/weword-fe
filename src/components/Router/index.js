import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Story from  '../Story';
import Home from '../Home';
import './RouterOuter.scss'

class RouterOuter extends Component {

  render() {
    return (
      <div className="outer">
        <Router>
          <Switch>
            <Route path="/stories/:storyId" component={Story} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default RouterOuter;
