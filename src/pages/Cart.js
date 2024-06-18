import { useCart } from "../context/CartContext";
import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../Components";
import "./cart.css";
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { total, cartList } = useCart();
  useTitle("Cart");
  const navigate = useNavigate();

  const fill = () => {
    if (cartList.length === 0) {
      return (
        <div className="empty-cart-message">
          <img 
            src="https://img.freepik.com/premium-vector/buying-goods-hypermarket-flat_151150-5334.jpg?w=740" 
            alt="Empty Cart"
            className="empty-cart-image"
          />
          <div className="empty-cart-text">
            <h1>Your cart is empty</h1>
            <p>Just relax, let us help you find some first-class products</p>
          </div>
          <button className="shop-now" onClick={() => navigate('/')}>Shop Now</button>
        </div>
      );
    }
    return null;
  };

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {cartList.length} / ${total}</h1>
        {fill()}
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

