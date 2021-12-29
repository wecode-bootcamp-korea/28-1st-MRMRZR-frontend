import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import './Product.scss';

export default function Product(props) {
  const { url, name, price } = props;

  return (
    <div>
      <div className="imageHolder">
        <img alt={`${name}`} src={url} />
      </div>
      <div className="description">
        <div className="description__name">{name}</div>
        <div className="description__price">{price}</div>
        <div className="description__color">black</div>
        <div className="description__wishButton">
          <div className="productFilter"></div>
          <FaRegHeart></FaRegHeart>
        </div>
      </div>
    </div>
  );
}
