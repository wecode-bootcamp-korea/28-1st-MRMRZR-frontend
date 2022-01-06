import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import './Product.scss';

export default function Product(props) {
  const { image_urls, product_name, price } = props;

  return (
    <div className="product">
      <div className="imageHolder">
        <img alt={product_name} src={image_urls} />
      </div>
      <div className="description">
        <div className="name">{product_name}</div>
        <div className="price">{price} 원</div>
        <div className="wishButton">
          <div className="productFilter" />
          <FaRegHeart />
        </div>
      </div>
    </div>
  );
}
