import React from 'react';
import './Cart.scss';

export default function Cart({
  cart_id,
  product_id,
  product_name,
  product_number,
  price,
  size,
  image_url,
  quantity,
}) {
  return (
    <div className="cart">
      <div className="name">{product_name}</div>
      <div className="size">Size : {size}</div>
      <div className="quantity">
        {quantity} X {price}KRW
      </div>
      <span className="img">
        <img src={image_url} alt="" />
      </span>
      <input type="button" value="+" />
      <input type="button" value="-" />
      <input type="button" value="적용" />
    </div>
  );
}
