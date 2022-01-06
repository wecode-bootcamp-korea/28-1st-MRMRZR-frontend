import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductGallery from './ProductGallery/ProductGallery';
import ProductDescription from './ProductDescription/ProductDescription';
import './ProductDetail.scss';

function ProductDetail() {
  const [productVal, setProductVal] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(
      `http://7c51-211-106-114-186.ngrok.io/products/detail/${params.product_id}`
    )
      .then(res => res.json())
      .then(res => {
        setProductVal(res.results);
      });
  }, []);

  return (
    <div className="productDetail">
      <div className="productDetailWrap">
        <ProductGallery productVal={productVal} />
        <ProductDescription productVal={productVal} />
      </div>
    </div>
  );
}

export default ProductDetail;
