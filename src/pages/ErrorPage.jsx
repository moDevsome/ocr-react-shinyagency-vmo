import React from "react";

/**
 * Page d'erreur 404, dans le cas où une erreur est provoquée par une page introuvable
 * style: "./layouts/error-page"
 */
function ErrorPage(props) {

    const titles = {
        '404': <b>Ceci est <i>un cul de sac</i> une erreur 404</b>,
        '500': <b>Erreur système !!</b>
    }

    const title = typeof(props.code) === 'number' && Object.keys(titles).includes(props.code.toString()) ? titles[props.code] : 'Erreur inconnue !';

    // Voilà à quoi serve les fragments
    const message = typeof(props.message) === 'string' ? <React.Fragment><p>{ props.message }</p></React.Fragment> : '';

    return(

        <div className="page-wrapper" id="error-page">
            <h1>{ title }</h1>
            { message }
        </div>
    )

}

export default ErrorPage;