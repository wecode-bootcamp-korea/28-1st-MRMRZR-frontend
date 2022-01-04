import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import Product from './components/Product';
import DropDown from './components/DropDown';
import './ProductList.scss';

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [selectSizeList, setSelectSizeList] = useState([]);
  const [selectSort, setSelectSort] = useState('');

  const navigate = useNavigate();
  const { search } = useLocation();

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

  const setQueryUrl = () => {
    const addAndSymbol = selectSizeList.length;
    const filterQuery = selectSizeList.map(size => `size=${size}`).join('&');
    let sortQuery = '';

    if (selectSort !== '') {
      if (addAndSymbol) {
        sortQuery = `&order=price_${selectSort}`;
      } else {
        sortQuery = `order=price_${selectSort}`;
      }
    }

    const queryString = filterQuery.concat(sortQuery);
    // 통신 후 백에서 받는 Product API 추가 ${API}
    navigate(`?${queryString}`);
  };

  const resetFilter = () => {
    setSelectSizeList([]);
    setSelectSort('');

    // 통신 후 백에서 받는 Product API로 수정.
    fetch('/data/ProductListData/ProductListData.json')
      .then(res => res.json())
      .then(result => {
        setProductList(result);
      });
  };

  const getQueryData = () => {
    // 통신 후 백에서 받는 Product API로 수정.
    fetch(`${search}`, {
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
    setQueryUrl();
  }, [selectSizeList, selectSort]);

  useEffect(() => {
    search && getQueryData();
  }, [search]);

  useEffect(() => {
    // 통신 후 백에서 받는 Product API로 수정.
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
            sort={setQueryUrl}
            search={search}
          />
          <button className="resetFilterButton" onClick={resetFilter}>
            CLEAR
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
