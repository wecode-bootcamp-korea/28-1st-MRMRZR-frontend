import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Product from './components/Product';
import DropDown from './components/DropDown';

import './ProductList.scss';

const FETCH_URL = 'http://localhost:3000/';

function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch(`${FETCH_URL}/data/ProductListData/ProductListData.json`)
      .then(res => res.json())
      .then(data => setProductList(data));
  }, []);

  return (
    <div className="productListContent">
      <div className="header">New Arrivals</div>
      <div className="contour" />
      <div className="dropDownWrapper">
        <DropDown standard="사이즈" />
        <DropDown standard="SORTBY" />
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
