/**
 * Point d'entrée de l'appli Web
 */
// import { Route, Routes } from 'react-router-dom'; // ==> importe les composants Route et Routes, ces composants vont être utilisés par le router

// Importe les composants
import AppRoutes from './AppRoutes';
import HeaderComponent from './components/HeaderComponent';

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

    return(
        <div id="app-body">
            <HeaderComponent/>
            <div id="main-area">
                <AppRoutes/>
            </div>
        </div>
    )

}

// Un seul element a exporter
export default App