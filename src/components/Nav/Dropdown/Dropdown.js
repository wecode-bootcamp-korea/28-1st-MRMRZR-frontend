import React from 'react';
import './Dropdown.scss';

export default function Dropdown() {
  const hardCodedDropdownMenu = [
    'New Arrivals',
    '아우터',
    '상의',
    '하의',
    '슈즈',
    '악세서리',
    '백',
    '퍼퓸',
  ];

  return (
    <ul className="dropdown">
      {hardCodedDropdownMenu.map((el, i) => (
        <li key={i}>{el}</li>
      ))}
    </ul>
  );
}
