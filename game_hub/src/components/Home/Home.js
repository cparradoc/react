import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Home.css'

export const Home = () => {
  return (
    <div>
        <h1>Welcome to Game Hub!</h1>
        <h2>Juegos:</h2>
        <div className ="nav">
            <Link to="/counter">Go to counter</Link>
            <Link to="/tictactoe">Go to Tictactoe</Link>
            <Link to="/hangman">Go to Hangman</Link>
            <Link to="/sudoku">Go to Sudoku</Link>
        </div>
    </div>
  );
};