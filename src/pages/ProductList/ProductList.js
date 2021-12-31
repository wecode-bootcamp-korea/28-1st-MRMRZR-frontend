import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Product from './components/Product';
import DropDown from './components/DropDown';

import './ProductList.scss';

const FETCH_URL = 'http://localhost:3000/';
const API = 'http://localhost3000/product-list';

function ProductList() {
  const [productList, setProductList] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    fetch(`${FETCH_URL}/data/ProductListData/ProductListData.json`)
      .then(res => res.json())
      .then(data => setProductList(data));
  }, []);

  useEffect(() => {
    fetch(`${API}/filter${search}`)
      .then(res => res.json())
      .then(result => {
        console.log(result);
      });
  }, [search]);

  return (
    <div className="productListContent">
      <div className="header">New Arrivals</div>
      <div className="contour" />
      <div className="dropDownWrapper">
        <DropDown name="사이즈" standard="filter" query="size" />
        <DropDown name="SORT BY" standard="sort" query="sorted" />
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
