import React from 'react';
import { useEffect, useState } from "react";
import './Tictactoe.css'

export const Tictactoe = () => {

    //propiedad del estado de tipo boolean para comenzar/resetear partida
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        if(isStarted) {
            console.log("Partida comenzada!");
        } else {
            console.log("Partida reiniciada!");
        }
    }, [isStarted]);




    return (
      <div>
        <h1>Tictactoe</h1>
        <button className="start" onClick={() => setIsStarted(!isStarted)}>Start Game</button>
      </div>
    );
  };