import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

const Header = () => {

  const [{ cart, user }] = useStateValue()

  const login = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <nav className="header">
      <Link to="/">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" className="header-logo" />
      </Link>

      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <SearchIcon className="header-searchIcon" />
      </div>

      <div className="header-nav">

        <Link to={!user && "/login"} className="header-link">
          <div onClick={login} className="header-option">
            <span className="header-option-one">Hello, {user?.email}
            </span>
            <span className="header-option-two">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to="/login" className="header-link">
          <div className="header-option">
            <span className="header-option-one">Returns</span>
            <span className="header-option-two">& Orders</span>
          </div>
        </Link>

        <Link to="/login" className="header-link">
          <div className="header-option">
            <span className="header-option-one">Your</span>
            <span className="header-option-two">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header-link">
          <div className="header-shoppingCart">
            <ShoppingCartIcon />
            <span className="header-option-two header-shoppingCartCount">{cart?.length}</span>
          </div>
        </Link>
      </div>

    </nav>
  )
}

export default Header
