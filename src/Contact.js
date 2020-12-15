import React from 'react';
import Contactform from './Contactform';
import './Contact.css';

function Contact() {
	return (
		<div id='contact'>
			<h1 className='heading'>Contact Us</h1>
			<div className='contact__page'>
				<div className='left__panel'>
					<p className='Contact__details'>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Fugit facere magnam nam esse eum neque nemo, quasi
						quod, vel sint nesciunt laboriosam optio minima
						voluptatem! Ullam, a quas recusandae odio rerum
						consequuntur, perferendis at veniam modi dolore, quis
						tempore facere laudantium ex. Voluptates labore,
						consequuntur commodi laboriosam vitae ratione voluptate!
					</p>
					<p>
						ADDRESS: 37/11, Ramchandra Bagchi Lane, Kolkata = 700035
					</p>
					<p>Email: sukantamajhi9211@gmail.com</p>
				</div>
				<hr />
				<div className='right__panel'>
					<Contactform />
				</div>
			</div>
		</div>
	);
}

export default Contact;
