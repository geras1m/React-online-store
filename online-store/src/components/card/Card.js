import Button from "react-bootstrap/Button";
import './Card.scss';

export const getRoundCountWithDiscount = (price, discount) => {
  return (+price - +price * (+discount / 100)).toFixed(2)
}

const Card = ({
                title,
                price,
                discountPercentage,
                rating,
                stock,
                brand,
                category,
                thumbnail}) => {

  return (
    <div className="card">
      <div
        className='card__wrapper-img'
        style={{background: `url(${thumbnail}) 0% 0% / cover`}}>
      </div>
      <h4 className='card__title'>{title}</h4>
      <div className='card__text'>
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
      <div className='card__wrapper-btns'>
        <Button variant="primary">Drop from cart</Button>
        <Button variant="primary">Details</Button>
      </div>
    </div>
  )
}

export default Card;
