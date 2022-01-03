import React from 'react';
import './ProductSize.scss';

export default function ProductSize({ currSize }) {
  return (
    <div className="productSize">
      <input type="radio" name="size" id={currSize} />
      <label htmlFor={currSize}>{currSize}</label>
    </div>
  );
}
