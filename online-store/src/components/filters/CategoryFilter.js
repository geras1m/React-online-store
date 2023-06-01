import Filter from "./Filter";
import {useSelector} from "react-redux";

const CategoryFilter = () => {
  const products = useSelector(state => state.products.products);

  const brandArray = products.map(item => item.category);

  const uniqueBrand = Array.from(new Set(brandArray));

  const elements = uniqueBrand.map(item => <Filter key={item} namOfCategory={item}/>)

  return (
    <ul className='filters__wrapper-category'>
      {elements}
    </ul>
  )
}

export default CategoryFilter;
