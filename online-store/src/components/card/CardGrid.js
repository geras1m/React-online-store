import Button from "react-bootstrap/Button";
import './Card.scss';
import {getRoundCountWithDiscount} from "../../utils/utils";

const CardGrid = ({
                title,
                price,
                discountPercentage,
                rating,
                stock,
                brand,
                category,
                thumbnail}) => {

  return (
    <div className="card-grid ">
      <div
        className='card-grid__wrapper-img'
        style={{background: `url(${thumbnail}) 0% 0% / cover`}}>
      </div>
      <h4 className='card-grid__title'>{title}</h4>
      <div className='card-grid__text'>
        <ul>
          <li>Category: {category}</li>
          <li>Brand: {brand}</li>
          <li>Rating: {rating}</li>
          <li>Stock: {stock}</li>
          <li>Price: {price}$</li>
          <li>Discount: {discountPercentage}%</li>
        </ul>
        <span>Total cost: <span className='sum'>{getRoundCountWithDiscount(price, discountPercentage)}$</span></span>
      </div>
      <div className='card-grid__wrapper-btns'>
        <Button variant="primary">Add to cart</Button>
        <Button variant="primary">Details</Button>
      </div>
    </div>
  )
}

export default CardGrid;
