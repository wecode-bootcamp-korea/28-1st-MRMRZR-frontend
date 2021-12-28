import React from 'react';
import './Dropdown.scss';

export default function Dropdown({ entered }) {
  return (
    <ul className="dropdown">
      <li>아우터</li>
      <li>상의</li>
      <li>하의</li>
      <li>슈즈</li>
      <li>악세서리</li>
      <li>백</li>
      <li>퍼퓸</li>
    </ul>
  );
}
