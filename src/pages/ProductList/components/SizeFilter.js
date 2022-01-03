import React from 'react';
import './DropDown.scss';

export default function SizeFilter({
  isDropDownActive,
  standardList,
  standard,
  checkedSize,
}) {
  const showDropDown = isDropDownActive ? 'show' : 'hide';

  return (
    <div className={`sizeFilter ${showDropDown}`}>
      {standardList.map((item, idx) => (
        <label key={idx} onChange={checkedSize}>
          <input type="checkbox" name={standard} value={item} />
          {item}
        </label>
      ))}
    </div>
  );
}
