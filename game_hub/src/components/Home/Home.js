import React from 'react';
import { Link} from 'react-router-dom';
import './Home.css'

export const Home = () => {
  return (
    <div>
        <h1>Welcome to Game Hub!</h1>
        <h2>Juegos:</h2>
        <div className ="nav">
          <Link to="/tictactoe"><button style={{background: "#b5e7a0", color: "black", margin: "20px", padding: "20px"}}>Go to Tictactoe</button></Link>
          <Link to="/hangman"><button style={{background: "#ffef96", color: "black", margin: "20px", padding: "20px"}}>Go to Hangman</button></Link>
          <Link to="/sudoku"><button style={{background: "#f4a688", color: "black", margin: "20px", padding: "20px"}}>Go to Sudoku</button></Link>
        </div>
    </div>
  );
};