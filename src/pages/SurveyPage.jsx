// => on importe le hook useParams qui va nous permettre d'afficher des élements dynamiquement en fonction des paramètres passés dans l'URL
import { useParams } from "react-router-dom";

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
    const { number } = useParams();

    return(

        <div className="page-wrapper" id="survey">
            <p>Vous êtes bien sur la page de la question { number }</p>
        </div>
    );

}

export { SurveyPage, SurveyPageQuestion };