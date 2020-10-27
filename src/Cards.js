/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './Cards.css'

function Cards(props) {
    return (
        <div class="row__prods">
            <div class="col-4__prods">
                <a href={props.link} target="_blank">
                    <img src={props.imgsrc} alt="Product1" />
                    <h4>{props.title}</h4>
                    <p>
                        <small>&#x20B9; </small> <b>{props.price}</b>
                    </p>
                    <a href={props.link} target="_blank">
                        <button className="card__button">Check Now</button>
                    </a>
                </a>
            </div>
        </div>
    )
}

export default Cards
