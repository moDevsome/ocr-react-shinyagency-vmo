import React from "react";

/**
 * Page d'erreur 404, dans le cas où une erreur est provoquée par une page introuvable
 */
function NotfoundErrorPage(props) {

    // Voilà à quoi serve les fragments
    const message = typeof(props.message) === 'string' ? <React.Fragment><p>{ props.message }</p></React.Fragment> : '';

    return(

        <div className="page-wrapper" id="notfound-error-page">
            <b>Ceci est <i>un cul de sac</i> une erreur 404</b>
            { message }
        </div>
    )

}

export default NotfoundErrorPage;