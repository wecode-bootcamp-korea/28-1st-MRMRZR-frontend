import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';

import Product from './components/Product';
import FilterModal from './components/FilterModal';

import './ProductList.scss';

const FETCH_URL = 'http://localhost:3000/';

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetch(`${FETCH_URL}/data/ProductListData/ProductListData.json`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setProductList(data));
  }, []);

  const showFilterModal = () => {
    return !isClicked ? setIsClicked(true) : setIsClicked(false);
  };

  return (
    <div className="productListContent">
      <div className="productListHeader">New Arrivals</div>
      <div className="productContour" />
      <div className="filterButtons">
        <div className="filterButton">
          <span>사이즈</span>
          <button type="button" onClick={showFilterModal}>
            <IoIosArrowDown />
          </button>
        </div>
        <FilterModal isClicked={isClicked} />
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
