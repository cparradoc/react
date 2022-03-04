import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { makepuzzle, solvepuzzle } from "sudoku";

export const Sudoku = () => {

  const [cellBoard, setCellBoard] = useTtate(null);

  useEffect (() => {

  });

  const handleFormSubmit = e => {

  };


    return (
      <div>
      <Link to="/">Go back to main game hub menu</Link>
        <h1>Sudoku</h1>
        <form onSubmit={handleFormSubmit}>

        </form>
      </div>
    );
  };