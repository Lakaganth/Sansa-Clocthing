import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cartIcon.scss";
import { toggleCartHidden } from "./../../redux/cart/cartActions";
import { selectCartItemCount } from "../../redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mspr = createStructuredSelector({
  itemCount: selectCartItemCount
});

const mapDisptachToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  mspr,
  mapDisptachToProps
)(CartIcon);
