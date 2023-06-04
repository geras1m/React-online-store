import {Button} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import './SortPanel.scss';
import imgGrid from '../../assets/show-grid.png';
import imgLineGrid from '../../assets/show-line-grid.png'
import {useDispatch, useSelector} from "react-redux";
import {arrows, typeOfCategory, typesOfSort} from "../../const/const";
import {filterProducts, updateSearchInputValue, updateTypeOfSorting} from "../../slices/productSlice";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";


const SortPanel = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const {filteredProducts, typeOfSorting, searchInputValue} = useSelector(state => state.products);
  const [searchInput, setSearchInput] = useState('');

  const handleChooseTypeOfSort = (e) => {
    const value = e.target.value;
    dispatch(updateTypeOfSorting(value));
  };

  const search = searchParams.get(typeOfCategory.search);

  useEffect(() => {
    if (search) {
      dispatch(updateSearchInputValue(search));
      setSearchInput(search);
    }
  }, []);

  useEffect(() => {
    if (searchInputValue.length === 0 && !search){
      setSearchInput('')
    }
  }, [searchInputValue])

  const handleChangeSearchInput = (e) => {
    let value = e.target.value;

    setSearchInput(value);

    if (value.length < 2) {
      value = ''
    }
    dispatch(updateSearchInputValue(value.trim()));
    searchParams.set(typeOfCategory.search, value);
    setSearchParams(searchParams);
  }

  // кидает ошибку

  // useEffect(() => {
  //   let sortedProducts;
  //   switch (typeOfSorting) {
  //     case typesOfSort.priceUp:
  //       sortedProducts = filteredProducts.sort((a, b) => Number(a.price) > Number(b.price) ? 1 : -1);
  //       break;
  //     default:
  //       sortedProducts = filteredProducts;
  //   }
  //   dispatch(filterProducts(sortedProducts));
  // }, [typeOfSorting]);


  return (
    <div className='view-panel'>
      <Form.Select
        className='view-panel__sort'
        aria-label="Default select example"
        onClick={handleChooseTypeOfSort}
      >
        {/*<option*/}
        {/*  disabled*/}
        {/*  selected*/}
        {/*  value="default"*/}
        {/*>Choose the sort type</option>*/}
        <option value="priceUp">Sort by price {arrows.up}</option>
        <option value="priceDown">Sort by price {arrows.down}</option>
        <option value="ratingUp">Sort by rating {arrows.up}</option>
        <option value="ratingDown">Sort by rating {arrows.down}</option>
        <option value="discountUp">Sort by discount {arrows.up}</option>
        <option value="discountDown">Sort by discount {arrows.down}</option>
      </Form.Select>

      <h3 className='view-panel__found'>Found: <span className='sum'>{filteredProducts.length}</span></h3>

      <Form.Control
        className='view-panel__search'
        type="search"
        id="inputSearch"
        aria-describedby="search"
        placeholder='Search product'
        value={searchInput}
        onChange={handleChangeSearchInput}
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
