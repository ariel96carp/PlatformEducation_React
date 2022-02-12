import propTypes from "prop-types"

const CourseSpeciality = ({ picture, title, information }) => {
    return (
        <div className="course-speciality s-100 m-80 l-60">
            <img src={picture}></img>
            <div className="speciality-content">
                <h3 className="title">{title}</h3>
                <p className="info">{information}</p>
            </div>
        </div>
    )
}

CourseSpeciality.propTypes = {
    picture: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    information: propTypes.string.isRequired
}

export default CourseSpeciality
