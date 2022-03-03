import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from "react";

export const Hangman = () => {

  const [word, setWord] = useState(""); //palabra
  const [letter, setLetter] = useState(""); //letra
  const [cifredWord, setCifredWord] = useState("");
  const [hint, setHint] = (""); //pista
  const numberOfTries = 6;
  const [nTry, setNTry] = useState(0);
  const wordList = ["patata", "herbivoro", "onomatopeya", "lmao", "raticate", "lombriz", "tractor",
"wordle", "goiko"];

  

  const [restart, setRestart] = useState(false);

  useEffect(() => {
    setRestart(false);
    const tempWord = wordList[Math.floor(Math.random() * wordList.length)];
    setWord(tempWord);

    let bars = [];
    for(let i = 0; i < tempWord.length; i++){
      bars += "_ ";
    }
    setCifredWord(bars);

  },[restart]);

  function restartGame() {
    setNTry(0);
    setRestart(true);

  }

  const handleFormSubmit = (e) => {
    e.preventDefautl();
  }


    return (
      <div>
      <Link to="/">Go back to main game hub menu</Link>
        <h1>Hangman</h1>

        <button onClick={restartGame}>Restart game</button>
        <h2>Número de intentos restantes: {numberOfTries - nTry}</h2>
        <h1>{cifredWord}</h1>
        <h1>{word}</h1>

        <form onSubmit={handleFormSubmit}>

        </form>
      </div>
    );
  };