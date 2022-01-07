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
  closeCart,
}) {
  const [currQuantity, setCurrQuantity] = useState(quantity);
  const accessToken = localStorage.getItem('token');

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

    // fetch('http://13.124.143.239:8000/carts', {
    fetch('http://8a05-211-106-114-186.ngrok.io/carts', {
      method: 'POST',
      headers: {
        Authorization: accessToken,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        product_id: product_id,
        size_id: size_id,
        quantity: currQuantity,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') alert('변경되었습니다.');
      });
  };

  const deleteInCart = e => {
    closeCart();

    // fetch(`http://13.124.143.239:8000/carts/${cart_id}`, {
    fetch(`http://8a05-211-106-114-186.ngrok.io/carts/${cart_id}`, {
      method: 'DELETE',
      headers: {
        Authorization: accessToken,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.result === 'NO_CONTENT') alert('삭제되었습니다.');
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
