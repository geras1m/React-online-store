import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {minAndMaxValueFromArray} from "../../utils/utils";
import Range from "rc-slider";
import 'rc-slider/assets/index.css';
import './SliderRangeDual.scss';

const SliderRangeDual = ({
                           title,
                           step,
                           typeOfCategory,
                           setMinAndMaxLimitOfValueRangeSliderInState,
                           updateMinAndMaxValueRangeSliderInState
}) => {
  const dispatch = useDispatch();
  const {products, productsLoadingStatus} = useSelector(state => state.products);
  const [searchParams, setSearchParams] = useSearchParams();

  const urlSearchParams = searchParams.get(typeOfCategory);
  const minAndMaxValueFromUrlSearchParams = urlSearchParams?.split('to').map(el => Number(el));

  const minAndMaxValueFromAllProducts = minAndMaxValueFromArray(products, typeOfCategory)
    .map(el => isFinite(el) ? el : 0);

  useEffect(() => {
    let value = urlSearchParams ? minAndMaxValueFromUrlSearchParams : minAndMaxValueFromAllProducts;
    dispatch(setMinAndMaxLimitOfValueRangeSliderInState(minAndMaxValueFromAllProducts))
    dispatch(updateMinAndMaxValueRangeSliderInState(value));
  }, [products]);

  const handleChangePrice = (value) => {
    searchParams.set(typeOfCategory, value.join('to'));
    setSearchParams(searchParams);

    dispatch(updateMinAndMaxValueRangeSliderInState(value));
  };

  const currentValue = urlSearchParams ? minAndMaxValueFromUrlSearchParams : minAndMaxValueFromAllProducts;

  //Сделать спинер

  return (
    <div>
      <h3 className='filters__title'>{title}</h3>
      <Range
        className='range-slider'
        range
        onChange={handleChangePrice}
        min={minAndMaxValueFromAllProducts[0]}
        max={minAndMaxValueFromAllProducts[1]}
        step={step}
        value={currentValue}
        allowCross={false}
        trackStyle={{backgroundColor: "black"}}
      />
      <div
        className='range-slider__marks'>
        <span>{currentValue[0]}</span><span>{currentValue[1]}</span>
      </div>
    </div>
  )
}

export default SliderRangeDual;
