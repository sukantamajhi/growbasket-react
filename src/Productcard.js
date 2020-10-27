/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './Productcard.css';

function Productcard(props) {
	return (
		<div id='product'>
			<div class='product__row'>
				<div class='product__column'>
					<a href={props.link} target='_blank'>
						<img src={props.imgsrc} alt='Product1' />
						<h4>{props.title}</h4>
						<p>
							<small>&#x20B9; </small> <b>{props.price}</b>
						</p>
						<a href={props.link} target='_blank'>
							<button className='card__button'>Check Now</button>
						</a>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Productcard;
