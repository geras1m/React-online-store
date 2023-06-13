import FilterByCategory from "./FilterByCategory";
import SliderRangeDual from "./SliderRangeDual";
import {useEffect, useState} from "react";
import {
  filterProducts, resetAllFilters, setMinAndMaxValueRangeSliderPrice, setMinAndMaxValueRangeSliderStock,
  updateCheckedFilterBrand,
  updateCheckedFilterCategory,
  updateMaxValueRangeSliderPrice,
  updateMaxValueRangeSliderStock,
  updateMinValueRangeSliderPrice,
  updateMinValueRangeSliderStock
} from "../../slices/productSlice";
import {useDispatch, useSelector} from "react-redux";
import {nameOfCopyBtn, typeOfCategory, typesOfSort} from "../../const/const";
import {Button} from "react-bootstrap";
import './FiltersBlock.scss';
import {useSearchParams} from "react-router-dom";
import {getSortedArray, isSubstringInStringInPropertyOfObject} from "../../utils/utils";

const FiltersBlock = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [textInCopyBtn, setTextInCopyBtn] = useState(nameOfCopyBtn.default);
  const [backgroundCopyBtn, setBackgroundCopyBtn] = useState(null);
  const {
    products,
    checkedFilterCategory,
    checkedFilterBrand,
    minAndMaxValueOfPrice,
    checkedMinFilterPrice,
    checkedMaxFilterPrice,
    minAndMaxValueOfStock,
    checkedMinFilterStock,
    checkedMaxFilterStock,
    searchInputValue,
    typeOfSorting,
  } = useSelector(state => state.products);


  // Вынести функцию снизу в утилиты
  const checkEveryPositionInProductOnConditionFromFilters = (elem) => {
    let isBrand = true;
    let isCategory = true;
    let isPrice = true;
    let isStock = true;
    let isSearch = true;

    if (checkedFilterBrand.length !== 0) {
      isBrand = checkedFilterBrand.includes(elem.brand)
    }
    if (checkedFilterCategory.length !== 0) {
      isCategory = checkedFilterCategory.includes(elem.category)
    }
    if (
      checkedMinFilterPrice !== minAndMaxValueOfPrice[0] ||
      checkedMaxFilterPrice !== minAndMaxValueOfPrice[1]
    ) {
      isPrice = elem.price >= checkedMinFilterPrice && elem.price <= checkedMaxFilterPrice
    }
    if (
      checkedMinFilterStock !== minAndMaxValueOfStock[0] ||
      checkedMaxFilterStock !== minAndMaxValueOfStock[1]
    ) {
      isStock = elem.stock >= checkedMinFilterStock && elem.stock <= checkedMaxFilterStock
    }
    if (searchInputValue.length !== 0){
      isSearch = !isSubstringInStringInPropertyOfObject(elem, 'title', searchInputValue) ||
        !isSubstringInStringInPropertyOfObject(elem, 'description', searchInputValue) ||
        !isSubstringInStringInPropertyOfObject(elem, 'category', searchInputValue) ||
        !isSubstringInStringInPropertyOfObject(elem, 'brand', searchInputValue)
    }

    return isBrand && isCategory && isPrice && isStock && isSearch
  }

  const dispatchFilterProducts = () => {
    let filtered;
    if (
      checkedFilterBrand.length === 0 &&
      checkedFilterCategory.length === 0 &&
      checkedMinFilterPrice === minAndMaxValueOfPrice[0] &&
      checkedMaxFilterPrice === minAndMaxValueOfPrice[1] &&
      checkedMinFilterStock === minAndMaxValueOfStock[0] &&
      checkedMaxFilterStock === minAndMaxValueOfStock[1] &&
      searchInputValue.length === 0
    ) {
      const sortedProducts = getSortedArray(products, typeOfSorting);

      dispatch(filterProducts(sortedProducts));
      return;
    }

    filtered = products.filter(product => checkEveryPositionInProductOnConditionFromFilters(product));

    const sortedAndFilteredProducts = getSortedArray(filtered, typeOfSorting);

    dispatch(filterProducts(sortedAndFilteredProducts));
  };

  useEffect(() => {
    dispatchFilterProducts()
  }, [
    products,
    checkedFilterCategory,
    checkedFilterBrand,
    checkedMinFilterPrice,
    checkedMaxFilterPrice,
    checkedMinFilterStock,
    checkedMaxFilterStock,
    searchInputValue,
    typeOfSorting
  ]);

  const handleResetAllFilters = () => {
    setSearchParams({});
    dispatch(resetAllFilters());
  };

  const handleCopyUrl = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    setTextInCopyBtn(nameOfCopyBtn.copied);
    setBackgroundCopyBtn('green-bckg')
  };

  useEffect(() => {
    if (textInCopyBtn === nameOfCopyBtn.copied){
      setTimeout(() => {
        setTextInCopyBtn(nameOfCopyBtn.default);
        setBackgroundCopyBtn('')
      },2000);

    }
  },[textInCopyBtn])

  return (
    <div className='filters'>
      <div className={'filters__wrapper-btns'}>
        <Button
          className={backgroundCopyBtn}
          variant="dark"
          size='sm'
          onClick={handleCopyUrl}
        >{textInCopyBtn}</Button>
        <Button
          variant="dark"
          size='sm'
          onClick={handleResetAllFilters}
        >Reset filters</Button>
      </div>
      <div>
        <div>
          <FilterByCategory
            title={'Category'}
            typeOfCategory={typeOfCategory.category}
            checkedFilterFromState={checkedFilterCategory}
            updateCheckedFilterInState={updateCheckedFilterCategory}
          />
        </div>
      </div>
      <div>
        <FilterByCategory
          title={'Brand'}
          typeOfCategory={typeOfCategory.brand}
          checkedFilterFromState={checkedFilterBrand}
          updateCheckedFilterInState={updateCheckedFilterBrand}
        />
      </div>
      <div>
        <SliderRangeDual
          title={'Price'}
          step={10}
          typeOfCategory={typeOfCategory.price}
          setMinAndMaxLimitOfValueRangeSliderInState={setMinAndMaxValueRangeSliderPrice}
          updateMinValueRangeSliderInState={updateMinValueRangeSliderPrice}
          updateMaxValueRangeSliderInState={updateMaxValueRangeSliderPrice}
        />
      </div>
      <div>
        <SliderRangeDual
          title={'Stock'}
          step={1}
          typeOfCategory={typeOfCategory.stock}
          setMinAndMaxLimitOfValueRangeSliderInState={setMinAndMaxValueRangeSliderStock}
          updateMinValueRangeSliderInState={updateMinValueRangeSliderStock}
          updateMaxValueRangeSliderInState={updateMaxValueRangeSliderStock}
        />
      </div>
    </div>
  )
}

export default FiltersBlock;
