import React from "react";
import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/about">
						<h1>This is about Page</h1>
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/">
						<Header />
						<Hero />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
