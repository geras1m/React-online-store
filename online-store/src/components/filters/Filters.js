import RangeSlider from "../rangeSlider/RangeSlider";

import {Button} from "react-bootstrap";

import './Filters.scss';

const Filters = () => {
  return (
    <div className='filters'>
      <div className={'filters__wrapper-btns'}>
        <Button variant="dark" size='sm'>Copy link</Button>
        <Button variant="dark" size='sm'>Reset filters</Button>
      </div>
      <div >
        <h3 className='filters__title'>Category</h3>
        <ul className='filters__wrapper-category'>
          <li className='filters__filter-item'><span><input type="checkbox"/> Smartphone</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Smartphone</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Smartphone</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Smartphone</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Smartphone</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Smartphone</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Smartphone</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Smartphone</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Smartphone</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Smartphone</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Smartphone</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Smartphone</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Smartphone</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Smartphone</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Smartphone</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Smartphone</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Smartphone</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Smartphone</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Smartphone</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Smartphone</span> <span>(5/5)</span></li>
        </ul>
      </div>
      <div>
        <h3 className='filters__title'>Brand</h3>
        <ul className='filters__wrapper-category'>
          <li className='filters__filter-item'><span><input type="checkbox"/> Samsung</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Samsung</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Samsung</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Samsung</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Samsung</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Samsung</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Samsung</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Samsung</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Samsung</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Samsung</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Samsung</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Samsung</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Samsung</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Samsung</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Samsung</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Samsung</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Samsung</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Samsung</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Samsung</span> <span>(5/5)</span></li>
          <li className='filters__filter-item'><span><input type="checkbox"/> Samsung</span> <span>(5/5)</span></li>
        </ul>
      </div>
      <div>
        <h3 className='filters__title'>Price</h3>
        <RangeSlider/>
      </div>
      <div>
        <h3 className='filters__title'>Stock</h3>
        <RangeSlider/>
      </div>
    </div>
  )
}

export default Filters;
