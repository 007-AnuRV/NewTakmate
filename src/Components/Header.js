
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Header.css";

export const Header = () => {
  //main chahti hu ki cartList me jitne [products rhe utne hme cart:2 ki jgh pr cart:jitne product hain wo dikhe toh ]
  //toh bs hme cartList ko access karenge aur niche bhi change kr denge from cart:2 to card:cartList.length
  const {cartList} =useCart();
  return (
    <header>
      <Link to="/" className="logo">
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart:{cartList.length}</span>
      </Link>
    </header>
  )
  }
export default Header;
