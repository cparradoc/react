import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from "react";

export const Hangman = () => {

  const [word, setWord] = useState(""); //palabra
  const [letter, setLetter] = useState(""); //letra
  const [hint, setHint] = useState(""); //pista
  const numberOfTries = 6;
  const [nTry, setNTry] = useState(0);
  const wordList = ["patata", "herbivoro", "onomatopeya", "lmao", "raticate", "lombriz", "tractor",
"wordle", "goiko"];

  
  const [restart, setRestart] = useState(0);

  useEffect(() => {
    setRestart(0);
    const tempWord = wordList[Math.floor(Math.random() * wordList.length)];
    setWord(tempWord);

    let bars = [];
    for(let i = 0; i < tempWord.length; i++){
      bars += "_";
    }
    setHint(bars);

  },[restart]);

  function restartGame() {
    setNTry(0);
    setRestart(1);

  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (word.includes(letter)) {
      let updatedHint = [...hint];
      for ( let i = 0; i < word.length; i++) {
        if ( word[i] == letter) {
          updatedHint[i] = letter;
        }
      }
      setHint(updatedHint);
    }else if(!word.includes(letter)) {
      setNTry(nTry + 1);
      if(nTry == 6) {
        restartGame();
      }
    }

  }


    return (
      <div>
      <Link to="/">Go back to main game hub menu</Link>
        <h1>Hangman</h1>

        <button onClick={restartGame}>Restart game</button>
        <h2>Número de intentos restantes: {numberOfTries - nTry}</h2>
        <h1>{hint}</h1>
        <h1>{word}</h1>

        <form onSubmit={handleFormSubmit} value={letter}>
          <input maxLength= "1" onChange={e => {
            setLetter(e.target.value.toLowerCase());
          }}></input>
          <button type="submit" value="Submit" variant="contained">Comprobar</button>
        </form>
        <p>{letter}</p>
      </div>
    );
  };