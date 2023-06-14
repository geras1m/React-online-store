import Form from "react-bootstrap/Form";
import {updateTypeOfSorting} from "../../../slices/productSlice";
import {useDispatch, useSelector} from "react-redux";
import {optionsOfSelectForSorting, typesOfSort} from "../../../const/const";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import './sortingSelectors.scss';

const SortingSelector = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const {typeOfSorting} = useSelector(state => state.products);

  const sort = searchParams.get(typesOfSort.urlName);

  useEffect(() => {
    if (sort) {
      dispatch(updateTypeOfSorting(sort));
    }
  }, []);

  useEffect(() => {
    searchParams.set(typesOfSort.urlName, typeOfSorting);
    setSearchParams(searchParams);
  }, [typeOfSorting]);

  const handleChooseTypeOfSorting = (e) => {
    const value = e.target.value;
    dispatch(updateTypeOfSorting(value));
  };

  const optionsForSelect = optionsOfSelectForSorting.map((item, i) => {
    return <option
      key={i}
      value={item.value}
    >
      {item.text} {item.arrow}
    </option>
  });

  return (
    <Form.Select
      id='sort'
      onChange={handleChooseTypeOfSorting}
      value={typeOfSorting ? typeOfSorting : ''}
    >
      {optionsForSelect}
    </Form.Select>
  )
}

export default SortingSelector;
