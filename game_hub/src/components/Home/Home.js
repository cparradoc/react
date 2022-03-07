import React from 'react';
import { Link} from 'react-router-dom';
import './Home.css'

export const Home = () => {
  return (
    <div>
        <h1>Welcome to Game Hub!</h1>
        <h2>Juegos:</h2>
        <div className ="nav">
          <button style={{background: "#b5e7a0", color: "black", margin: "20px", padding: "20px"}}><Link to="/tictactoe">Go to Tictactoe</Link></button>
          <button style={{background: "#ffef96", color: "black", margin: "20px", padding: "20px"}}><Link to="/hangman">Go to Hangman</Link></button>
          <button style={{background: "#f4a688", color: "black", margin: "20px", padding: "20px"}}><Link to="/sudoku">Go to Sudoku</Link></button>
        </div>
    </div>
  );
};