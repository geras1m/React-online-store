import Filter from "./Filter";
import {useDispatch, useSelector} from "react-redux";
import {updateCheckedFilterBrand, updateQueryParams} from "../../slices/productSlice";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {getTotalAndLastStockCount} from "../../utils/utils";

const BrandFilters = () => {
  const dispatch = useDispatch();
  const {products, checkedFilterBrand, filteredProducts} = useSelector(state => state.products);
  const [searchParams, setSearchParams] = useSearchParams();

  const brands = searchParams.get('brands');

  useEffect(() => {
    if (brands) {
      const checked = brands.split('↕');
      dispatch(updateCheckedFilterBrand(checked));
    }
  }, []);

  const brandArray = products.map(item => item.brand);
  const uniqueBrand = Array.from(new Set(brandArray));

  const handleChangeBrand = (e) => {
    const name = e.target.value;
    let checked;
    if (checkedFilterBrand.indexOf(name) === -1) {
      checked = [...checkedFilterBrand, name];
    } else {
      checked = checkedFilterBrand.filter(el => el !== name)
    }

    searchParams.set('brands', checked.join('↕'));
    setSearchParams(searchParams)
    dispatch(updateCheckedFilterBrand(checked));
  };

  const elements = uniqueBrand.map((item, i) => {
    const totalAndLastCount = getTotalAndLastStockCount('brand', item, products, filteredProducts).join('/');
    return (
      <li
        key={i}
        className='filters__filter-item'>
        <Filter
          namOfCategory={item}
          isChecked={brands ? brands.split('↕').includes(item) : false}
          handleChangeBrand={handleChangeBrand}
        />
        <span>({totalAndLastCount})</span>
      </li>)
  });

  return (
    <ul className='filters__wrapper-category'>
      {elements}
    </ul>
  )
}

export default BrandFilters;
