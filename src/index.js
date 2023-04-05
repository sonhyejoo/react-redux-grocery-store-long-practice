import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { configureStore } from "./store/index";
import App from "./App";
import { Provider } from "react-redux";
import { addToCart } from "./store/cart";

const store = configureStore();
if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.addToCart = addToCart;
}

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
