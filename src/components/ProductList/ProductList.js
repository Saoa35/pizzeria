import React from "react";
import { useParams } from "react-router-dom";
import usePageData from '../../custom-hooks/usePageData';
import Spinner from '../Spinner/Spinner';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = () => {

    const  { products } = useParams();

    const productList = usePageData(products);

    const minPrice = Math.min.apply(null, productList?.data.map(el => el.price));


    if(!productList) {
        return <Spinner />
    }

    return(
        <section className="menu">
            <div className="menu_heading">
                <h2 className="menu_title restaurant-title">{productList.partnerName}</h2>
                <div className="card-info">
                    <div className="rating">
                        4.5
                    </div>
                    <div className="price">Oт ${minPrice}</div>
                    <div className="category">{productList.category}</div>
                </div>
            </div>

            <div className="cards menu_cards">

                {productList.data.map(food => <ProductCard key={food.id} {...food} />)}
            </div>

        </section>
    )
}

export default ProductList;