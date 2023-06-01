import Spinner from 'react-bootstrap/Spinner';
import './productList.scss';
import SortPanel from "../sortPanel/SortPanel";
import Card from "../card/Card";
import {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts, filterProducts} from "../../slices/productSlice";

const ProductList = () => {
  const {
    products,
    filteredProducts,
    productsLoadingStatus,
    checkedFilterBrand,
    checkedFilterPrice
  } = useSelector(state => state.products);
  const dispatch = useDispatch();

  const dispatchFilterProducts = () => {
    let filteredItems;
    // if (checkedFilterBrand.length === 0 ){
    //   filteredItems = products;
    // }else {
    //   filteredItems = products.filter(item =>
    //     checkedFilterBrand.includes(item.brand) &&
    //     (item.price > checkedFilterPrice[0] && item.price < checkedFilterPrice[1]));
    //   // filteredItems = products.map(item => {
    //   //   console.log(`price ${item.price} - ${checkedFilterPrice[0]} - ${checkedFilterPrice[1]}`);
    //   //   return item.price > checkedFilterPrice[0]
    //   // })
    // }

    filteredItems = products.filter(item =>
      (item.price > checkedFilterPrice[0] && item.price < checkedFilterPrice[1]));
    if (checkedFilterBrand.length !== 0) {
      filteredItems = filteredItems.filter(item => checkedFilterBrand.includes(item.brand))
    }
    // console.log(filteredItems);
    dispatch(filterProducts(filteredItems));
    // написать для каждого фильтра фуекцию
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    dispatchFilterProducts()
  }, [products, checkedFilterBrand, checkedFilterPrice])

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
