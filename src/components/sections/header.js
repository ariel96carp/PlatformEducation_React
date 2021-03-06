import edteamLogo from "../img/edteam-ux.svg"
import PrivateMenu from "../molecules/PrivateMenu"
import PublicMenu from "../molecules/PublicMenu"
import { useRef, useEffect } from "react"
import { connect } from "react-redux"

const Header = ({ userToken }) => {
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
                <img src={edteamLogo} alt="Logo de EDteam" className="edteam-image"></img>
                <div className="menu-toggle" onClick={showMenu}>
                    <div className="middle"></div>
                </div>
                <nav className="nav" ref={navMenu}>
                    {userToken
                        ? <PrivateMenu hideMenu={hideMenuFromItem} />
                        : <PublicMenu hideMenu={hideMenuFromItem}/>
                    }
                </nav>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => ({
    userToken: state.userReducer.token
})

export default connect(mapStateToProps, {})(Header)
