import React from 'react';
import ProductGallery from './ProductGallery/ProductGallery';
import ProductDescription from './ProductDescription/ProductDescription';
import './ProductDetail.scss';

function ProductDetail() {
  return (
    <div className="productDetail">
      <div className="productDetailWrap">
        <ProductGallery />
        <ProductDescription />
      </div>
    </div>
  );
}

export default ProductDetail;
