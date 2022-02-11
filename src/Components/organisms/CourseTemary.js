import propTypes from "prop-types"
import { Link } from "react-router-dom"

const CourseTemary = ({ title, description, subjects }) => {
    return (
        <div className="theme">
            <h3 className="theme-title">{title}</h3>
            <p className="theme-description">{description}</p>
            <ul className="theme-list">
                {subjects &&
                    subjects.map((subject) => (
                        <li
                            key={subject.subject.id}
                            className="theme-item"
                        ><Link to={`/clase/${subject.subject.id}`}>
                            {subject.subject.title}
                        </Link></li>
                        
                    ))
                }
            </ul>
        </div>
    )
}

CourseTemary.propTypes = {
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    subjects: propTypes.array.isRequired
}

export default CourseTemary
