import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import './Tictactoe.css';

export const Tictactoe = () => {

  //propiedad del estado de tipo boolean para comenzar/resetear partida
  const [isStarted, setIsStarted] = useState(0);
  //propiedad para terminar la partida
  const [isGameFinished, setGameFinished] = useState(false);
  //tablero de celdas en el que se jugará
  const [cellBoard, setCellBoard] = useState([]);
  //propiedad para determinar de quién es el turno, 0 turno de O y 1 turno de X
  const [turnOX, setTurnOX] = useState(0);



  const winCase = [ 
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  useEffect(() => {
    restartGame();
  }, [isGameFinished]);

    //caso en el que un jugador gane
    const checkWin = cellBoard =>{
      setGameFinished(true); //el tablero está lleno hasta que no se demuestre que hay alguna celda vacía
      for (let index in winCase) {
        let firstElement = cellBoard[winCase[index][0]].value;
        let secondElement = cellBoard[winCase[index][1]].value;
        let thirdElement = cellBoard[winCase[index][2]].value;
  
        if(firstElement == null || secondElement == null || thirdElement == null) {
          setGameFinished(false);
        }
      }
      for (let index in winCase) {
        let firstElement = cellBoard[winCase[index][0]].value;
        let secondElement = cellBoard[winCase[index][1]].value;
        let thirdElement = cellBoard[winCase[index][2]].value;
        
        if(firstElement != null && secondElement === firstElement && thirdElement === secondElement) {
          if(turnOX){
            alert("Ha ganado X");
            setGameFinished(true);
          }
          else {
            alert("Ha ganado O");
            setGameFinished(true);
          }
        }
      }
        
    }

  function changePlayer() {
    if(turnOX) {
      setTurnOX(0);
    }else {
      setTurnOX(1);
    }
  }

  function initializeBoard() {
    setCellBoard([
      [null], [null], [null],
      [null], [null], [null],
      [null], [null], [null],
    ]);
  }

  function restartGame() {
    setGameFinished(false);
    setIsStarted(1);
    initializeBoard();
  }

  //actualización de una celda tras hacer click sobre ella
  const updateCellValue = index => e => {
    if(cellBoard[index].value == null && isStarted){
      let newCellBoard = [...cellBoard];
      if (turnOX) {
        newCellBoard[index] = {...newCellBoard[index], value: 'X'};
      }
      else {
        newCellBoard[index] = {...newCellBoard[index], value: 'O'};
      }
      setCellBoard(newCellBoard);
      changePlayer();
      checkWin(newCellBoard);
    }
  }



  return (
    <div>
      <Link to="/"><button style={{background: "#87bdd8", color: "black", margin: "20px", padding: "20px"}}>Go back to main game hub menu</button></Link>
      <h1>Tictactoe</h1>
      
      {isStarted? (
      <button className="start" onClick={restartGame}>Restart Game</button>
      ) : (
      <button className="start" onClick={restartGame}>Start Game</button>
      )}
      {turnOX ? (
        <h2>Es el turno de X</h2>
      ) : (
        <h2>Es el turno de O</h2>
      )}
      <Grid container spacing={3}>
        {cellBoard.map((cell, index) =>
          <Grid  key={index} item xs={4} xl={4}>
            <button className='item' onClick={updateCellValue(index)}>{cell.value}</button>
          </Grid>)
        }
      </Grid>
    </div>
  );
};