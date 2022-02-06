import edteamLogo from "../img/logo-alt.svg"
import { useRef, useEffect } from "react"
import { Link } from "react-router-dom"

const Header = () => {
    const navModal = useRef()
    const navMenu = useRef()
    useEffect(() => {
        const hideMenu = () => {
            const mediumBp = matchMedia(`(min-width: ${640 / 16}rem)`)
            if (mediumBp.matches)
            {
                if (navMenu.current.classList.contains("show"))
                {
                    navMenu.current.classList.remove("show")
                    navModal.current.classList.remove("active")
                    document.body.style.overflow="visible"
                }
            }
        }
        
        window.addEventListener("resize", hideMenu)
        return (() => {
            window.removeEventListener("resize", hideMenu)
        })
    }, [])

    const showMenu = () => {
        navMenu.current.classList.toggle("show")
        if (navMenu.current.classList.contains("show"))
        {
            navModal.current.classList.add("active")
            document.body.style.overflow="hidden"
        }
        else
        {
            navModal.current.classList.remove("active")
            document.body.style.overflow="visible"
        }
    }

    const hideMenuFromItem = () => {
        if (navMenu.current.classList.contains("show"))
        {
            navMenu.current.classList.remove("show")
            navModal.current.classList.remove("active")
            document.body.style.overflow = "visible"
        }
    }

    return (
        <header className="main-header">
            <div className="modal" ref={navModal}></div>
            <div className="wrapper">
                <img src={edteamLogo} alt="Logo de EDteam"></img>
                <div className="menu-toggle" onClick={showMenu}>
                    <div className="middle"></div>
                </div>
                <nav className="nav" ref={navMenu}>
                    <ul className="menu">
                        <li className="item">
                            <Link 
                                to="/"
                                className="link" 
                                onClick={hideMenuFromItem}>
                            Inicio</Link>
                        </li>
                        <li className="item">
                            <Link 
                                to="/especialidades"
                                className="link" 
                                onClick={hideMenuFromItem}>
                            Especialidades</Link>
                        </li>
                        <li className="item">
                            <Link 
                                to="/cursos" 
                                className="link"
                                onClick={hideMenuFromItem}>
                            Cursos</Link>
                        </li>
                        <li className="item">
                            <Link 
                                to="/profesores" 
                                className="link"
                                onClick={hideMenuFromItem}>
                            Profesores</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
