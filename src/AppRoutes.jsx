/**
 * Ce composant définis les différentes Routes de l'appli web
 */
import { Route, Routes } from 'react-router-dom'; // ==> importe les composants Route et Routes, ces composants vont être utilisés par le router

// Importe les pages
import HomePage from './pages/HomePage';
import { SurveyPage, SurveyPageQuestion } from './pages/SurveyPage';
import NotfoundErrorPage from './pages/NotfoundErrorPage';
import FreelancesPage from './pages/FreelancesPage';
import ResultsPage from './pages/ResultsPage';

function AppRoutes({ loaderState, updateLoaderState }) {

    return(
        <Routes>
            <Route path="/" element={ <HomePage/> }/>
            <Route path="/freelances" element={ <FreelancesPage/> }/>
            <Route path="/results" element={ <ResultsPage/> }/>
            <Route path="/survey" element={ <SurveyPage/> }/>
            <Route path="/survey/:number" element={ <SurveyPageQuestion loaderState={ loaderState } updateLoaderState={ updateLoaderState }/> }/>
            <Route path="*" element={ <NotfoundErrorPage/> }/>
        </Routes>
    );

}

export default AppRoutes;