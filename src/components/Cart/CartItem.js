import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, plusCart, setCart } from "../../store/cart";

function CartItem({ item, handleRefresh }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(item.count);

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);
  const handleChange = () => {
    dispatch(setCart(item.id, parseInt(count)));
    handleRefresh();
  };

  const handleClickPlus = (delta) => {
    //delta is 1
    dispatch(plusCart(item.id, delta));
    setCount((count) => count + delta);
    handleRefresh();
  };
  const handleClickMinus = (delta) => {
    //delta is -1
    if (count + delta < 1) {
      dispatch(removeFromCart(item.id));
      setCount(0);
      handleRefresh();
    } else {
      dispatch(plusCart(item.id, delta));
    }
  };

  const handleClickRemove = () => {
    dispatch(removeFromCart(item.id));
    setCount(0);
    handleRefresh();
  };

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
          onBlur={handleChange}
        />
        <button className="cart-item-button" onClick={() => handleClickPlus(1)}>
          +
        </button>
        <button
          className="cart-item-button"
          onClick={() => handleClickMinus(-1)}
        >
          -
        </button>
        <button className="cart-item-button" onClick={handleClickRemove}>
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
