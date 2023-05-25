import Button from "react-bootstrap/Button";
import './Card.scss';

const Card = ({link}) => {

  return (
    <div className="card">
      <div
        className='card__wrapper-img'
        style={{background: `url(${link}) 0% 0% / cover`}}>
      </div>
      <h4 className='card__title'>Card Title</h4>
      <p className='card__text'>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
      <div className='card__wrapper-btns'>
        <Button variant="primary">Drop from cart</Button>
        <Button variant="primary">Details</Button>
      </div>
    </div>
  )
}

export default Card;
