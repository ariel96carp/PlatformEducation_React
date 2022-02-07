import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const PrivateMenu = ({ hideMenu }) => {
    return (
        <ul className="menu">
            <li className="item">
                <Link 
                    to="/"
                    className="link" 
                    onClick={hideMenu}>
                Inicio</Link>
            </li>
            <li className="item">
                <Link 
                    to="/especialidades"
                    className="link" 
                    onClick={hideMenu}>
                Especialidades</Link>
            </li>
            <li className="item">
                <Link 
                    to="/cursos" 
                    className="link"
                    onClick={hideMenu}>
                Cursos</Link>
            </li>
            <li className="item">
                <Link 
                    to="/profesores" 
                    className="link"
                    onClick={hideMenu}>
                Profesores</Link>
            </li>
        </ul>
    )
}

PrivateMenu.propTypes = {
    hideMenu: PropTypes.func.isRequired
}

export default PrivateMenu
