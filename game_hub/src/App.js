import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import { Home } from './components/Home/Home';
import { Counter } from './components/Counter/Counter';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Routes>
          <Route path="/counter" exact component={Counter} />
          <Route path="/" exact component={Home} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
