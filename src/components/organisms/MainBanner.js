import propTypes from "prop-types"
import { Link } from "react-router-dom"
import bannerImage from "../img/programacion-cero.png"

const MainBanner = ({ title, description }) => {
    return (
        <div className="main-banner section-padding">
            <div className="wrapper">
                <div className="content-container">
                    <div className="content">
                        <h1 className="title">{title}</h1>
                        <p className="description">{description}</p>
                        <Link to="/cursos" className="button">Ver cursos</Link>
                    </div>
                    <img src={bannerImage} className="image"></img>
                </div>
            </div>
        </div>
    )
}

MainBanner.propTypes = {
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired
}

export default MainBanner
