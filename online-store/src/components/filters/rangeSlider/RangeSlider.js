import Range from "rc-slider";
import 'rc-slider/assets/index.css';
import './RangeSlider.scss';
import {useState} from "react";

const RangeSlider = ({min, max, defaultValues, handleChangePrice}) => {
  const [currentValue, setCurrentValue] = useState(defaultValues);

  const handle = (value) => {
    setCurrentValue(value)
  }

  return (
    <>
      <Range
        className='range-slider'
        range
        onChange={handle}
        onAfterChange={handleChangePrice}
        min={min}
        max={max}
        step={10}
        defaultValue={defaultValues}
        allowCross={false}
        trackStyle={{backgroundColor: "black"}}
      />
      <div
        className='range-slider__marks'>
        <span>{currentValue[0]}</span><span>{currentValue[1]}</span>
      </div>
    </>
  )
}

export default RangeSlider;
