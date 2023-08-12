import './SortPanel.scss';
import { useSelector} from "react-redux";
import SortingSelector from "./sortingSelector/sortingSelector";
import SearchInput from "./searchInput/searchInput";
import ViewButtons from "./viewButtnons/viewButtons";

const SortPanel = () => {
  const {filteredProducts} = useSelector(state => state.products);

  return (
    <div className='view-panel'>
      <SortingSelector/>
      <h3 className='view-panel__found'>
        Found: <span className='sum'>{filteredProducts.length}</span>
      </h3>
      <SearchInput/>
      <ViewButtons/>
    </div>
  )
}

export default SortPanel;
