import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
// import Featuredproducts from "./Featuredproducts";
import SearchIcon from '@material-ui/icons/Search';

function header() {
	return (
		<div id='web__header'>
			<div className='container'>
				<div className='navbar'>
					<div className='logo'>
						<Link to='/'>
							<img
								src='https://sukantamajhi.github.io/growbasket/image/logo/grow3.svg'
								width='125px'
								alt='growbasket logo'
							/>
						</Link>
					</div>
					<div className='header__search'>
						<input
							type='text'
							className='header__searchInput'
							placeholder='Search product...'
						/>
						<SearchIcon className='header__searchIcon' />
					</div>

					<nav>
						<ul>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/product'>Product</Link>
							</li>
							<li>
								<Link to='/about'>About</Link>
							</li>
							<li>
								<Link to='/contact'>Contact</Link>
							</li>
							<li>
								<Link to='/login'>Account</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
}

export default header;
