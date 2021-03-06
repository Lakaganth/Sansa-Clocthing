import React from "react";
import "./Checkout.scss";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal
} from "./../../redux/cart/cartSelector";
import { connect } from "react-redux";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

const Checkout = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${total}</div>
    </div>
  );
};

const mspr = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mspr)(Checkout);
