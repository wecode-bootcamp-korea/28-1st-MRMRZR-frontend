import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import DropDownBox from './DropDownBox';
import './DropDowns.scss';

const STANDARD_LIST = {
  사이즈: ['XS', 'S', 'M', 'L', 'XL'],
  SORTBY: ['가격낮은순', '가격높은순'],
};

export default function DropDown({ standard }) {
  const [isDropDownClicked, setIsDropDownClicked] = useState(false);
  const showFilterDropDown = () => {
    return !isDropDownClicked
      ? setIsDropDownClicked(true)
      : setIsDropDownClicked(false);
  };

  return (
    <div>
      <div className="dropDownButtons">
        <span>{standard}</span>
        <button type="button" onClick={showFilterDropDown}>
          <IoIosArrowDown />
        </button>
      </div>
      <DropDownBox
        isClicked={isDropDownClicked}
        standard={standard}
        standardList={STANDARD_LIST[standard]}
      />
    </div>
  );
}
