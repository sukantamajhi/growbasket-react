import React from 'react';
import './App.css';
// import Header from './Header';
import Product from './Product';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import SignIn from './Signin';
// import { ContactMail } from '@material-ui/icons';
import Contact from './Contact';
// import Footer from './Footer';

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route path='/contact'>
						<Contact />
					</Route>
					<Route path='/product'>
						{/* <Header /> */}
						<Product />
					</Route>
					<Route path='/login'>
						<SignIn />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
