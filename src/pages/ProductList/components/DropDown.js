import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import DropDownBox from './DropDownBox';
import './DropDowns.scss';

const STANDARD_LIST = {
  size: ['XS', 'S', 'M', 'L', 'XL'],
  sorted: ['가격낮은순', '가격높은순'],
};

export default function DropDown({ name, standard, query, checkedValue }) {
  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const toggleDropDown = () => {
    setIsDropDownActive(!isDropDownActive);
  };

  return (
    <div>
      <div className="dropDownButtons">
        <span>{name}</span>
        <button type="button" onClick={toggleDropDown}>
          <IoIosArrowDown />
        </button>
      </div>
      <DropDownBox
        isActive={isDropDownActive}
        standard={standard}
        query={query}
        queryList={STANDARD_LIST[query]}
        checkedValue={checkedValue}
      />
    </div>
  );
}
