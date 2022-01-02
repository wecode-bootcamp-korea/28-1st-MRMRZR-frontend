import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Product from './components/Product';
import DropDown from './components/DropDown';
import './ProductList.scss';

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [selectSizeList, setSelectSizeList] = useState([]);

  const navigate = useNavigate();

  function sort() {
    const sizeSort = selectSizeList.map(size => `size=${size}`).join('&');
    navigate(`?${sizeSort}`);

    fetch(`sort?${sizeSort}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }

  const checkedSize = event => {
    const { type, checked, value } = event.target;
    if (type === 'checkbox' && checked) {
      setSelectSizeList(size => [...size, value]);
    } else {
      setSelectSizeList(size => size.filter(el => el !== value));
    }
  };

  useEffect(() => {
    fetch('/data/ProductListData/ProductListData.json')
      .then(res => res.json())
      .then(data => setProductList(data));
  }, []);

  return (
    <div className="productListContent">
      <div className="header">Women</div>
      <div className="headerDescription">
        <p>시즌에 구애받지 않는 모던한 스타일.</p>
        <p>
          <button>여성 신상품 컬렉션</button> 을 만나보세요.
        </p>
      </div>
      <div className="contour" />
      <div className="dropDownWrapper">
        <DropDown
          name="사이즈"
          standard="size"
          checkedSize={checkedSize}
          sort={sort}
        />
        <button>CLEAN ALL</button>
        {/* 가격 오름차순, 내림차순 추가 구현중 ...
        <DropDown
          name="SORT BY"
          standard="sort"
          query="sorted"
          checkedValue={checkedValue}
        /> */}
      </div>
      <div className="productListWrapper">
        {productList.map(product => {
          const { product_id, ...productInfo } = product;
          return (
            <Link
              className="productLink"
              to={`/product-detail/${product_id}`}
              key={product_id}
            >
              <Product key={product_id} {...productInfo} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
