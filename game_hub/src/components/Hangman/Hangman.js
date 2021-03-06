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
        if ( word[i] === letter) {
          updatedHint[i] = letter;
        }
      }
      setHint(updatedHint);
      let hasWin = true;
      for (let i = 0; i < updatedHint.length;i++) {
        if (updatedHint[i] === "_") {
          hasWin = false;
        }
      }
      console.log(updatedHint);
      if (hasWin) {
        alert("!Enhorabuena! La palabra era " + word);
        restartGame();
      }
    }else if(!word.includes(letter)) {
      setNTry(nTry + 1);
      if(nTry === 5) {
        alert("Ya no te quedan más intentos");
        restartGame();
      }
    }
  }

  return (
      <div>
      <Link to="/"><button style={{background: "#87bdd8", color: "black", margin: "20px", padding: "20px"}}>Go back to main game hub menu</button></Link>
        <h1>Hangman</h1>

        <button onClick={restartGame}>Restart game</button>
        <h2>Número de intentos restantes: {numberOfTries - nTry}</h2>
        <h1>{hint}</h1>

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