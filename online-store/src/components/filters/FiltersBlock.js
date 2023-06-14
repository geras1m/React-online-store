import FilterByCategory from "./FilterByCategory";
import SliderRangeDual from "./SliderRangeDual";
import {useEffect, useState} from "react";
import {
  filterProducts,
  resetAllFilters,
  setMinAndMaxValueRangeSliderPrice,
  setMinAndMaxValueRangeSliderStock,
  updateCheckedFilterBrand,
  updateCheckedFilterCategory,
  updateMinAndMaxValueRangeSliderPrice,
  updateMinAndMaxValueRangeSliderStock,
} from "../../slices/productSlice";
import {useDispatch, useSelector} from "react-redux";
import {nameOfCopyBtn, typeOfCategory} from "../../const/const";
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
    checkedMinAndMaxFilteredPrice,
    minAndMaxValueOfStock,
    checkedMinAndMaxFilteredStock,
    searchInputValue,
    typeOfSorting,
  } = useSelector(state => state.products);

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
      checkedMinAndMaxFilteredPrice[0] !== minAndMaxValueOfPrice[0] ||
      checkedMinAndMaxFilteredPrice[1] !== minAndMaxValueOfPrice[1]
    ) {
      isPrice = elem.price >= checkedMinAndMaxFilteredPrice[0] && elem.price <= checkedMinAndMaxFilteredPrice[1]
    }
    if (
      checkedMinAndMaxFilteredStock[0] !== minAndMaxValueOfStock[0] ||
      checkedMinAndMaxFilteredStock[1] !== minAndMaxValueOfStock[1]
    ) {
      isStock = elem.stock >= checkedMinAndMaxFilteredStock[0] && elem.stock <= checkedMinAndMaxFilteredStock[1]
    }
    if (searchInputValue.length !== 0) {
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
      checkedMinAndMaxFilteredPrice[0] === minAndMaxValueOfPrice[0] &&
      checkedMinAndMaxFilteredPrice[1] === minAndMaxValueOfPrice[1] &&
      checkedMinAndMaxFilteredStock[0] === minAndMaxValueOfStock[0] &&
      checkedMinAndMaxFilteredStock[1] === minAndMaxValueOfStock[1] &&
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
    checkedMinAndMaxFilteredPrice,
    checkedMinAndMaxFilteredStock,
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
    if (textInCopyBtn === nameOfCopyBtn.copied) {
      setTimeout(() => {
        setTextInCopyBtn(nameOfCopyBtn.default);
        setBackgroundCopyBtn('')
      }, 2000);

    }
  }, [textInCopyBtn]);

  // Вынести блок с кнопками сброса фильтров и копирования url в отдельный компонент

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
          updateMinAndMaxValueRangeSliderInState={updateMinAndMaxValueRangeSliderPrice}
        />
      </div>
      <div>
        <SliderRangeDual
          title={'Stock'}
          step={1}
          typeOfCategory={typeOfCategory.stock}
          setMinAndMaxLimitOfValueRangeSliderInState={setMinAndMaxValueRangeSliderStock}
          updateMinAndMaxValueRangeSliderInState={updateMinAndMaxValueRangeSliderStock}
        />
      </div>
    </div>
  )
}

export default FiltersBlock;
