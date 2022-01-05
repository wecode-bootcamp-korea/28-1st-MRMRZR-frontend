import { useState } from 'react';
import ProductSize from './ProductSize/ProductSize';
import './ProductDescription.scss';

export default function ProductDescription({ productVal }) {
  // const testSizes = ['XS', 'S', 'M', 'L', 'XL'];
  const [sizeSelected, setSizeSelected] = useState(false);

  const activateBtn = () => {
    if (sizeSelected === true) return;
    setSizeSelected(true);
  };

  const addToCart = () => {
    sizeSelected ? alert('추가되었습니다.') : alert('사이즈를 선택해주세요.');
  };

  return (
    <div className="productDescription">
      <h2>{productVal.name}</h2>
      <p className="itemCode">{productVal.product_number}</p>
      <p className="desctiption">{productVal.description}</p>
      <div className="price">{productVal.price} KRW</div>
      <div className="sizes" onClick={activateBtn}>
        {/* {testSizes.map((el, i) => (
          <ProductSize key={i} currSize={el} />
        ))} */}
        {productVal.sizes &&
          productVal.sizes.map((el, i) => (
            <ProductSize
              key={i}
              currSize={el.size_name}
              currStock={el.size_stock}
            />
          ))}
      </div>
      <input type="button" value="장바구니" onClick={addToCart} />
      <ul className="subMenu">
        <li>오프라인 매장에 재고상태 보기</li>
        <li>배송, 교환 및 반품</li>
        <li>공유하기</li>
      </ul>
    </div>
  );
}
