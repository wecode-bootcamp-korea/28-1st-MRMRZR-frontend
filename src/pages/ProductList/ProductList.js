import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Product from './components/Product';
import FilterButton from './components/FilterButton';
import './ProductList.scss';

const FETCH_URL = 'http://localhost:3001/';

function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch(`${FETCH_URL}/data/ProductListData/ProductListData.json`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setProductList(data));
  }, []);

  return (
    <div className="productListContent">
      <div className="productListHeader">New Arrivals</div>
      <div className="productContour"></div>
      <div className="filterButtons">
        <FilterButton standard="사이즈" />
        <FilterButton standard="SORT BY" />
      </div>
      <div className="productList">
        {productList.map(product => {
          const { product_id, ...productInfo } = product;
          return (
            <Link
              className="productLink"
              key={product_id}
              to={`product-detail/${product_id}`}
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
