import {Button} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import './SortPanel.scss';
import imgGrid from '../../assets/show-grid.png';
import imgLineGrid from '../../assets/show-line-grid.png'
import {useDispatch, useSelector} from "react-redux";
import {arrows, optionsOfSelectForSorting, typeOfCategory, typeOfView, typesOfSort} from "../../const/const";
import {
  changeTypeOfCardsView,
  filterProducts,
  updateSearchInputValue,
  updateTypeOfSorting
} from "../../slices/productSlice";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

const SortPanel = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const {filteredProducts, typeOfSorting, searchInputValue} = useSelector(state => state.products);
  const [searchInput, setSearchInput] = useState('');

  const search = searchParams.get(typeOfCategory.search);
  const sort = searchParams.get(typesOfSort.urlName);
  const view = searchParams.get(typeOfView.urlName);

  useEffect(() => {
    if (search) {
      dispatch(updateSearchInputValue(search));
      setSearchInput(search);
    }
    if (sort) {
      dispatch(updateTypeOfSorting(sort));
    }
    if (view) {
      dispatch(changeTypeOfCardsView(view));
    }
  }, []);

  useEffect(() => {
    if (searchInputValue.length === 0 && !search) {
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

  const handleChooseTypeOfSorting = (e) => {
    const value = e.target.value;
    dispatch(updateTypeOfSorting(value));
  };
  // поработать с линтером (установить, настроить)

  useEffect(() => {
    searchParams.set(typesOfSort.urlName, typeOfSorting);
    setSearchParams(searchParams);
  }, [typeOfSorting]);

  const optionsForSelect = optionsOfSelectForSorting.map((item, i) => {
    return <option
      key={i}
      value={item.value}
    >
      {item.text} {item.arrow}
    </option>
  })

  // разбить на компоненты, переписать значения цены и склада в сторе на массив, сделать отображение

  const handleChangeViewOfCards = (e) => {
    const {view} = e.target.dataset;
    dispatch(changeTypeOfCardsView(view));
    searchParams.set(typeOfView.urlName, view);
    setSearchParams(searchParams);
  }

  return (
    <div className='view-panel'>
      <Form.Select
        className='view-panel__sort'
        aria-label="Default select example"
        onChange={handleChooseTypeOfSorting}
        value={typeOfSorting ? typeOfSorting : ''}
      >
        {optionsForSelect}
      </Form.Select>

      <h3 className='view-panel__found'>
        Found: <span className='sum'>{filteredProducts.length}</span>
      </h3>

      <Form.Control
        className='view-panel__search'
        type="search"
        id="inputSearch"
        aria-describedby="search"
        placeholder='Search product'
        value={searchInput}
        onChange={handleChangeSearchInput}
      />

      <div className='view-panel__btn-wrapper'>
        <button
          onClick={handleChangeViewOfCards}
          className='view-panel__btn-view'>
          <img
            data-view='line'
            className='view-panel__icon-grid'
            src={imgLineGrid}
            alt="line"/>
        </button>

        <button
          onClick={handleChangeViewOfCards}
          className='view-panel__btn-view'>
          <img
            data-view='grid'
            className='view-panel__icon-grid'
            src={imgGrid}
            alt="grid"/>
        </button>
      </div>
    </div>
  )
}

export default SortPanel;
