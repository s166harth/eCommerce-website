import React from "react";
import "./Header.css";
import  logo  from "./logo.png"
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="Header">
      <Link to="/">
        <img
          className="logo"
          src={ logo }
        />
      </Link>

      <div className="Search">
        <input className="searchInput" type="text" />
        <SearchIcon className="searchIcon" />
      </div>

      <div className="nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="option">
            <span className="optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className="option">
            <span className="optionLineOne">Returns</span>
            <span className="optionLineTwo">& Orders</span>
          </div>
        </Link>
        

        <div className="option">
          <span className="optionLineOne">Your</span>
          <span className="optionLineTwo">Section</span>
        </div>

        <Link to="/checkout">
          <div className="optionBasket">
            <ShoppingBasketIcon />
            <span className="optionLineTwo basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;