import React from 'react';
import './DropDowns.scss';

export default function DropDownBox({ isClicked, standardList, standard }) {
  return (
    <form className={`${standard} ${isClicked ? 'show' : 'hide'}`}>
      {standardList.map((standard, idx) => (
        <label key={standard + idx}>
          <input type="checkbox" name={standard} value={standard} />
          {standard}
        </label>
      ))}
    </form>
  );
}
