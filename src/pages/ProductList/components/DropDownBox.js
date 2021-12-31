import React from 'react';
import { useNavigate } from 'react-router';
import './DropDowns.scss';

export default function DropDownBox({ isClicked, query, queryList, standard }) {
  const navigate = useNavigate();
  const makeFilteringUrl = event => {
    const { name, value } = event.target;
    navigate(`/product-list/${standard}?${name}=${value}`);
  };

  return (
    <form
      className={`${query === 'size' ? 'size' : 'sort'} ${
        isClicked ? 'show' : 'hide'
      }`}
    >
      {queryList.map((item, idx) => (
        <label key={query + idx} onClick={makeFilteringUrl}>
          <input type="checkbox" name={query} value={item} />
          {item}
        </label>
      ))}
    </form>
  );
}
