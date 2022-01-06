import React, { useState } from 'react';
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
  size_id,
}) {
  const [currQuantity, setCurrQuantity] = useState(quantity);
  const addQuantity = e => {
    e.preventDefault();
    setCurrQuantity(prev => prev + 1);
  };

  const subQuantity = e => {
    e.preventDefault();
    if (currQuantity > 0) setCurrQuantity(prev => prev - 1);
  };

  const modQuantity = e => {
    e.preventDefault();
    fetch('http://7c51-211-106-114-186.ngrok.io/carts', {
      method: 'POST',
      body: JSON.stringify({
        product_id: product_id,
        size_id: size_id,
        quantity: currQuantity,
      }),
    });
  };

  const deleteInCart = e => {
    e.preventDefault();
    fetch('http://7c51-211-106-114-186.ngrok.io/carts/1', {
      method: 'DELETE',
    });
  };

  return (
    <div className="cart">
      <div className="name">{product_name}</div>
      <div className="size">Size : {size}</div>
      <div className="quantity">
        {currQuantity} X {price}KRW
      </div>
      <span className="img">
        <img src={image_url} alt="" />
      </span>
      <input type="button" value="+" onClick={addQuantity} />
      <input type="button" value="-" onClick={subQuantity} />
      <input type="button" value="적용" onClick={modQuantity} />
      <input type="button" value="삭제" onClick={deleteInCart} />
    </div>
  );
}
