import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // ==> importe le point d'entrée
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * Je désactive le StrictMode car cela provoque un comportement très genant pour le développement (des render fait en double par exemple...)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
root.render( <App /> );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//
// Je désactive par défaut
// reportWebVitals();
