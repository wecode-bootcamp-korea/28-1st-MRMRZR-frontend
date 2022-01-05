import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import './SizeFilter.scss';

const SIZE_LIST = ['XS', 'S', 'M', 'L', 'XL'];

export default function SizeFilter({
  name,
  standard,
  checkedSize,
  selectSizeList,
}) {
  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const showDropDown = isDropDownActive ? 'show' : 'hide';
  return (
    <div className="sizeFilter">
      <div className="dropDownButtons">
        <span>{name}</span>
        <button
          type="button"
          onClick={() => setIsDropDownActive(!isDropDownActive)}
        >
          <IoIosArrowDown />
        </button>
      </div>
      <div className={`list ${showDropDown}`}>
        {SIZE_LIST.map((item, idx) => (
          <label key={item + idx} onChange={checkedSize}>
            <input
              type="checkbox"
              name={standard}
              value={item}
              checked={selectSizeList.includes(item)}
              readOnly
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
}