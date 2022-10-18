import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/main_logo.png";
import "../styles/navbar.scss";

const scrollToElement = (location) => {
	removeHash();
	let elem = document.getElementById(location.hash.slice(1));
	if (elem) elem.scrollIntoView({ behaviour: "smooth" });
	else window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

const scrollTop = () => {
	scroll.scrollToTop({ duration: 50 });
};
const removeHash = () => {
	// eslint-disable-next-line no-restricted-globals
	history.replaceState("", document.title, window.location.origin + window.location.pathname + window.location.search);
};

const Header = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const location = useLocation();
	const clicked = () => setShowMobileMenu(!showMobileMenu);

	useEffect(() => {
		scrollToElement(location);
	}, [location]);

	return (
		<>
			<div className="logo" onClick={scrollTop}>
				<img src={logo} alt="Logo" style={{ width: "4.5rem" }} />
			</div>

			{showMobileMenu ? (
				<FaTimes
					className="mobileIcons"
					onClick={() => {
						setShowMobileMenu(!showMobileMenu);
					}}
				/>
			) : (
				<FaBars
					className="mobileIcons"
					onClick={() => {
						setShowMobileMenu(!showMobileMenu);
					}}
				/>
			)}
			<ul className={showMobileMenu ? "navbar-items active" : "navbar-items"} id="navbar-items">
				<li className="navbar-item">
					<Link className="links" to="/" onClick={clicked}>
						Home
					</Link>
				</li>
				<li className="navbar-item">
					<Link className="links" to="/#about" onClick={clicked}>
						About
					</Link>
				</li>
				<li className="navbar-item">
					<Link className="links" to="/#work" onClick={clicked}>
						Work
					</Link>
				</li>

				<li className="navbar-item">
					<Link className="links" to="/#projects" onClick={clicked}>
						Projects
					</Link>
				</li>

				<li className="navbar-item">
					<Link className="links" to="/contact" onClick={clicked}>
						Contact
					</Link>
				</li>
			</ul>
		</>
	);
};

export default Header;
