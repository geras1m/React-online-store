import imgLineGrid from "../../../assets/show-line-grid.png";
import imgGrid from "../../../assets/show-grid.png";
import './viewButtons.scss';
import {changeTypeOfCardsView} from "../../../slices/productSlice";
import {typeOfView} from "../../../const/const";
import {useDispatch} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

const ViewButtons = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const view = searchParams.get(typeOfView.urlName);

  useEffect(() => {
    if (view) {
      dispatch(changeTypeOfCardsView(view));
    }
  }, []);

  const handleChangeViewOfCards = (e) => {
    const {view} = e.target.dataset;
    dispatch(changeTypeOfCardsView(view));
    searchParams.set(typeOfView.urlName, view);
    setSearchParams(searchParams);
  }

  return (
    <div className='btns-wrapper'>
      <button
        onClick={handleChangeViewOfCards}
        className='btns-wrapper__btn-view'>
        <img
          data-view='line'
          className='btns-wrapper__icon-grid'
          src={imgLineGrid}
          alt="line"/>
      </button>

      <button
        onClick={handleChangeViewOfCards}
        className='btns-wrapper__btn-view'>
        <img
          data-view='grid'
          className='btns-wrapper__icon-grid'
          src={imgGrid}
          alt="grid"/>
      </button>
    </div>
  )
}

export default ViewButtons;
