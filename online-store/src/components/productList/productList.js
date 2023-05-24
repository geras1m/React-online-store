import Button from 'react-bootstrap/Button';
import './productList.scss';
import SortPanel from "../sortPanel/SortPanel";

const ProductList = () => {
  return (
    <div className='product-list'>
      <SortPanel/>
      <div className='product-list__wrapper-card'>

        <div className="product-list__card">
          <div
            className='product-list__wrapper-card-img'
            style={{background: 'url("https://i.dummyjson.com/data/products/2/thumbnail.jpg") 0% 0% / cover'}}>
          </div>
          <h4 className='product-list__title'>Card Title</h4>
          <p className='product-list__text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className='product-list__wrapper-btns'>
            <Button variant="primary">Drop from cart</Button>
            <Button variant="primary">Details</Button>
          </div>
        </div>

        <div className="product-list__card">
          <div
            className='product-list__wrapper-card-img'
            style={{background: 'url("https://i.dummyjson.com/data/products/89/thumbnail.jpg") 0% 0% / cover'}}>
          </div>
          <h4 className='product-list__title'>Card Title</h4>
          <p className='product-list__text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className='product-list__wrapper-btns'>
            <Button variant="primary">Drop from cart</Button>
            <Button variant="primary">Details</Button>
          </div>
        </div>

        <div className="product-list__card">
          <div
            className='product-list__wrapper-card-img'
            style={{background: 'url("https://i.dummyjson.com/data/products/82/thumbnail.jpg") 0% 0% / cover'}}>
          </div>
          <h4 className='product-list__title'>Card Title</h4>
          <p className='product-list__text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className='product-list__wrapper-btns'>
            <Button variant="primary">Drop from cart</Button>
            <Button variant="primary">Details</Button>
          </div>
        </div>

        <div className="product-list__card">
          <div
            className='product-list__wrapper-card-img'
            style={{background: 'url("https://i.dummyjson.com/data/products/58/thumbnail.jpg") 0% 0% / cover'}}>
          </div>
          <h4 className='product-list__title'>Card Title</h4>
          <p className='product-list__text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className='product-list__wrapper-btns'>
            <Button variant="primary">Drop from cart</Button>
            <Button variant="primary">Details</Button>
          </div>
        </div>

        <div className="product-list__card">
          <div
            className='product-list__wrapper-card-img'
            style={{background: 'url("https://i.dummyjson.com/data/products/41/thumbnail.webp") 0% 0% / cover'}}>
          </div>
          <h4 className='product-list__title'>Card Title</h4>
          <p className='product-list__text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className='product-list__wrapper-btns'>
            <Button variant="primary">Drop from cart</Button>
            <Button variant="primary">Details</Button>
          </div>
        </div>

        <div className="product-list__card">
          <div
            className='product-list__wrapper-card-img'
            style={{background: 'url("https://i.dummyjson.com/data/products/27/thumbnail.webp") 0% 0% / cover'}}>
          </div>
          <h4 className='product-list__title'>Card Title</h4>
          <p className='product-list__text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className='product-list__wrapper-btns'>
            <Button variant="primary">Drop from cart</Button>
            <Button variant="primary">Details</Button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductList;
