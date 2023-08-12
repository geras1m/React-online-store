import FiltersBlock from "../components/filters/FiltersBlock";
import ProductList from "../components/productList/productList";

const PageWithProducts = () => {
  return (
    <main className='app_container main'>
      <FiltersBlock/>
      <ProductList/>
    </main>
  )
}

export default PageWithProducts;
