import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

export const Home = () => {
  return (
    <div>
        <h1>Welcome to Game Hub!</h1>
        <h2>Juegos:</h2>
        <div class ="nav">
            <a>
                <Link to="/counter">Go to counter</Link>
            </a>
            <a>
                <Link to="/tictactoe">Go to Tictactoe</Link>
            </a>
            <a>
                <Link to="/hangman">Go to Hangman</Link>
            </a>
            <a>
                <Link to="/sudoku">Go to Sudoku</Link>
            </a>
        </div>
    </div>
  );
};