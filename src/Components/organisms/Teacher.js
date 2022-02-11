import propTypes from "prop-types"
import teacherImage from "../img/quiroga-profe.jpg"

const Teacher = ({ image, name, country }) => {
    return (
        <div className="teacher-container center-content">
            <img src={image} alt={`Foto de ${name}`} className="image"></img>
            <h3 className="name">{name}</h3>
            <p className="country">{country}</p>
        </div>
    )
}

Teacher.propTypes = {
    image: propTypes.string,
    name: propTypes.string.isRequired,
    country: propTypes.string.isRequired
}

Teacher.defaultProps = {
    image: teacherImage
}

export default Teacher
