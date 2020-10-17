import React from 'react'
import './Category.css'

function Category() {
    return (
        <div>
            <div className="category">
                <div className="small-container">
                    <div className="row">
                        <div className="col-3">
                            <img
                                src="https://sukantamajhi.github.io/growbasket/image/category-1.jpg"
                                alt="1st_image_category"
                            />
                        </div>
                        <div className="col-3">
                            <img
                                src="https://sukantamajhi.github.io/growbasket/image/category-2.jpg"
                                alt="2nd_image_category"
                            />
                        </div>
                        <div className="col-3">
                            <img
                                src="https://sukantamajhi.github.io/growbasket/image/category-3.jpg"
                                alt="3rd_image_category"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
