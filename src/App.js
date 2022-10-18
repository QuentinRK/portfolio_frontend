import "./global.scss";
import React from "react";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Footer from "./components/Footer.js";
import Contact from "./components/pages/Contact.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
	return (
		<div className="container">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/contact" component={Contact} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
};

export default App;
