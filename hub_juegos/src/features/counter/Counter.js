import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Importamos las acciones y selectores del slice.
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  // Con useSelector gestionaremos de forma automática los selectores.
  const count = useSelector(selectCount);
  // Usaremos dispatch para lanzar acciones que activan reducers.
  // dispatch invocará dentro a una action enviando payload si fuese necesario.
  const dispatch = useDispatch();
  // Definimos un state local que inicie el incremento en el número que queramos
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          // Cada vez que pulsemos el botón, lanzamos el dispatch con la
          // cantidad que tenga el state local del componente
          onClick={() => dispatch(incrementByAmount(Number(incrementValue) || 0))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
