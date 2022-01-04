import { useState } from 'react';
import './ProductGallery.scss';

export default function ProductGallery({ productVal }) {
  const [windowIdx, setWindowIdx] = useState(0);
  const testImgs = [
    './images/ProductDetail/testimg1.jpg',
    './images/ProductDetail/testimg2.jpg',
    './images/ProductDetail/testimg3.jpg',
  ];

  const moveGalleryByWindow = e => {
    setWindowIdx(Number(e.target.id) - 1);
  };

  const moveGalleryByScroll = e => {
    const { deltaY } = e;
    if (deltaY < 0 && windowIdx > 0) setWindowIdx(prev => prev - 1);
    if (deltaY > 0 && windowIdx < 2) setWindowIdx(prev => prev + 1);
  };

  return (
    <div className="productGallery">
      <div className="galleryContainer">
        <ul
          style={{ transform: `translateY(-${windowIdx * 600}px)` }}
          onWheel={moveGalleryByScroll}
        >
          {testImgs.map((el, i) => {
            return (
              <li key={i}>
                <img src={el} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="galleryBars">
        <div className="progressGauge" />
        <div
          className="progressBar"
          style={{ height: `${(windowIdx + 1) * 33.33}%` }}
        />
      </div>
      <div className="galleryWindow">
        <ul>
          {testImgs.map((el, i) => {
            return (
              <li key={i} onClick={moveGalleryByWindow}>
                <img id={String(i + 1)} src={el} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
