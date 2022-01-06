import React from 'react';
import './ProductSize.scss';

export default function ProductSize({ currSize, currStock, onButtonClick }) {
  const sizeTable = {
    XS: 1,
    S: 2,
    M: 3,
    L: 4,
    XL: 5,
  };

  const clicked = e => {
    onButtonClick(sizeTable[e.target.id]);
  };

  return (
    <div className="productSize" onClick={clicked}>
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
