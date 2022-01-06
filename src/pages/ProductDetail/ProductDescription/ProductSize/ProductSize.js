import React from 'react';
import './ProductSize.scss';

export default function ProductSize({ currSize, currStock, onButtonClick }) {
  const clicked = e => {
    onButtonClick(e.target.id);
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
