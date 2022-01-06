import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import './SizeFilter.scss';

const SIZE_LIST = ['XS', 'S', 'M', 'L', 'XL'];

export default function SizeFilter({
  name,
  standard,
  checkedSize,
  selectSizeList,
  isDropDownActive,
  toggleSizeFilter,
}) {
  return (
    <div className="sizeFilter">
      <div className="dropDownButtons">
        <span>{name}</span>
        <button type="button" onClick={toggleSizeFilter}>
          <IoIosArrowDown />
        </button>
      </div>
      <div className={`list ${isDropDownActive ? 'show' : 'hide'}`}>
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
