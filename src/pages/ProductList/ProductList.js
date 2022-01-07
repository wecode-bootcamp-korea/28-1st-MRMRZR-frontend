import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import Product from './components/Product';
import SizeFilter from './components/SizeFilter';
import './ProductList.scss';

// const API = 'http://13.124.143.239:8000/products';
const API = 'http://8a05-211-106-114-186.ngrok.io/products';

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

  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [offset, setOffset] = useState(0);

  const navigate = useNavigate();
  const { search, pathname } = useLocation();

  const toggleSizeFilter = () => {
    setIsDropDownActive(!isDropDownActive);
  };

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

  const resetFilter = () => {
    setSelectSizeList([]);
    setSelectSort('');
    setIsDropDownActive(false);
    setOffset(0);

    navigate(`${pathname}`);
    fetch(`${API}`)
      .then(res => res.json())
      .then(data => {
        setProductList(data.results);
      });
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight > scrollHeight - 10) {
      setOffset(offset + 8);
    }
  };

  const fetchProductList = () => {
    setIsLoading(true);
    let offsetQuery = '';

    if (selectSizeList.length > 0) {
      offsetQuery = `${search}&offset=${offset}&limit=8`;
    } else if (selectSizeList.length === 0) {
      offsetQuery = `?offset=${offset}&limit=8`;
    }

    fetch(`${API}${offsetQuery}`)
      .then(res => res.json())
      .then(data => {
        setProductList([...productList, ...data.results]);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    (selectSizeList.length > 0 || selectSort !== '') && setQueryUrl();
  }, [selectSizeList, selectSort]);

  useEffect(() => {
    search && getQueryData();
  }, [search]);

  useEffect(() => {
    setIsLoading(true);

    fetch(`${API}`)
      .then(res => res.json())
      .then(data => {
        setProductList(data.results);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    offset > 7 && offset < 40 && fetchProductList();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

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
          <SizeFilter
            name="사이즈"
            standard="size"
            checkedSize={checkedSize}
            selectSizeList={selectSizeList}
            isDropDownActive={isDropDownActive}
            toggleSizeFilter={toggleSizeFilter}
          />
          <button className="resetFilterButton" onClick={resetFilter}>
            CLEAR
          </button>
        </div>
        <div className="sort">
          <button className="ascending" onClick={clickedSort}>
            가격 낮은 순
          </button>
          <button className="descending" onClick={clickedSort}>
            가격 높은 순
          </button>
        </div>
      </div>
      <div className="productListWrapper">
        {productList.map(product => {
          const { product_id, ...productInfo } = product;
          return (
            <Link
              className="productLink"
              to={`/products/detail/${product_id}`}
              key={product_id}
            >
              <Product key={product_id} {...productInfo} />
            </Link>
          );
        })}
        {isLoading && (
          <div className="loadingSpinner">
            <div className="loading">
              <div></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;
