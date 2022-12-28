// ==> on importe la librairie PropTypes afin d'implémenter le typage
// @see https://reactjs.org/docs/typechecking-with-proptypes.html
import PropTypes from 'prop-types';

import DefaultPicture from '../assets/default-picture.png'

/**
 * Composant permettant de reproduire les cartes présentes sur la page Freelance
 * style: "/scss/components/_card.scss"
 */
function CardCompoment({ key, label, title, picture = DefaultPicture }) {

    return(
        <div key={ key } className="card-component">
            <span>{ label }</span>
            <img src={ picture } alt="Le freelance" height={ 80 } width={ 80 }/>
            <span>{ title }</span>
        </div>
    )

}

// On définis le type de chaque propriété en utilisant PropType
CardCompoment.propTypes = {
    label: PropTypes.string.isRequired,
    picture: PropTypes.string,
    title: PropTypes.string
}

export default CardCompoment;