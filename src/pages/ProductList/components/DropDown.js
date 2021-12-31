import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import DropDownBox from './DropDownBox';
import './DropDowns.scss';

const STANDARD_LIST = {
  size: ['XS', 'S', 'M', 'L', 'XL'],
  sorted: ['가격낮은순', '가격높은순'],
};

export default function DropDown({ name, standard, query }) {
  const [isDropDownClicked, setIsDropDownClicked] = useState(false);
  const showFilterDropDown = () => {
    return !isDropDownClicked
      ? setIsDropDownClicked(true)
      : setIsDropDownClicked(false);
  };

  return (
    <div>
      <div className="dropDownButtons">
        <span>{name}</span>
        <button type="button" onClick={showFilterDropDown}>
          <IoIosArrowDown />
        </button>
      </div>
      <DropDownBox
        isClicked={isDropDownClicked}
        standard={standard}
        query={query}
        queryList={STANDARD_LIST[query]}
      />
    </div>
  );
}
