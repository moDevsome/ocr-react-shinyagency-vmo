/**
 * Composant permettant l'affichage d'une loader
 */
function LoaderComponent({ loaderState }) {

    return(
        <div className="loader-container" style={
            {display: loaderState ? 'flex' : 'none'}
        }><div className="loader"><span></span></div></div>
    )

}

export default LoaderComponent;