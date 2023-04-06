import CartItem from "./CartItem";
import "./Cart.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cart";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const produce = useSelector((state) => state.produce);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  const cartItems = Object.values(cart).map((item) => {
    return {
      ...item,
      ...produce[item.id],
    };
  });

  if (!cartItems || !cartItems.length)
    return (
      <div className="cart">
        No items in the cart. Start selecting items to purchase.
      </div>
    );

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("cartItems: ", cartItems);
    console.log("redux cart: ", cart);
    cartItems.forEach((item) => {
      dispatch(removeFromCart(item.id));
    });
    window.alert(
      "Purchased the following:\n" +
        `${cartItems.map((item) => `${item.count} of ${item.name}`).join("\n")}`
    );
  };

  return (
    <div className="cart">
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} handleRefresh={handleRefresh} />
        ))}
      </ul>
      <hr />
      <form onSubmit={onSubmit}>
        <button type="submit">Purchase</button>
      </form>
    </div>
  );
}

export default Cart;
