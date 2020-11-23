import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
	return (
		<div className='footer'>
			<div className='footer__container'>
				<div className='foo-row'>
					<div className='foo-col-1'>
						<Link to='/' />
						<img
							src='https://sukantamajhi.github.io/growbasket/image/logo/grow3.svg'
							alt='Logo'
						/>
						<p>
							Order and get fresh product delivery in your door.
						</p>
					</div>
					<div className='foo-col-2'>
						<h3>GrowBasket</h3>
						<p>
							<Link to='/about' />
							About Us
						</p>
						<p>
							<Link to='/privacy' />
							Privacy Policy
						</p>
						<p>
							<Link to='/affiliate' />
							Affiliate
						</p>
						<p>
							<Link to='/terms-and-conditions' />
							Terms and Conditions
						</p>
					</div>
					<div className='foo-col-3'>
						<h3>Help</h3>
						<p>
							<Link to='/faqs' />
							FAQs
						</p>
						<p>
							<Link to='/contact' />
							Contact Us
						</p>
						<p>
							<Link to='/feedback' />
							Feedback
						</p>
					</div>
					<div className='foo-col-4'>
						<h3>Social Media</h3>
						<a href='https://www.facebook.com/'>
							<img
								src='https://lh3.googleusercontent.com/ccWDU4A7fX1R24v-vvT480ySh26AYp97g1VrIB_FIdjRcuQB2JP2WdY7h_wVVAeSpg'
								alt='facebook logo'
								height='30px'
								width='30px'
							/>
						</a>
						&nbsp;
						<a href='https://www.twitter.com/'>
							<img
								src='https://lh3.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk'
								alt='twitter logo'
								height='30px'
								width='30px'
							/>
						</a>
						&nbsp;
						<a
							href='https://w
						ww.instagram.com/'>
							<img
								src='https://pbs.twimg.com/profile_images/1306051401236099072/nuSA8oqW_400x400.jpg'
								alt='instagram logo'
								height={35}
								width={35}
							/>
						</a>
						&nbsp;
						<a href='https://www.youtube.com/'>
							<img
								src='https://i.pinimg.com/originals/de/1c/91/de1c91788be0d791135736995109272a.png'
								alt='youtube logo'
								height={35}
								width={35}
							/>
						</a>
					</div>
				</div>
				<hr />
				<div className='foo-row-cr'>
					<div className='foo-copyright'>
						<p align='left'>
							Copyright © GrowBasket - All rights reserved
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
