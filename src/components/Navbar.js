import React, { useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'; 
import { animateScroll as scroll } from 'react-scroll';
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from '../images/main_logo.png'
import '../styles/navbar.scss'

const Header = () => {
    const location = useLocation()
    const pathname = window.location.pathname
    const [showMenu, setShowMenu] = useState(false)
    const scrollTop = () => {
        scroll.scrollToTop()
    }

    const clicked = () => setShowMenu(!showMenu);


    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem){
                elem.scrollIntoView({behaviour: "smooth"})
            } else {
                window.scrollTo({top:0, left:0, behavior: "smooth"})
            }
        }

    }, [location,])


    return (
        <>
        <div className="logo" onClick={scrollTop}><img src={ logo} alt="Logo" style={{"width": "4.5rem"}}/></div>

        { showMenu ? <FaTimes className="mobileIcons" onClick={() => {setShowMenu(!showMenu)}}/> : <FaBars className="mobileIcons" onClick={() => {setShowMenu(!showMenu)}}/> }
            <ul className={showMenu ? "navbar-items active": "navbar-items"} id="navbar-items">
                <li className="navbar-item">
                    <Link className="links" to='/' onClick={() => {
                        if (pathname === "/"){
                            scrollTop();
                        } 

                        clicked()
                    }}>Home</Link>
                </li>
                <li className="navbar-item"><Link className="links"  to="/#about" onClick={clicked}>About</Link></li>
                <li className="navbar-item"><Link className="links"  to="/#projects" onClick={clicked}>Projects</Link></li>

                <li className="navbar-item">
                <Link className="links"to='/contact' onClick={clicked}>Contact</Link>
                </li>
            </ul>
        </>
    )
}

export default Header
