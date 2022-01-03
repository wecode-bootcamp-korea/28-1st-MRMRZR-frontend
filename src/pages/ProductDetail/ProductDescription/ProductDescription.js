import React from 'react';
import ProductSize from './ProductSize/ProductSize';
import './ProductDescription.scss';

export default function ProductDescription() {
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div className="productDescription">
      <h2>에코 레더 후드 베스트</h2>
      <p className="itemCode">Item code</p>
      <p className="desctiption">
        양 방향 신축성이 뛰어난 소재로 제조된 슬림핏 팬츠. 앞면 포켓과 뒷면
        파이핑 포켓 디테일. 앞면 지퍼와 버튼 여밈.
      </p>
      <div className="price">99,000 원</div>
      <div className="sizes">
        {sizes.map((el, i) => (
          <ProductSize key={i} currSize={el} />
        ))}
      </div>
      <input type="button" value="장바구니" />
      <ul className="subMenu">
        <li>오프라인 매장에 재고상태 보기</li>
        <li>배송, 교환 및 반품</li>
        <li>공유하기</li>
      </ul>
    </div>
  );
}
