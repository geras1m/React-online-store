import Form from "react-bootstrap/Form";
import {useEffect, useState} from "react";
import {updateSearchInputValue} from "../../../slices/productSlice";
import {typeOfCategory} from "../../../const/const";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import './searchingInput.scss';

const SearchInput = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState('');
  const {searchInputValue} = useSelector(state => state.products);

  const search = searchParams.get(typeOfCategory.search);

  useEffect(() => {
    if (search) {
      dispatch(updateSearchInputValue(search));
      setSearchInput(search);
    }
  }, []);

  useEffect(() => {
    if (searchInputValue.length === 0 && !search) {
      setSearchInput('')
    }
  }, [searchInputValue]);

  const handleChangeSearchInput = (e) => {
    let value = e.target.value;

    setSearchInput(value);

    dispatch(updateSearchInputValue(value.trim()));
    searchParams.set(typeOfCategory.search, value.trim());
    setSearchParams(searchParams);
  }

  return (
    <Form.Control
      className='search'
      type="search"
      aria-describedby="search"
      placeholder='Search product'
      value={searchInput}
      onChange={handleChangeSearchInput}
    />
  )
}

export default SearchInput;
