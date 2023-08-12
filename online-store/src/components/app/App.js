import Header from "../header/Header";
import './App.scss';
import PageWithProducts from "../../pages/PageWithProducts";

import {Routes, Route} from 'react-router-dom';
import PageWithShoppingCart from "../../pages/PageWithShoppingCart";

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Routes>
        <Route path='/' element={<PageWithProducts/>}/>
        <Route path='/cart' element={<PageWithShoppingCart/>}/>
      </Routes>
      <footer></footer>
    </div>
  )
}

export default App;

// import HomePage from "../../pages/HomePage";
// import LoginPage from "../../pages/LoginPage";
// import RegisterPage from "../../pages/RegisterPage";

{/*<Routes>*/}
{/*  <Route path='/' element={<HomePage/>}/>*/}
{/*  <Route path='/login' element={<LoginPage/>}/>*/}
{/*  <Route path='/register' element={<RegisterPage/>}/>*/}
{/*</Routes>*/}
