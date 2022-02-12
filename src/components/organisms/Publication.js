import propTypes from "prop-types"

const Publication = ({ title, user, date, content }) => {
    return (
        <article className="publication">
            <h3 className="publication-title">{title}</h3>
            <p className="publication-info">
                <span className="user-name">{user}</span>{` a las ${date}`}
            </p>
            <p className="publication-content">{content}</p>
        </article>
    )
}

Publication.propTypes = {
    title: propTypes.string.isRequired,
    user: propTypes.string.isRequired,
    date: propTypes.string.isRequired,
    content: propTypes.string.isRequired
}

export default Publication
