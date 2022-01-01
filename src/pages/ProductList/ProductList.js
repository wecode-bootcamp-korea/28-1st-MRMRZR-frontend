import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Product from './components/Product';
import DropDown from './components/DropDown';

import './ProductList.scss';

function ProductList() {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const [productList, setProductList] = useState([]);
  const [fetchUrl, setFetchUrl] = useState([]);

  useEffect(() => {
    fetch('/data/ProductListData/ProductListData.json')
      .then(res => res.json())
      .then(data => setProductList(data));
  }, []);

  useEffect(() => {
    fetch(`${pathname}${search}${fetchUrl.join('&')}`)
      .then(res => res.json())
      .then(result => {
        setProductList(result);
      });
  }, [fetchUrl]);

  const checkedValue = event => {
    const { type, checked, standard, name, value } = event.target;
    navigate(`/product-list/${standard}?${name}=${value}`);

    if (type === 'checkbox' && checked) {
      const url = `${search.slice(1)}`;
      setFetchUrl(fetchUrl.concat(url));
    } else {
      const removeIndex = fetchUrl.indexOf(name);
      setFetchUrl(fetchUrl.splice(removeIndex, 1));
    }
  };

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
          standard="filter"
          query="size"
          checkedValue={checkedValue}
        />
        <DropDown
          name="SORT BY"
          standard="sort"
          query="sorted"
          checkedValue={checkedValue}
        />
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
