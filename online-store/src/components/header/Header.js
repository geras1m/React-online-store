import imgCart from '../../assets/icon-shopping-cart.png'
import './Header.scss';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <div className='app_container'>
        <div className='header__styles'>
          <Link to='/'>
            <h1 className="header__title">
              Online-store
            </h1>
          </Link>

          <p className="header__total-sum">Cart total: <span className='sum'>€6,974.00</span></p>

          <Link to='/cart' className="header__cart">
            <img className="header__cart-img" src={imgCart} alt="Cart"/>
            <span className="header__cart-total">0</span>
          </Link>
          <a href="#" className="header__log-in">Login</a>
        </div>

      </div>
    </header>
  )
}

export default Header;
