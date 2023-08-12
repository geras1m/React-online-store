import {Button} from "react-bootstrap";
import {resetAllFilters} from "../../slices/productSlice";
import {useDispatch} from "react-redux";
import {useSearchParams} from "react-router-dom";

const BtnForResettingFilters = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleResetAllFilters = () => {
    setSearchParams({});
    dispatch(resetAllFilters());
  };

  return (
    <Button
      variant="dark"
      size='sm'
      onClick={handleResetAllFilters}
    >
      Reset filters
    </Button>
  )
}

export default BtnForResettingFilters;
