import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductGallery from './ProductGallery/ProductGallery';
import ProductDescription from './ProductDescription/ProductDescription';
import './ProductDetail.scss';

function ProductDetail() {
  const [productVal, setProductVal] = useState({});
  const params = useParams();

  // useEffect(() => {
  //   setProductVal({
  //     id: 1,
  //     name: '스웨트셔츠',
  //     product_number: 'S00001',
  //     description: '두꺼운 재질',
  //     price: 99000,
  //     is_new: true,
  //     image_urls: [
  //       {
  //         image_id: 11,
  //         image_url:
  //           'https://cdn.pixabay.com/photo/2017/08/06/12/04/people-2591867_1280.jpg',
  //       },
  //       {
  //         image_id: 12,
  //         image_url:
  //           'https://cdn.pixabay.com/photo/2017/08/06/12/04/people-2591867_1280.jpg',
  //       },
  //       {
  //         image_id: 13,
  //         image_url:
  //           'https://cdn.pixabay.com/photo/2017/08/06/12/04/people-2591867_1280.jpg',
  //       },
  //     ],
  //     sizes: [
  //       { size_id: 1, size_name: 'XS', size_stock: 0 },
  //       { size_id: 2, size_name: 'S', size_stock: 30 },
  //       { size_id: 3, size_name: 'M', size_stock: 35 },
  //       { size_id: 4, size_name: 'L', size_stock: 30 },
  //       { size_id: 5, size_name: 'XL', size_stock: 20 },
  //     ],
  //   });
  // }, []);
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
