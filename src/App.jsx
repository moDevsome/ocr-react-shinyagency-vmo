/**
 * Point d'entrée de l'appli Web
 */
// import { Route, Routes } from 'react-router-dom'; // ==> importe les composants Route et Routes, ces composants vont être utilisés par le router

// Importe les composants
import { useState } from 'react';
import AppRoutes from './AppRoutes';
import HeaderComponent from './components/HeaderComponent';
import LoaderComponent from "./components/LoaderComponent";

// Importe les pages
/*
import HomePage from './pages/HomePage';
import { SurveyPage, SurveyPageQuestion } from './pages/SurveyPage';
import NotfoundErrorPage from './pages/NotfoundErrorPage';
*/

/**
 * Composant englobant la totalité de l'application
 * La partie Routes permet de rendre dynamique le contenu de la zone centrale en fonction de l'URL
 * @return jsx
 */
function App() {

    // On définis l'état du loader qui sera utilisés par tous les composants enfants de l'App
    const [ loaderState, updateLoaderState ] = useState(false);

    return(
        <div id="app-body">
            <HeaderComponent/>
            <div id="main-area">
                <AppRoutes loaderState={ loaderState } updateLoaderState={ updateLoaderState }/>
            </div>
            <LoaderComponent loaderState={ loaderState }/>
        </div>
    )

}

// Un seul element a exporter
export default App