import propTypes from "prop-types"
import { Link } from "react-router-dom"

const Card = ({ image, title, description, path, id }) => {
    return (
        <div className="card-container">
            <img src={image} alt={`Curso de ${title}`} className="course-image"></img>
            <div className="content">
                <Link to={`${path}/${id}`} className="image-link">
                    <h3 className="title">{title}</h3>
                </Link>
                <p className="description">{description}</p> 
            </div>
        </div>
    )
}

Card.propTypes = {
    image: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    path: propTypes.string.isRequired,
    id: propTypes.number.isRequired
}

export default Card
