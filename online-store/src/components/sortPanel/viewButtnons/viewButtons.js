import {ReactComponent as ImgLineGrid} from "../../../assets/btn_show_lines_icon.svg";
import {ReactComponent as ImgGrid} from "../../../assets/btn_show_grid_icon.svg";
import './viewButtons.scss';
import {changeTypeOfCardsView} from "../../../slices/productSlice";
import {colorBlack, colorCrimson, typeOfView} from "../../../const/const";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect, useLayoutEffect, useState} from "react";

// сделать эффект на выбраной кнопке

const ViewButtons = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeGridBtn, setActiveGridBtn] = useState(true);
  const {viewOfCards} = useSelector(state => state.products);

  const view = searchParams.get(typeOfView.urlName);

  function setActiveViewBtn(value) {
    if (value === typeOfView.line) setActiveGridBtn(false);
    if (value === typeOfView.grid || value === null) setActiveGridBtn(true);
  }

  useLayoutEffect(() => {
    if (view) setActiveViewBtn(view)
  }, [])

  useEffect(() => {
    if (view) {
      dispatch(changeTypeOfCardsView(view));
    }
  }, []);

  useEffect(() => {
    setActiveViewBtn(viewOfCards)
  }, [viewOfCards])

  const handleChangeViewOfCards = (e) => {
    const {view} = e.currentTarget.dataset;
    dispatch(changeTypeOfCardsView(view));
    searchParams.set(typeOfView.urlName, view);
    setSearchParams(searchParams);
  }

  const activeLineViewBtn = !activeGridBtn ? colorCrimson : colorBlack;
  const activeGridViewBtn = activeGridBtn ? colorCrimson : colorBlack;

  return (
    <div className='btns-wrapper'>
      <button
        onClick={handleChangeViewOfCards}
        className='btns-wrapper__btn-view'
        data-view='line'>
        <ImgLineGrid
          className='btns-wrapper__icon-grid'
          fill={activeLineViewBtn}
          height="32px"
          width="32px"
        />
      </button>

      <button
        onClick={handleChangeViewOfCards}
        className='btns-wrapper__btn-view'
        data-view='grid'>
        <ImgGrid
          className='btns-wrapper__icon-grid'
          fill={activeGridViewBtn}
          height="32px"
          width="32px"
        />
      </button>
    </div>
  )
}

export default ViewButtons;
