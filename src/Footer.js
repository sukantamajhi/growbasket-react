import React from 'react';
import { Link } from 'react-router-dom';
// import FacebookIcon from '@material-ui/icons/Facebook';
import './Footer.css';
// import { Instagram, Twitter } from '@material-ui/icons';
// import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
	return (
		<div className='footer'>
			<div className='footer__container'>
				<div className='foo-row'>
					<div className='foo-col-1'>
						<Link to='/' />
						<img src='logo/logo.svg' alt='Logo' />
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
						<div class='wrapper'>
							<a href='http://www.facebook.com'>
								<i class='fa fa-2x fa-facebook-square'></i>
							</a>
							<a href='http://www.twitter.com'>
								<i class='fa fa-2x fa-twitter-square'></i>
							</a>
							<a href='http://www.instagram.com'>
								<i class='fa fa-2x fa-instagram instagram'></i>
							</a>
						</div>
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
