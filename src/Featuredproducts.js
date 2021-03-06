/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './featured.css';
// import Card from './Cards';
import ps from './ProductList';
import { Link } from 'react-router-dom';
import Productcard from './Productcard';

function Featuredproducts() {
	return (
		<div className='featuredproducts'>
			<div class='small-container'>
				<h2 class='title'>
					Featured <span id='prod'>Products</span>
				</h2>
				<div className='products'>
					<div className='product__row'>
						<Productcard
							imgsrc={ps[0].imgsrc}
							title={ps[0].title}
							price={ps[0].price}
							link={ps[0].link}
						/>
						<Productcard
							imgsrc={ps[1].imgsrc}
							title={ps[1].title}
							price={ps[1].price}
							link={ps[1].link}
						/>
						<Productcard
							imgsrc={ps[2].imgsrc}
							title={ps[2].title}
							price={ps[2].price}
							link={ps[2].link}
						/>
						<Productcard
							imgsrc={ps[3].imgsrc}
							title={ps[3].title}
							price={ps[3].price}
							link={ps[3].link}
						/>
					</div>

					<div className='product__row'>
						<Productcard
							imgsrc={ps[4].imgsrc}
							title={ps[4].title}
							price={ps[4].price}
							link={ps[4].link}
						/>
						<Productcard
							imgsrc={ps[5].imgsrc}
							title={ps[5].title}
							price={ps[5].price}
							link={ps[5].link}
						/>
						<Productcard
							imgsrc={ps[6].imgsrc}
							title={ps[6].title}
							price={ps[6].price}
							link={ps[6].link}
						/>
						<Productcard
							imgsrc={ps[7].imgsrc}
							title={ps[7].title}
							price={ps[7].price}
							link={ps[7].link}
						/>
					</div>

					<div className='featured__column'>
						<Link to='/product'>
							<button className='Show__more'>Show More</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Featuredproducts;
