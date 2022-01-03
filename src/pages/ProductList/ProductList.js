import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Product from './components/Product';
import DropDown from './components/DropDown';
import './ProductList.scss';

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [selectSizeList, setSelectSizeList] = useState([]);
  const [selectSort, setSelectSort] = useState('');

  const navigate = useNavigate();

  const clickedSort = event => {
    const { className } = event.target;
    setSelectSort(className);
  };

  const checkedSize = event => {
    const { type, checked, value, name } = event.target;
    const sizeType = type === 'checkbox' && name === 'size';

    if (sizeType && checked) {
      setSelectSizeList(size => [...size, value]);
    } else {
      setSelectSizeList(size => size.filter(el => el !== value));
    }
  };

  const getDataBySort = () => {
    const filterQuery = selectSizeList.map(size => `size=${size}`).join('&');
    let sortQuery = '';

    if (selectSort !== '') sortQuery = `&order=price_${selectSort}`;

    const queryString = filterQuery.concat(sortQuery);
    navigate(`?${queryString}`);

    fetch(`?${queryString}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  };

  useEffect(() => {
    getDataBySort();
  }, [selectSizeList, selectSort]);

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
        <div className="filter">
          <DropDown
            name="사이즈"
            standard="size"
            checkedSize={checkedSize}
            sort={getDataBySort}
          />
          <button
            className="resetFilterButton"
            // onClick={getDataReset}
          >
            CLEAN ALL
          </button>
        </div>
        <div className="sort">
          <button className="ascending" onClick={clickedSort}>
            오름차순
          </button>
          <button className="descending" onClick={clickedSort}>
            내림차순
          </button>
        </div>
      </div>
      <div className="productListWrapper">
        {productList.map(product => {
          const { product_id, ...productInfo } = product;
          return (
            <Link
              className="productLink"
              to={`/product/detail/${product_id}`}
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
