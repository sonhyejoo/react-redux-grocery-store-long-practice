import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cart";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(item.count);

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);
  const handleClick = () => {
    console.log(item);
    dispatch(removeFromCart(item.id));
  };

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input type="number" value={count} />
        <button className="cart-item-button">+</button>
        <button className="cart-item-button">-</button>
        <button className="cart-item-button" onClick={handleClick}>
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
