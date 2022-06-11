import React from "react";
import { useParams } from "react-router-dom";

const ProductList = () => {

    const  { products } = useParams();

    return(
        <section className="menu">
            <div className="menu_heading">
                <h2 className="menu_title restaurant-title">${'partnerName'}</h2>
                <div className="card-info">
                    <div className="rating">
                        4.5
                    </div>
                    <div className="price">Oт ${'minPrice'}</div>
                    <div className="category">${'category'}</div>
                </div>
            </div>

            <div className="cards menu_cards">
                
            </div>

        </section>
    )
}

export default ProductList;