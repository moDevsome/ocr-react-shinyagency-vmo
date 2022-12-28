/**
 * Composant permettant de rendre l'en-tête de l'appli web
 */
import { Link } from "react-router-dom"; // ==> importe le composant Link qui va nous permettre de faire une navigation connectée au router
import logo from '../assets/logo-shiny.png'; // ==> indique à Webpack que ce fichier JS utilise cette image

function HeaderComponent() {

    /* Le composant Link est importé de la dépendance "react-router-dom", il fonctionne grâce au fait que l'appli soit englobée dans le router */
    return(
        <header>
            <div id="logo-caontainer">
                <img alt="Agence Shiny, trouver un bon freelance" src={ logo }/>
            </div>
            <div id="nav-container">
                <nav>
                    <Link className="header-link" to="/">Accueil</Link>
                    <Link className="header-link" to="/freelances">Profils</Link>
                    <Link className="header-link header-link__do-test" to="/survey">Faire le test</Link>
                </nav>
            </div>
        </header>
    );

}

// Un seul element à exporter
export default HeaderComponent;