import React, { useState } from 'react';
import { useEffect } from "react";

export const Hangman = () => {

  const [word, setWord] = useState(""); //palabra
  const [letter, setLetter] = useState(""); //letra
  const [hint, setHint] = (""); //pista
  const numberOfTries = 6;
  const [nTry, setNTry] = useState(0);


    return (
      <div>
        <h1>Hangman</h1>
      </div>
    );
  };