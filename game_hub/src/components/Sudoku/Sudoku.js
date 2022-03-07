import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { makepuzzle, solvepuzzle } from "sudoku";
import Grid from '@material-ui/core/Grid';
import {Alert, Button} from 'react-native';
import './Sudoku.css';

export const Sudoku = () => {

  const [cellBoard, setCellBoard] = useState(null);
  const [sudokuDone, setSudokuDone] = useState(null);
  const [renderSudoku, setRenderSudoku] = useState(0);
  const [sudokuRendered, isSudokuRendered] = useState(false);
  const [wrongSudoku, isWrongsudoku] = useState(false);

  const [redo, setRedo] = useState(false);
  const [backupSudoku, setBackupSudoku] = useState(null);
  const [backupDone, setBackupDone] = useState(null);


  useEffect (() => {
    const newBoard = makepuzzle();
    setSudokuDone(solvepuzzle(newBoard));
    
    for (let i = 0; i < newBoard.length; i++) {
      if (newBoard[i] === null) {
        newBoard[i] = '';
      }
    }

    if (redo) {
      setCellBoard(backupSudoku);
      setSudokuDone(backupDone);
    }
    else {
      setCellBoard(newBoard);
    }
    isSudokuRendered(true);
  }, [renderSudoku]);

  const handleFormSubmit = e => {
    e.preventDefault();
    setBackupSudoku(cellBoard);
    setBackupDone(sudokuDone);
    if(cellBoard.toString() === sudokuDone.toString()) {
      alert("¡Enhorabuena, has completado el sudoku!");
      setRenderSudoku(!renderSudoku);
      restartGame();
    } else {
      alert('¡Oh no, me temo que este no es el resultado correcto!');
      isWrongsudoku(true);
      setRenderSudoku(!renderSudoku);
      //aqui opciones de seguir o de ver la solución y terminar partida
    }
  };

  const CreateBoard = () => {
    if (sudokuRendered == true){
      let board = [];
      let row = [];
      let nRows = Math.sqrt(cellBoard.length);
      for (let i = 0, j = 0; i <= cellBoard.length; i++, j++) {
        if (j >= nRows) {
          j = 0;
          board.push(<Grid container className="row" key={j+i} spacing={6}>{row}</Grid>)
          row = [];
        }

        if (cellBoard[i] !== '') {
          row.push(
            <Grid className="row" key={i} item xs={Math.floor(12/nRows)}>
              <input type="text" style={{width: "50px", height: "50px", textAlign: "center"}} value={cellBoard[i]} disabled='disabled'/>
            </Grid>
          );
        }
        else {
          row.push(
          <Grid key={i} className="row" item xs={Math.floor(12/nRows)}>
            <input  type="text" value={cellBoard[i]} onChange={e => {
              let value = e.target.value;
              let tempBoard = [...cellBoard];
              if (value.length == 1) {
                if (Number.isNaN(parseInt(value))) {
                  tempBoard[i] = ""
                }else {
                  tempBoard[i] = parseInt(value);
                }
                setCellBoard(tempBoard);
              }
            }} style={{width: "50px", height: "50px", textAlign: "center"}}></input>
          </Grid>);
        }
      }

      return <Grid>{board}</Grid>
    }
    return <h1> Un segundo, aun no está listo su Sudoku</h1>
    


  };

  const restartGame = () => {
    isWrongsudoku(false);
    setRedo(false);
    setRenderSudoku(!renderSudoku);
  };

  const showSolution = () => {
    alert(backupDone);
    restartGame();
  }

  const keepPlaying = () => {
    setRedo(true);
    isWrongsudoku(false);
    setRenderSudoku(!renderSudoku);
  }


  return (
    <div>
      <Link to="/">Go back to main game hub menu</Link>
      <h1>Sudoku</h1>
      <button style={{margin: "20px"}} onClick={restartGame}>Restart game</button>
      {wrongSudoku? (
        <div>
          <button onClick={showSolution} style={{margin: "20px"}}>Ver solución</button>
          <button onClick={keepPlaying} style={{margin: "20px"}}>Seguir intentándolo</button>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <CreateBoard></CreateBoard>
          <button type="submit" value="Submit" style={{margin: "20px"}}>Comprobar</button>
      </form>
      )}
      

    </div>
  );
};