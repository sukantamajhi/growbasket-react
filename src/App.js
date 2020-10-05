import React from "react";
import "./App.css";
import Header from "./Header";
import Product from "./Product";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/about">
						<Header />
						<h1>This is about Page</h1>
					</Route>
					<Route path="/product">
						<Header />
						<Product />
					</Route>
					<Route path="/login">
						<Login />
						<a href="/">
							<h1>This is a href function</h1>
						</a>
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
