import {Button} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import './SortPanel.scss';

import imgGrid from '../../assets/show-grid.png';
import imgLineGrid from '../../assets/show-line-grid.png'


const SortPanel = () => {
  return (
    <div className='view-panel'>
      <Form.Select className='view-panel__sort' aria-label="Default select example">
        <option value="price-ASC">Sort by price ASC</option>
        <option value="price-DESC">Sort by price DESC</option>
        <option value="rating-ASC">Sort by rating ASC</option>
        <option value="rating-DESC">Sort by rating DESC</option>
        <option value="discount-ASC">Sort by discount ASC</option>
        <option value="discount-DESC">Sort by discount DESC</option>
      </Form.Select>

      <h3 className='view-panel__found'>Found: <span className='sum'>100</span></h3>

      <Form.Control
        className='view-panel__search'
        type="search"
        id="inputSearch"
        aria-describedby="search"
        placeholder='Search product'
      />

      <div>
        <Button variant="light" size='sm'>
          <img className='view-panel__icon-grid' src={imgLineGrid} alt="Line"/>
        </Button>
        <Button variant="light" size='sm'>
          <img className='view-panel__icon-grid' src={imgGrid} alt="Grid"/>
        </Button>
      </div>

    </div>
  )
}

export default SortPanel;
