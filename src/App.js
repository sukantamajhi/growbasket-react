import React from 'react';
import './App.css';
import Product from './Product';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import SignIn from './Signin';
import Contact from './Contact';
import About from './About';
import Registration from './Registration';
import Header from './Header';
import Footer from './Footer';

function App() {
	return (
		<Router>
			<div>
				<Header />
				<Switch>
					<Route path='/contact'>
						<Contact />
					</Route>
					<Route path='/product'>
						<Product />
					</Route>
					<Route path='/login'>
						<SignIn />
					</Route>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/signup'>
						<Registration />
					</Route>
					<Route exact path='/'>
						<Home />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
