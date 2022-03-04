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
  });

  const handleFormSubmit = e => {

  };

  const CreateBoard = () => {

  }


  return (
    <div>
    <Link to="/">Go back to main game hub menu</Link>
      <h1>Sudoku</h1>
      <form onSubmit={handleFormSubmit}>

      </form>
    </div>
  );
};