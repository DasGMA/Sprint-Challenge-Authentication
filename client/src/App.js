import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Jokes from './components/Jokes';
import Login from './components/Login';
import Register from './components/Register';
import Navigation from './components/Navigation';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Navigation />
       
          <Route path='/api/jokes' component={Jokes} />
          <Route path='/api/login' component={Login} />
          <Route path='/api/register' component={Register} />
       
      </div>
      </Router>
    );
  }
}

export default App;
