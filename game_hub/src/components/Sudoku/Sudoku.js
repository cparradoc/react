import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { makepuzzle, solvepuzzle } from "sudoku";
import Grid from '@material-ui/core/Grid';
import './Sudoku.css';

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
    isSudokuRendered(true);
  }, [renderSudoku]);

  const handleFormSubmit = e => {
    e.preventDefault();

    if(cellBoard === sudokuDone) {
      alert("¡Enhorabuena, has completado el sudoku!");
      setRenderSudoku(!renderSudoku);
    } else {
      alert("¡Oh no, me temo que este no es el resultado correcto!");
      //aqui opciones de seguir o de ver la solución y terminar partida
    }
  };

  const CreateBoard = () => {
    if (sudokuRendered === true){
      console.log(cellBoard);
      let board = [];
      let row = [];
      let nRows = Math.sqrt(cellBoard.length);
      for (let i = 0, j = 0; i <= cellBoard.length; i++, j++) {
        console.log(j);
        if (j >= nRows) {
          console.log(j);
          console.log(nRows);
          j = 0;
          board.push(<Grid container className="row" key={j+i} spacing={9}>{row}</Grid>)
          row = [];
          console.log(row);
        }

        if (cellBoard[i] !== '') {
          row.push(
            <Grid className="row" key={i} item xs={Math.floor(12/nRows)}>
              <input type="text" style={{width: "50px", height: "50px"}} value={cellBoard[i]} disabled='disabled'/>
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
            }} style={{width: "50px", height: "50px"}}></input>
          </Grid>);
        }
      }

      return <Grid>{board}</Grid>
    }
    return <h1> Un segundo, aun no está listo su Sudoku</h1>
    


  };

  const restartGame = () => {

  };


  return (
    <div>
      <Link to="/">Go back to main game hub menu</Link>
      <h1>Sudoku</h1>
      <button style={{margin: "20px"}} onClick={restartGame}>Restart game</button>
      <form onSubmit={handleFormSubmit}>
        <CreateBoard></CreateBoard>
        <button type="submit" value="Submit" style={{margin: "20px"}}>Comprobar</button>
      </form>
    </div>
  );
};