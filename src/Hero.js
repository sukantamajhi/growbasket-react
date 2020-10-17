import React from 'react'
import { Link } from 'react-router-dom'
//import Header from "./Header";
import './Hero.css'

function Hero() {
    return (
        <div>
            <div className="hero">
                <div className="row">
                    <div className="col-2">
                        <h1>
                            This is your <br />
                            <span id="groc">eGroccery store</span>
                        </h1>
                        <p className="heading__text">
                            This is your online eGroccery store. Here you <br />
                            can find your necessary groccery item at a very
                            cheap price.
                        </p>
                        <Link to="/product" className="btn">
                            Shop Now &#x2192;
                        </Link>
                    </div>
                    <div className="col-2">
                        <img
                            src="https://sukantamajhi.github.io/growbasket/image/grocery.png"
                            alt="grocerry"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
