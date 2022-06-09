import React from 'react';

const ProductCard = () => {

    return(
        <div className='card'>
            <img src='${image}' alt='image' className='card-image' />
        <div className='card-text'>

            <div className='card-heading'>
                <h3 className='card-title card-title-reg'>${'name'}</h3>
            </div>

            <div className='card-info'>
                <div className='ingredients'>${'description'}</div>
            </div>

            <div className='card-buttons'>
                <button className='button button-primary button-add-cart' id='${id}'>
                    <span className='button-card-text'>В корзину</span>
                    <span className='button-cart-svg'></span>
                </button>
                <strong className='card-price-bold card-price'>$${'price'}</strong>
            </div>
        </div>
        </div>
    )
}

export default ProductCard;