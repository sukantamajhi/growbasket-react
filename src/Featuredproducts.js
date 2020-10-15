/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './featured.css'
import Card from './Cards'
import ps from './ProductList'

function Featuredproducts() {
    return (
        <div className="featuredproducts">
            <div class="small-container">
                <h2 class="title">
                    Featured <span id="prod">Products</span>
                </h2>
                <Card
                    imgsrc={ps[0].imgsrc}
                    title={ps[0].title}
                    price={ps[0].price}
                    link={ps[0].link}
                />
                <Card
                    imgsrc={ps[1].imgsrc}
                    title={ps[1].title}
                    price={ps[1].price}
                    link={ps[1].link}
                />
                <Card
                    imgsrc={ps[2].imgsrc}
                    title={ps[2].title}
                    price={ps[2].price}
                    link={ps[2].link}
                />
                <Card
                    imgsrc={ps[3].imgsrc}
                    title={ps[3].title}
                    price={ps[3].price}
                    link={ps[3].link}
                />
                <Card imgsrc={ps[4].imgsrc} title={ps[4].title} />
            </div>
        </div>
    )
}
export default Featuredproducts
