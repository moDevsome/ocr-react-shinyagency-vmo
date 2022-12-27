/**
 * Composant permettant de rendre l'en-tête de l'appli web
 */
import { Link } from "react-router-dom"; // ==> importe le composant Link qui va nous permettre de faire une navigation connectée au router

function HeaderComponent() {

    return(
        <header>
            <h1>Hello !!<br />je suis l'en-tete de l'application</h1>
            <div id="nav-container">
                <h2>Navigation de l'appli web</h2>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/survey">Survey</Link>
                </nav>
            </div>
        </header>
    );

}

// Un seul element à exporter
export default HeaderComponent;