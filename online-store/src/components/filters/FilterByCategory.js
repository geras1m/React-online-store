import Filter from "./Filter";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {getCurrentAndTotalStockCounts} from "../../utils/utils";
import Spinner from "react-bootstrap/Spinner";

const FilterByCategory = ({title, typeOfCategory, checkedFilterFromState, updateCheckedFilterInState}) => {
  const dispatch = useDispatch();
  const {products, filteredProducts, productsLoadingStatus} = useSelector(state => state.products);
  const [searchParams, setSearchParams] = useSearchParams();

  const urlSearchParams = searchParams.get(typeOfCategory);

  useEffect(() => {
    if (urlSearchParams) {
      const checked = urlSearchParams.split('↕');
      dispatch(updateCheckedFilterInState(checked));
    }
  }, []);

  const arrayOfCategory = products.map(item => item[typeOfCategory]);
  const uniqueArrayOfCategory = Array.from(new Set(arrayOfCategory));

  const handleChangeValueOfInput = (e) => {
    const labelFromInput = e.target.value;
    let checked;
    if (checkedFilterFromState.indexOf(labelFromInput) === -1) {
      checked = [...checkedFilterFromState, labelFromInput];
    } else {
      checked = checkedFilterFromState.filter(el => el !== labelFromInput)
    }

    dispatch(updateCheckedFilterInState(checked));
    searchParams.set(typeOfCategory, checked.join('↕'));
    setSearchParams(searchParams);
  };
  const getContent = () => {
    if (productsLoadingStatus === 'loading') {
      return (
        <Spinner className='product-list__spinner' animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )
    } else if (productsLoadingStatus === "error") {
      return <h5 className="message">Loading error</h5>
    }

    return uniqueArrayOfCategory.map((item, i) => {
      const totalAndLastCount = getCurrentAndTotalStockCounts(
        typeOfCategory,
        item,
        products,
        filteredProducts).join('/');

      return (
        <li
          key={i}
          className='filters__filter-item'>
          <Filter
            namOfCategory={item}
            isChecked={urlSearchParams ? urlSearchParams.split('↕').includes(item) : false}
            handleChangeBrand={handleChangeValueOfInput}
          />
          <span>({totalAndLastCount})</span>
        </li>
      )
    });
  }


  const content = getContent();

  return (
    <>
      <h3 className='filters__title'>
        {title}
      </h3>
      <ul className='filters__wrapper-category'>
        {content}
      </ul>
    </>

  )
}

export default FilterByCategory;
