import { useState } from 'react';
import ProductSize from './ProductSize/ProductSize';
import './ProductDescription.scss';

export default function ProductDescription({ productVal }) {
  // const testSizes = ['XS', 'S', 'M', 'L', 'XL'];
  const [sizeSelected, setSizeSelected] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');

  const activateBtn = () => {
    if (sizeSelected === true) return;
    setSizeSelected(true);
  };

  const addToCart = e => {
    e.preventDefault();
    if (!sizeSelected) {
      alert('사이즈를 선택해주세요.');
      return;
    } else {
      fetch('http://7c51-211-106-114-186.ngrok.io/carts', {
        method: 'POST',
        body: JSON.stringify({
          product_id: productVal.product_number,
          size_id: selectedSize,
          quantity: 1,
        }),
      })
        .then(response => response.json())
        .then(result => console.log('결과: ', result));
      // ToDo : 통신완료후 갯수변경로직
      alert('추가되었습니다.');
    }
  };

  const updateSize = size => {
    setSelectedSize(size);
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
              onButtonClick={updateSize}
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
