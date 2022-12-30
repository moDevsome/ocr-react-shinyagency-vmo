/**
 * Freelances Page
 * route: "/freelances"
 */

import { useEffect, useState } from 'react'
import CardCompoment from '../components/CardComponent'
import ErrorPage from './ErrorPage';

function FreelancesPage({ updateLoaderState }) {

    // Récupère la liste des freelances via l'API
    const [freelancersList, updateFreelancersList] = useState([]); // on initialise le state "freelancersList"
    const [fetchError, updateFetchError] = useState(false); // on initialise le state "fetchError"
    useEffect(() => {

        if(fetchError === false) { // Etat initiale, si le composant et re-render avec un fetchError === false, l'API n'est pas recontacté

            updateLoaderState(true); // ==> important, doit être fait à l'intérieur du useEffect
            fetch('http://localhost:8000/freelances')
                .then( (response) => response.json() )
                .then( (data) => {

                    updateFreelancersList(data.freelancersList);
                    updateLoaderState(false); // ==> masque le loader

                } )
                .catch( (error) => {

                    console.error( "fetch('http://localhost:800/freelances') ==> ERROR" );
                    console.error( error );
                    updateLoaderState(false); // ==> masque le loader
                    updateFetchError(true); // ==> déclenche l'erreur

                } )

        }

    }, [ updateLoaderState, fetchError ] )

    if(fetchError === true) return <ErrorPage code={ 500 }/>

    return(
        <div id="freelance-card-wrapper">
        {
            freelancersList.map( (profile, index) => {
                return(
                    <CardCompoment
                        key={ profile.name +'-'+ index }
                        label={ profile.job }
                        picture={ profile.picture }
                        title={ profile.name }
                    />
                )

            } )
        }
        </div>
    )

}

export default FreelancesPage;