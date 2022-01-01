import React from 'react';
import { useNavigate } from 'react-router';
import './DropDowns.scss';

export default function DropDownBox({
  isActive,
  query,
  queryList,
  standard,
  checkedValue,
}) {
  const dropDownStyle = query === 'size' ? 'size' : 'sort';
  const showDropDown = isActive ? 'show' : 'hide';

  return (
    <form className={`${dropDownStyle} ${showDropDown}`}>
      {queryList.map((item, idx) => (
        <label key={query + idx} onClick={checkedValue}>
          <input
            type="checkbox"
            standard={standard}
            name={query}
            value={item}
          />
          {item}
        </label>
      ))}
    </form>
  );
}
