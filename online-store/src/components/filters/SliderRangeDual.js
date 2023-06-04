import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {minAndMaxValueFromArray} from "../../utils/utils";
import Range from "rc-slider";
import 'rc-slider/assets/index.css';
import './SliderRangeDual.scss';

const SliderRangeDual = ({title, step, typeOfCategory, setMinAndMaxLimitOfValueRangeSliderInState, updateMinValueRangeSliderInState, updateMaxValueRangeSliderInState}) => {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.products);
  const [searchParams, setSearchParams] = useSearchParams();

  const urlSearchParams = searchParams.get(typeOfCategory);
  const minAndMaxValueFromUrlSearchParams = urlSearchParams?.split('to').map(el => Number(el));

  const minAndMaxValueFromAllProducts = minAndMaxValueFromArray(products, typeOfCategory)
    .map(el => isFinite(el) ? el : 0);

  useEffect(() => {
    let value = urlSearchParams ? minAndMaxValueFromUrlSearchParams : minAndMaxValueFromAllProducts;
    dispatch(setMinAndMaxLimitOfValueRangeSliderInState(minAndMaxValueFromAllProducts))
    dispatch(updateMinValueRangeSliderInState(value[0]));
    dispatch(updateMaxValueRangeSliderInState(value[1]));
  }, [products]);

  const handleChangePrice = (value) => {
    searchParams.set(typeOfCategory, value.join('to'));
    setSearchParams(searchParams);

    dispatch(updateMinValueRangeSliderInState(value[0]));
    dispatch(updateMaxValueRangeSliderInState(value[1]));
  };

  const minCurrentValue = urlSearchParams ? minAndMaxValueFromUrlSearchParams[0] : minAndMaxValueFromAllProducts[0];
  const maxCurrentValue = urlSearchParams ? minAndMaxValueFromUrlSearchParams[1] : minAndMaxValueFromAllProducts[1];

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
        value={[minCurrentValue, maxCurrentValue]}
        allowCross={false}
        trackStyle={{backgroundColor: "black"}}
      />
      <div
        className='range-slider__marks'>
        <span>{minCurrentValue}</span><span>{maxCurrentValue}</span>
      </div>
    </div>
  )
}

export default SliderRangeDual;
