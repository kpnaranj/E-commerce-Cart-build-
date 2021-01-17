import React from "react";
import CartItem from "../components/CartItem";

function CartScreen() {
  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>
        <CartItem />
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal (0) items</p>
          <p>$499.99</p>
        </div>
      </div>
      <div>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default CartScreen;
