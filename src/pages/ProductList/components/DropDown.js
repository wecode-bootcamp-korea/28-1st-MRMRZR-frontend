import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import DropDownBox from './DropDownBox';
import './DropDowns.scss';

const STANDARD_LIST = {
  size: ['XS', 'S', 'M', 'L', 'XL'],
  sorted: ['가격낮은순', '가격높은순'],
};

export default function DropDown({ name, standard, checkedSize, sort }) {
  const [isDropDownActive, setIsDropDownActive] = useState(false);

  return (
    <div>
      <div className="dropDownButtons">
        <span>{name}</span>
        <button
          type="button"
          onClick={() => setIsDropDownActive(!isDropDownActive)}
        >
          <IoIosArrowDown />
        </button>
      </div>
      <DropDownBox
        standard={standard}
        sort={sort}
        standardList={STANDARD_LIST[standard]}
        isDropDownActive={isDropDownActive}
        checkedSize={checkedSize}
      />
    </div>
  );
}
