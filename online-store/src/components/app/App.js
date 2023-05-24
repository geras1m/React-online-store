import Header from "../header/Header";
import Filters from "../filters/Filters";
import './App.scss';
import ProductList from "../productList/productList";

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <main className='app_container main'>
        <Filters/>
        <ProductList/>

      </main>
      <footer></footer>
    </div>
  )
}

export default App;
