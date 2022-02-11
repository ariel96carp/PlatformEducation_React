import propTypes from "prop-types"

const Banner = ({ title, description, classname }) => {
    return (
        <div className={`banner ${classname ? classname : ""}`}>
            <div className="wrapper center-content">
                <h2 className="title">{title}</h2>
                <p className="description">
                    {description}
                </p>
            </div>
        </div>
    )
}

Banner.propTypes = {
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    classname: propTypes.string
}

export default Banner
