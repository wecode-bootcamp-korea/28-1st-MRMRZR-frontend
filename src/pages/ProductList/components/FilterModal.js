import React, { useState } from 'react';
import './FilterModal.scss';

export default function FilterModal({ isClicked }) {
  const [selectedSize, setSelectedSize] = useState([]);
  const selectedSizeList = [...selectedSize];

  const clickSelectSize = event => {
    const { name, type, checked } = event.target;
    if (type === 'checkbox' && checked) {
      setSelectedSize([...selectedSize, name]);
    } else {
      setSelectedSize(selectedSize.filter(size => size !== name));
    }
  };

  return (
    <form
      className="filterModal"
      style={isClicked ? { display: 'flex' } : { display: 'none' }}
      onClick={clickSelectSize}
    >
      <label>
        <input type="checkbox" name="XS" value="XS" />
        XS
      </label>
      <label>
        <input type="checkbox" name="S" value="S" />S
      </label>
      <label>
        <input type="checkbox" name="M" value="M" />M
      </label>
      <label>
        <input type="checkbox" name="L" value="L" />L
      </label>
      <label>
        <input type="checkbox" name="XL" value="XL" />
        XL
      </label>
    </form>
  );
}
