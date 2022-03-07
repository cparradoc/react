import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import { Home } from './components/Home/Home';
import { Counter } from './components/Counter/Counter';
import { Tictactoe } from './components/Tictactoe/Tictactoe';
import { Hangman } from './components/Hangman/Hangman';
import { Sudoku } from './components/Sudoku/Sudoku';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/tictactoe" exact element={<Tictactoe />} />
          <Route path="/hangman" exact element={<Hangman />} />
          <Route path="/sudoku" exact element={<Sudoku />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
