import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';

import Product from './components/Product';
import FilterDropDown from './components/FilterDropDown';

import './ProductList.scss';

const FETCH_URL = 'http://localhost:3000/';

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [isDropDownClicked, setIsDropDownClicked] = useState(false);

  useEffect(() => {
    fetch(`${FETCH_URL}/data/ProductListData/ProductListData.json`)
      .then(res => res.json())
      .then(data => setProductList(data));
  }, []);

  const filterSize = productList.filter(product => product.size);

  const showFilterDropDown = () => {
    return !isDropDownClicked
      ? setIsDropDownClicked(true)
      : setIsDropDownClicked(false);
  };

  return (
    <div className="productListContent">
      <div className="header">New Arrivals</div>
      <div className="contour" />
      <div className="filterButtonWrapper">
        <div className="filterButton">
          <span>사이즈</span>
          <button type="button" onClick={showFilterDropDown}>
            <IoIosArrowDown />
          </button>
        </div>
        <FilterDropDown isClicked={isDropDownClicked} />
      </div>
      <div className="productListWrapper">
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
