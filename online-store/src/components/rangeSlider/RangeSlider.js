import Range from "rc-slider";
import 'rc-slider/assets/index.css';
import './RangeSlider.scss';

const RangeSlider = () => {
  return (
    <Range
      className='range-slider'
      range
      min={10}
      max={1790}
      step={10}
      defaultValue={[330, 1300]}
      allowCross={false}
      trackStyle={{backgroundColor: "black"}}
      marks={{
        10: {
          label: <span className='range-slider__marks'>10</span>,
        },
        1790: {
          label: <span className='range-slider__marks'>1790</span>,
        },
      }}
    />
  )
}

export default RangeSlider;
