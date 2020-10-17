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
<<<<<<< HEAD
                <div className="products">
                    <div className="prod__row">
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
                    </div>
                    <div className="featured__column">
                        <Card
                            imgsrc={ps[4].imgsrc}
                            title={ps[4].title}
                            price={ps[4].price}
                            link={ps[4].link}
                        />
                        <Card
                            imgsrc={ps[5].imgsrc}
                            title={ps[5].title}
                            price={ps[5].price}
                            link={ps[5].link}
                        />
                        <Card
                            imgsrc={ps[6].imgsrc}
                            title={ps[6].title}
                            price={ps[6].price}
                            link={ps[6].link}
                        />
                        <Card
                            imgsrc={ps[7].imgsrc}
                            title={ps[7].title}
                            price={ps[7].price}
                            link={ps[7].link}
                        />
                    </div>
                </div>
=======
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
>>>>>>> ad09a3c9cd7dea79b2c2e22eb77aa2b7b4e63ec1
            </div>
        </div>
    )
}
export default Featuredproducts
