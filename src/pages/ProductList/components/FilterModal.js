import React from 'react';
import './FilterComponents.scss';

export default function FilterModal({ isClicked }) {
  return (
    <div
      className="filterModal"
      style={!isClicked ? { display: 'none' } : { display: 'block' }}
    >
      <div>modal</div>
    </div>
  );
}
