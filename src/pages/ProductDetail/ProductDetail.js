import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductGallery from './ProductGallery/ProductGallery';
import ProductDescription from './ProductDescription/ProductDescription';
import './ProductDetail.scss';

function ProductDetail() {
  const [productVal, setProductVal] = useState({});
  const params = useParams();

  // setProductVal({
  //   id: 1,
  //   name: '목업데이터 네임',
  //   product_number: '목업데이터 제품번호',
  //   description: '목업데이터 디스크립션',
  //   price: '목업데이터 가격',
  //   is_new: false,
  //   image_urls: [
  //     'https://cdn.pixabay.com/photo/2017/08/06/12/04-people-2591867_1280.jpg',
  //   ],
  //   sizes: [
  //     { size_id: 1, size_name: 'XS' },
  //     { size_id: 2, size_name: 'S' },
  //     { size_id: 3, size_name: 'M' },
  //     { size_id: 4, size_name: 'L' },
  //     { size_id: 5, size_name: 'XL' },
  //   ],
  // });

  useEffect(() => {
    fetch(`http://10.58.7.205:8000/products/detail/1`)
      // fetch(`http://10.58.5.4:8000/products/detail/${params.id}`)
      .then(res => res.json())
      .then(res => {
        setProductVal(res.results);
      });
  }, []);

  console.log(productVal);

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
