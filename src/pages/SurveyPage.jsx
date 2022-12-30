import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// => on importe le hook useParams qui va nous permettre d'afficher des élements dynamiquement en fonction des paramètres passés dans l'URL
import { useParams } from "react-router-dom";

import NotfoundErrorPage from "./NotfoundErrorPage";

/**
 * Page d'acceuil du questionnaire
 * Route: "/survey">
 */
function SurveyPage() {

    return(
        <div className="page-wrapper" id="survey">
            <h2>Bienvenu sur page du questionnaire</h2>
            <p>
                <a href="/survey/1">Cliquer ici pour commencer avec la 1ere question.</a>
            </p>
        </div>
    );

}

/**
 * Page de détail d'une question du questionnaire
 * Route: "/survey/:number">
 */
function SurveyPageQuestion({ updateLoaderState }) {

    // On initialise l'objet contenant les questions, l'objet sera ensuite alimenté via un Api Call
    const [questions, updateQuestions] = useState({});

    // On appel l'API du cours pour récupérer les questions avec le userEffect qui va être executé au 1er render
    // Lien du Github de l'API : https://github.com/OpenClassrooms-Student-Center/7150606-API-React-intermediaire
    useEffect(() => {

        updateLoaderState(true); // ==> Affiche le loader pendant la récupération des données via l'API
        setTimeout(() => {

            fetch('http://localhost:8000/survey')
                .then( (response) => response.json() )
                .then( ({ surveyData }) => {

                    updateQuestions(surveyData);
                    updateLoaderState(false); // ==> masque le loader

                } )
                .catch( (error) => console.log(error) )

        }, 500);

    }, [ updateLoaderState ]); // ==> on doit ajouter "updateLoaderState" en tant que dépendance sinon on a un Warning, je ne sais pas ce que cela change... mais avec ou sans ça fonctionne.

    // On récupère la paramètre ":number" via le hook useParams
    // ATTENTION cela retourne une "string" même si la valeur est un entier
    const { number } = useParams();
    const numberInt = number.match(/[0-9]/g).length === number.length ? parseInt(number) : -1;

    if(isNaN(numberInt) || numberInt <= 0 || numberInt > 10) {

        // On "déclenche" une erreur 404
        return(
            <NotfoundErrorPage message="Cette question n'existe pas"/>
        )

    }

    const prevLink = number > 1 ? <Link to={ '/survey/'+ (numberInt - 1).toString() }>Question précédente</Link> : '';
    const nextLink = number < 10 ? <Link to={ '/survey/'+ (numberInt + 1).toString() }>Question suivante</Link> : '';

    return(

        <div className="page-wrapper" id="survey">
            <p>Vous êtes bien sur la page de la question { number }</p>
            <p><u>Question</u> : { questions[ number ] }</p>
            <nav className="survey-pagination">
                { prevLink }
                { nextLink }
            </nav>
        </div>
    );

}

export { SurveyPage, SurveyPageQuestion };