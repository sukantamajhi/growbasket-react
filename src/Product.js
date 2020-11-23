import React from 'react';
// import Footer from './Footer';
// import Header from './Header';
import ps from './ProductList';
import './Product.css';
import Productcard from './Productcard';

const Product = () => {
	return (
		<div id='product'>
			{/* <Header /> */}

			<div className='product__header--image'>
				<img
					src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=280/layout-engine/2020-10/Diwali20_mastheads_22oct_web.jpg'
					alt=''
				/>
			</div>

			<div className='product__description'>
				<h3>Choose best products available in our website</h3>
				<p>
					Find you neccesary products and buy them <br />
					also share this with your friends who needs this items.
				</p>
			</div>

			<div className='product__title'>
				<h2>Fruits and Vegetables</h2>
			</div>

			<div className='product'>
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
			</div>

			{/* 🚀 Personal section 🚀 */}

			<div className='product__title'>
				<h2>Personal Care</h2>
			</div>

			<div className='product'>
				<div className='product__row'>
					<Productcard
						imgsrc={ps[8].imgsrc}
						title={ps[8].title}
						price={ps[8].price}
						link={ps[8].link}
					/>
					<Productcard
						imgsrc={ps[9].imgsrc}
						title={ps[9].title}
						price={ps[9].price}
						link={ps[9].link}
					/>
					<Productcard
						imgsrc={ps[10].imgsrc}
						title={ps[10].title}
						price={ps[10].price}
						link={ps[10].link}
					/>
					<Productcard
						imgsrc={ps[11].imgsrc}
						title={ps[11].title}
						price={ps[11].price}
						link={ps[11].link}
					/>
				</div>
				<div className='product__row'>
					<Productcard
						imgsrc={ps[12].imgsrc}
						title={ps[12].title}
						price={ps[12].price}
						link={ps[12].link}
					/>
					<Productcard
						imgsrc={ps[13].imgsrc}
						title={ps[13].title}
						price={ps[13].price}
						link={ps[13].link}
					/>
					<Productcard
						imgsrc={ps[14].imgsrc}
						title={ps[14].title}
						price={ps[14].price}
						link={ps[14].link}
					/>
					<Productcard
						imgsrc={ps[15].imgsrc}
						title={ps[15].title}
						price={ps[15].price}
						link={ps[15].link}
					/>
				</div>
			</div>
			{/* <Footer /> */}
		</div>
	);
};

export default Product;
