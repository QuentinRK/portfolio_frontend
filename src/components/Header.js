import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.js";

import "../styles/header.scss";

const Header = () => {
	const [header, setHeader] = useState("header");

	const listenScrollEvent = () => {
		window.scrollY > 10 ? setHeader("header2") : setHeader("header");
	};

	useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent);

		return () => window.removeEventListener("scroll", listenScrollEvent);
	}, []);

	return (
		<div className="header-container">
			<div className={header}>
				<Navbar />
			</div>
		</div>
	);
};

export default Header;
