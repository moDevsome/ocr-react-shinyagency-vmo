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
function SurveyPageQuestion() {

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
            <nav className="survey-pagination">
                { prevLink }
                { nextLink }
            </nav>
        </div>
    );

}

export { SurveyPage, SurveyPageQuestion };