/**
 * Freelances Page
 * route: "/freelances"
 */

import ProfilePicture from '../assets/profile.png'
import CardCompoment from '../components/CardComponent'

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: ProfilePicture
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: ProfilePicture
    },
    {
        name: 'Laurene Ipsium',
        picture: ProfilePicture
    },
]

function FreelancesPage() {

    return(
        <div id="freelance-card-wrapper">
        {
            freelanceProfiles.map( (profile, index) => {

                return(
                    <CardCompoment
                        key={ profile.name +'-'+ index }
                        label={ profile.jobTitle }
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