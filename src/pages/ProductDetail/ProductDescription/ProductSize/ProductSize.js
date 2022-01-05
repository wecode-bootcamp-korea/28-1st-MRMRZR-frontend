import React from 'react';
import './ProductSize.scss';

export default function ProductSize({ currSize, currStock }) {
  return (
    <div className="productSize">
      <input
        type="radio"
        name="size"
        id={currSize}
        disabled={currStock === 0 ? true : false}
      />
      <label htmlFor={currSize} className={currStock === 0 ? 'disabled' : ''}>
        {currSize}
        <span>수량:{currStock}</span>
      </label>
    </div>
  );
}
