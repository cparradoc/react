import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
        <h1>Welcome to Upgrade Hub!</h1>
        <h2>Juegos:</h2>
        <nav>
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
        </nav>
    </div>
  );
};