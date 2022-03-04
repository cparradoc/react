import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { makepuzzle, solvepuzzle } from "sudoku";

export const Sudoku = () => {

  const [cellBoard, setCellBoard] = useState(null);
  const [sudokuDone, setSudokuDone] = useState(false);

  useEffect (() => {
    const newBoard = makepuzzle();
    setSudokuDone(solvepuzzle(newBoard));
    
    for (let i = 0; i < newBoard.length; i++) {
      if (newBoard[i] === null) {
        newBoard[i] = '';
      }
    }

    setCellBoard(newBoard);

  });

  const handleFormSubmit = e => {

  };

  const createBoard = () => {
    
  };

  const restartGame = () => {

  };


  return (
    <div>
    <Link to="/">Go back to main game hub menu</Link>
      <h1>Sudoku</h1>
        <button onClick={restartGame}>Restart game</button>
      <form onSubmit={handleFormSubmit}>

      </form>
    </div>
  );
};