import { Link } from "react-router-dom"
import { useRef, useEffect } from "react"
import PropTypes from "prop-types"

const PrivateMenu = ({ hideMenu }) => {
    const closeButton = useRef()
    useEffect(() => {
        const deleteToken = () => {
            localStorage.removeItem("educationToken")
        }

        closeButton.current.addEventListener("click", deleteToken)
    }, [])

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
            <li className="item">
                <Link
                    ref={closeButton}
                    to="/login"
                    className="link"
                    onClick={hideMenu}>
                Cerrar sesión</Link>
            </li>
        </ul>
    )
}

PrivateMenu.propTypes = {
    hideMenu: PropTypes.func.isRequired
}

export default PrivateMenu
