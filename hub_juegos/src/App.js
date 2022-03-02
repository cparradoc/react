import React from 'react';
import { Router } from 'react-router-dom';

import { Home } from './components/Home';
import { Counter } from './components/Counter';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
        <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Switch>
          <Route path="/counter" extract component={Counter} />
          <Route path="/" extract component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
