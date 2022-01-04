import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import Product from './components/Product';
import DropDown from './components/DropDown';
import './ProductList.scss';

const API = 'http://2c0a-27-1-214-34.ngrok.io/product';

const changeSizeToNumbers = {
  xs: 1,
  s: 2,
  m: 3,
  l: 4,
  xl: 5,
};

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [selectSizeList, setSelectSizeList] = useState([]);
  const [selectSort, setSelectSort] = useState('');

  const navigate = useNavigate();
  const { search, pathname } = useLocation();

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
    const filterQuery = selectSizeList
      .map(size => `size=${changeSizeToNumbers[size.toLowerCase()]}`)
      .join('&');
    let sortQuery = '';

    if (selectSort !== '') {
      if (addAndSymbol) {
        sortQuery = `&sort=price_${selectSort}`;
      } else {
        sortQuery = `sort=price_${selectSort}`;
      }
    }

    const queryString = filterQuery.concat(sortQuery);
    navigate(`?${queryString}`);
  };

  const resetFilter = () => {
    setSelectSizeList([]);
    setSelectSort('');

    navigate(`${pathname}`);
    fetch(`${API}`)
      .then(res => res.json())
      .then(data => {
        setProductList(data.results);
      });
  };

  const getQueryData = () => {
    fetch(`${API}${search}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        setProductList(data.results);
      });
  };

  useEffect(() => {
    (selectSizeList.length > 0 || selectSort !== '') && setQueryUrl();
  }, [selectSizeList, selectSort]);

  useEffect(() => {
    search && getQueryData();
  }, [search]);

  useEffect(() => {
    fetch(`${API}`)
      .then(res => res.json())
      .then(data => setProductList(data.results));
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
        {productList.map((product, idx) => {
          const { product_id, ...productInfo } = product;
          return (
            <Link
              className="productLink"
              to={`/product/detail/${product_id}`}
              key={product_id + idx}
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
