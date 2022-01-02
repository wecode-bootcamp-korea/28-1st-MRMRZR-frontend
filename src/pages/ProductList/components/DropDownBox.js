import React from 'react';
import './DropDowns.scss';

export default function DropDownBox({
  isDropDownActive,
  standardList,
  standard,
  sort,
  checkedSize,
}) {
  const dropDownStyle = standard === 'size' ? 'size' : 'sort';
  const showDropDown = isDropDownActive ? 'show' : 'hide';

  return (
    <div className={`${dropDownStyle} ${showDropDown}`}>
      {standardList.map((item, idx) => (
        <label key={idx} onChange={checkedSize}>
          <input type="checkbox" standard={standard} value={item} />
          {item}
        </label>
      ))}
      <button className="sizeButton" onClick={sort}>
        go to filter
      </button>
    </div>
  );
}
