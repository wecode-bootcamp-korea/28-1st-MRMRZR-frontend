import React, { useState } from 'react';
import './FilterDropDown.scss';

export default function FilterDropDown({ isClicked }) {
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

  // filter로 해당 클릭된 버튼만 리스트에 새로 담아줌.
  // selectedSizeList의 버튼들에 해당하는 사이즈만 화면에 어떻게 출력할지 생각.

  return (
    <form
      className={`filterDropDownWrapper ${isClicked ? 'show' : 'hide'}`}
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
