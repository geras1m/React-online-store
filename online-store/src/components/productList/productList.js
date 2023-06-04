import Spinner from 'react-bootstrap/Spinner';
import './productList.scss';
import SortPanel from "../sortPanel/SortPanel";
import Card from "../card/Card";
import { useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../slices/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const {
    filteredProducts,
    productsLoadingStatus,
  } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const renderProductList = (arr) => {
    return arr.map(({id, ...props}) => {
      return <Card key={id}{...props}/>
    })
  };

  if (productsLoadingStatus === 'loading') {
    return (
      <Spinner className='product-list__spinner' animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  } else if (productsLoadingStatus === "error") {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>
  }

  const productElements = renderProductList(filteredProducts);

  return (
    <div className='product-list'>
      <SortPanel/>
      <div className='product-list__wrapper-card'>
        {productElements}
      </div>
    </div>
  )
}

export default ProductList;
