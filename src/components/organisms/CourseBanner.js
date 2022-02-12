import propTypes from "prop-types"

const CourseBanner = ({ name, subtitle, information, speciality, picture }) => {
    return (
        <div className="banner-container">
            <div className="banner-content">
                <h1 className="course-title">{name}</h1>
                <p className="course-description">{subtitle}</p>
                <p className="course-content">{information}</p>
                {speciality &&
                    <p>{
                        `Este curso forma parte de la especialidad`}
                        <span className="speciality"> {speciality}</span>
                    </p>
                }
            </div>
            <img src={picture} alt={`Imagen del curso ${name}`}></img>
        </div>
    )
}

CourseBanner.propTypes = {
    name: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
    information: propTypes.string.isRequired,
    speciality: propTypes.string,
    picture: propTypes.string.isRequired
}

export default CourseBanner
