import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import SizeFilter from './SizeFilter';
import './DropDown.scss';

const STANDARD_LIST = {
  size: ['XS', 'S', 'M', 'L', 'XL'],
};

export default function DropDown({ name, standard, checkedSize, sort }) {
  const [isDropDownActive, setIsDropDownActive] = useState(false);

  return (
    <div className="dropDown">
      <div className="dropDownButtons">
        <span>{name}</span>
        <button
          type="button"
          onClick={() => setIsDropDownActive(!isDropDownActive)}
        >
          <IoIosArrowDown />
        </button>
      </div>
      <SizeFilter
        standard={standard}
        sort={sort}
        standardList={STANDARD_LIST[standard]}
        isDropDownActive={isDropDownActive}
        checkedSize={checkedSize}
      />
    </div>
  );
}
