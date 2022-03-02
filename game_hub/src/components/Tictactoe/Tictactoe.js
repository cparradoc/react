import React from 'react';
import { useEffect, useState } from "react";
import './Tictactoe.css'

export const Tictactoe = () => {

    //propiedad del estado de tipo boolean para comenzar/resetear partida
    const [isStarted, setIsStarted] = useState(0);
    //propiedad para terminar la partida
    const [isGameFinished, setGameFinished] = useState(false);
    //tablero de celdas en el que se jugará
    const [cellBoard, setCellBoard] = useState([]);

    const winCase = [ 
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    useEffect(() => {
        if(!isStarted) {
            console.log("Partida comenzada!");
        } else {
            console.log("Partida reiniciada!");
        }
    }, [isStarted]);


    function restartGame() {
      setGameFinished(false);
      setIsStarted(1);
    }

    return (
      <div>
        <h1>Tictactoe</h1>
        <button className="start" onClick={restartGame}>Start Game</button>
      </div>
    );
  };