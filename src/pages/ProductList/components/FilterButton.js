import React, { useState } from 'react';
import FilterModal from './FilterModal';

import { IoIosArrowDown } from 'react-icons/io';

export default function FilterButton({ standard }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="filterButton">
      <div>
        <span>{standard}</span>
        <button
          type="button"
          onClick={() => {
            !isClicked ? setIsClicked(true) : setIsClicked(false);
          }}
        >
          <IoIosArrowDown />
        </button>
        <FilterModal isClicked={isClicked} />
      </div>
    </div>
  );
}
