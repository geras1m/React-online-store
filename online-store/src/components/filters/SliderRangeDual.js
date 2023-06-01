import RangeSlider from "./rangeSlider/RangeSlider";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {updateQueryParams, updateValueRangeSliderPrice} from "../../slices/productSlice";
import {minAndMaxValueFromArray} from "../../utils/utils";

const SliderRangeDual = ({title}) => {
  const dispatch = useDispatch();
  const {products, filteredProducts, checkedFilterPrice} = useSelector(state => state.products);
  const [searchParams, setSearchParams] = useSearchParams();

  const price = searchParams.get('price');

  //http://localhost:3000/?brands=Apple%E2%86%95Samsung%E2%86%95Huawei&price=300to1000

  useEffect(() => {
    if (price) {
      const values = price.split('to').map(el => Number(el));
      dispatch(updateValueRangeSliderPrice(values));
    } else {
      const arrMinMaxDefaultValues = minAndMaxValueFromArray(products);
      dispatch(updateValueRangeSliderPrice(arrMinMaxDefaultValues));
    }
  }, [products]);

  const arrMinMaxDefaultValues = minAndMaxValueFromArray(products);

  const handleChangePrice = (values) => {
    searchParams.set('price', values.join('to'))
    setSearchParams(searchParams)
    dispatch(updateValueRangeSliderPrice(values));
  };

// если есть в query, используем иначе min и max

  const getDefaultValue = () => {
    if (checkedFilterPrice) {
      return checkedFilterPrice
    }else if(price){
      return price.split('to').map(el => Number(el));
    }else{
      return arrMinMaxDefaultValues
    }
  }

  return (
    <div>
      <h3 className='filters__title'>{title}</h3>
      <RangeSlider
        min={arrMinMaxDefaultValues[0]}
        max={arrMinMaxDefaultValues[1]}
        defaultValues={getDefaultValue()}
        handleChangePrice={handleChangePrice}
      />
    </div>
  )
}

export default SliderRangeDual;
