import React from 'react';
import ProductSize from './ProductSize/ProductSize';
import './ProductDescription.scss';

export default function ProductDescription({ productVal }) {
  return (
    <div className="productDescription">
      <h2>{productVal.name}</h2>
      <p className="itemCode">{productVal.product_number}</p>
      <p className="desctiption">{productVal.description}</p>
      <div className="price">{productVal.price}</div>
      <div className="sizes">
        {productVal.sizes &&
          productVal.sizes.map((el, i) => (
            <ProductSize key={i} currSize={el.size_name} />
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
