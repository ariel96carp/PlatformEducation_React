import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const PublicMenu = ({ hideMenu }) => {
    return (
        <ul className="menu">
            <li className="item">
                <Link 
                    to="/login"
                    className="link" 
                    onClick={hideMenu}>
                Login</Link>
            </li>
            <li className="item">
                <Link 
                    to="/registro"
                    className="link" 
                    onClick={hideMenu}>
                Registro</Link>
            </li>
        </ul>
    )
}

PublicMenu.propTypes = {
    hideMenu: PropTypes.func.isRequired
}

export default PublicMenu

