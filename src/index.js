/**
 * Point d'entrée du framework et des fichiers compilés par Webpack
 */
import React from "react"; // ==> on importe le framework React
import ReactDOM from "react-dom/client"; // ==> on importe react-dom pour permettre la modification des élements du DOM

// ==> on importe BrowserRouter pour le router
// @see https://blog.webdevsimplified.com/2022-07/react-router/
import { BrowserRouter } from "react-router-dom";

import App from "./App"; // ==> on importe le point d'entrée de notre application

import "./styles/index.css";

// On instancie notre application, elle sera "wrapper" dans le router
ReactDOM.createRoot( document.getElementById('root') ).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);