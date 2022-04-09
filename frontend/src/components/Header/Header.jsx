import { BsSearch } from "react-icons/bs";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { images } from "../../constants";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={images.logo} alt="business logo" />

      <div className="header__search">
        <input className="header__search-input" type="text" />
        <SearchIcon className="header__search-icon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__option-lineOne"> Hello Guest!</span>
          <span className="header__option-lineTwo"> Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__option-lineOne"> Returns</span>
          <span className="header__option-lineTwo"> & Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option-lineOne"> Your</span>
          <span className="header__option-lineTwo"> Rewards</span>
        </div>

        <div className="header__option-basket">
          <ShoppingCartIcon className="shopping-basket" />
          <span className="header__option-lineTwo header__basket-count">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
