import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from "react";

export const Hangman = () => {

  const [word, setWord] = useState(""); //palabra
  const [letter, setLetter] = useState(""); //letra
  const [hint, setHint] = (""); //pista
  const numberOfTries = 6;
  const [nTry, setNTry] = useState(0);
  const wordList = ["patata", "herbivoro", "onomatopeya", "lmao", "raticate"];

  

  const [restart, setRestart] = useState(false);

  useEffect(() => {
    restartGame();
    const tempWord = wordList[Math.floor(Math.random() * wordList.length)];
    setWord(tempWord);

  },[restart]);

  function restartGame() {
    setNTry(0);
    setRestart(false);

  }


    return (
      <div>
      <Link to="/">Go back to main game hub menu</Link>
        <h1>Hangman</h1>

        <button onClick={restartGame}>Restart game</button>
        <h2>Número de intentos restantes: {numberOfTries - nTry}</h2>
        <h1>{word}</h1>
      </div>
    );
  };