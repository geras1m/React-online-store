import Header from "../header/Header";
import FiltersBlock from "../filters/FiltersBlock";
import './App.scss';
import ProductList from "../productList/productList";

// import {Routes, Route} from 'react-router-dom';
// import HomePage from "../../pages/HomePage";
// import LoginPage from "../../pages/LoginPage";
// import RegisterPage from "../../pages/RegisterPage";

const App = () => {
  return (
    <div className='app'>

      <Header/>
      <main className='app_container main'>
        <FiltersBlock/>
        <ProductList/>

      </main>
      <footer></footer>

      {/*<Routes>*/}
      {/*  <Route path='/' element={<HomePage/>}/>*/}
      {/*  <Route path='/login' element={<LoginPage/>}/>*/}
      {/*  <Route path='/register' element={<RegisterPage/>}/>*/}
      {/*</Routes>*/}

    </div>
  )
}

export default App;
