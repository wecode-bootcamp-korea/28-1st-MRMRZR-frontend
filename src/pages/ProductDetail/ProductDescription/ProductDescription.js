import { useState } from 'react';
import ProductSize from './ProductSize/ProductSize';
import './ProductDescription.scss';

export default function ProductDescription({ productVal }) {
  // const testSizes = ['XS', 'S', 'M', 'L', 'XL'];
  const accessToken = localStorage.getItem('token');
  const [selectedSize, setSelectedSize] = useState('');

  const activateBtn = () => {
    if (selectedSize === true) return;
  };

  const addToCart = e => {
    e.preventDefault();
    if (!selectedSize) {
      alert('사이즈를 선택해주세요.');
      return;
    } else {
      // fetch('http://13.124.143.239:8000/carts', {
      fetch('http://8a05-211-106-114-186.ngrok.io/carts', {
        method: 'POST',
        headers: {
          Authorization: accessToken,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          product_id: productVal.product_id,
          size_id: selectedSize,
          quantity: 1,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === 'SUCCESS') {
            alert('추가되었습니다.');
            // Todo : 장바구니 업뎃
          } else {
            alert('다시 시도해주세요.');
          }
        });
    }
  };

  const updateSize = size => {
    setSelectedSize(size);
  };

  return (
    <div className="productDescription">
      <h2>{productVal.product_name}</h2>
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
