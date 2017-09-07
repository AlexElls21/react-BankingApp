import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Private from './components/Private/Private'

import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={ Login } />
        <Route exact path='/private' component={ Private } />
        
          
          
      </div>
    );
  }
}

export default App;
