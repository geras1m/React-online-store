import Spinner from 'react-bootstrap/Spinner';
import './productList.scss';
import SortPanel from "../sortPanel/SortPanel";
import CardGrid from "../card/CardGrid";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../slices/productSlice";
import CardLine from "../card/CardLine";
import {typeOfView} from "../../const/const";

const ProductList = () => {
  const dispatch = useDispatch();
  const {
    filteredProducts,
    productsLoadingStatus,
    viewOfCards
  } = useSelector(state => state.products);
  const [classOfView, setClassOfView] = useState('product-list__wrapper-card-grid');

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    if (viewOfCards === typeOfView.line) {
      setClassOfView('product-list__wrapper-card-line')
    } else {
      setClassOfView('product-list__wrapper-card-grid')
    }
  }, [viewOfCards]);

// доавлять на этом этапе разные классы для отрисовки разной плитки
  const renderProductList = (arr) => {
    if (viewOfCards === typeOfView.line) {
      return arr.map(({id, ...props}) => {
        return <CardLine key={id}{...props}/>
      })
    } else {
      return arr.map(({id, ...props}) => {
        return <CardGrid key={id}{...props}/>
      })
    }
  };

  if (productsLoadingStatus === 'loading') {
    return (
      <Spinner className='product-list__spinner' animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  } else if (productsLoadingStatus === "error") {
    return <h5 className="text-center mt-5">Loading error</h5>
  } else if (filteredProducts.length < 1) {
    return <h5 className="text-center mt-5">No products found</h5>
  }

  const productElements = renderProductList(filteredProducts);

  return (
    <div className='product-list'>
      <SortPanel/>
      <div className={classOfView}>
        {productElements}
      </div>
    </div>
  )
}

export default ProductList;
