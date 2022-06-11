import React from 'react';
import { useNavigate } from 'react-router-dom';

const RestaurantCard = (props) => {

    const {name, image, stars, price, products, kitchen, time_of_delivery} = props;

    const img = require(`../../assets/${image}`);

    let navigate = useNavigate();

    const handleClick = () => {
      navigate(`/restaurant/${products}`);
    }

    return(
        <a className="card card-restaurant" onClick={handleClick}>
      <img src={img} alt="image" className="card-image"/>
      <div className="card-text">
        <div className="card-heading">
          <h3 className="card-title">{name}</h3>
          <span className="card-tag tag">{time_of_delivery}</span>
        </div>
        <div className="card-info">
          <div className="rating">{stars}</div>
          <div className="price">От ${price}</div>
          <div className="category">{kitchen}</div>
        </div>
      </div>
    </a>
    )
}

export default RestaurantCard;