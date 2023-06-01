import {Button} from "react-bootstrap";

import './Filters.scss';
import BrandFilters from "./BrandFilters";
import CategoryFilter from "./CategoryFilter";
import SliderRangeDual from "./SliderRangeDual";

const FiltersBlock = () => {

  return (
    <div className='filters'>
      <div className={'filters__wrapper-btns'}>
        <Button variant="dark" size='sm'>Copy link</Button>
        <Button variant="dark" size='sm'>Reset filters</Button>
      </div>
      <div>
        <h3 className='filters__title'>Category</h3>
        <CategoryFilter/>
      </div>
      <div>
        <h3 className='filters__title'>Brand</h3>
        <BrandFilters/>
      </div>
      <div>
        <SliderRangeDual
          title={'Price'}
        />
      </div>
      {/*<div>*/}
      {/*  <SliderRangeDual*/}
      {/*    title={'Price'}*/}
      {/*    min={2}*/}
      {/*    max={150}*/}
      {/*  />*/}
      {/*</div>*/}
    </div>
  )
}

export default FiltersBlock;
