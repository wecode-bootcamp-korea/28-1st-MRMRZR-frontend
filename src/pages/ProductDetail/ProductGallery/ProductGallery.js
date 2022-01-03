import { useState } from 'react';
import './ProductGallery.scss';

export default function ProductGallery() {
  const [windowIdx, setWindowIdx] = useState(0);

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
          <li>img1</li>
          <li>img2</li>
          <li>img3</li>
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
          <li id="1" onClick={moveGalleryByWindow}>
            win1
          </li>
          <li id="2" onClick={moveGalleryByWindow}>
            win2
          </li>
          <li id="3" onClick={moveGalleryByWindow}>
            win3
          </li>
        </ul>
      </div>
    </div>
  );
}
