import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { makepuzzle, solvepuzzle } from "sudoku";
import Grid from '@material-ui/core/Grid';

export const Sudoku = () => {

  const [cellBoard, setCellBoard] = useState(null);
  const [sudokuDone, setSudokuDone] = useState(false);
  const [renderSudoku, setRenderSudoku] = useState(0);
  const [sudokuRendered, isSudokuRendered] = useState(false);

  useEffect (() => {
    const newBoard = makepuzzle();
    setSudokuDone(solvepuzzle(newBoard));
    
    for (let i = 0; i < newBoard.length; i++) {
      if (newBoard[i] === null) {
        newBoard[i] = '';
      }
    }

    setCellBoard(newBoard);

  }, [renderSudoku]);

  const handleFormSubmit = e => {

  };

  const CreateBoard = () => {
    if (isSudokuRendered){
      let board = [];
      /*for (let i = 0; i < cellBoard.length; i++) {

      }*/

      return <Grid>{board}</Grid>
    } else {
      return <h1> Un segundo, aun no está listo su Sudoku</h1>
    }
    


  };

  const restartGame = () => {

  };


  return (
    <div>
    <Link to="/">Go back to main game hub menu</Link>
      <h1>Sudoku</h1>
        <button onClick={restartGame}>Restart game</button>
      <form onSubmit={handleFormSubmit}>
        <CreateBoard></CreateBoard>
      </form>
    </div>
  );
};