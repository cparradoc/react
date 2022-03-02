import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    //desde el punto en el que se renderiza el Provider hacia abajo, todos los componentes podran acceder
    //al estado compartido
    <Provider store={store}> //store tiene toda la configuracion inicial de Redux y sus funciones
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
