import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import Dropdown from './Dropdown/Dropdown';
import Cart from './Cart/Cart';
import './Nav.scss';

export default function Nav() {
  const [searchActivated, setSearchActivated] = useState(false);
  const [cartValue, setCartValue] = useState([]);
  const [classOfCartWrap, setClassOfCartWrap] = useState('');
  // todo : 장바구니 수량 state로 관리하고, +-버튼 눌렀을 때 setState
  // todo : 적용버튼 클릭 시 fetch로 변경 요청

  useEffect(() => {
    if (classOfCartWrap === 'activated') {
      fetch('http://7c51-211-106-114-186.ngrok.io/carts')
        .then(res => res.json())
        .then(res => {
          setCartValue(res);
        });
    }
  }, [classOfCartWrap]);

  const activateCart = () => {
    if (classOfCartWrap === '') setClassOfCartWrap('activated');
    if (classOfCartWrap === 'activated') setClassOfCartWrap('');
  };

  const closeCart = () => {
    setClassOfCartWrap('');
  };

  return (
    <nav className="Nav">
      <div className="navInner">
        <h1>
          <Link to="/products">
            MRMR
            <br />
            ZARA
          </Link>
        </h1>
        <ul className="categories">
          <li>
            <Link to="/Main">New Arrivals</Link>
          </li>
          <li className="women">
            <Link to="/products">WOMEN</Link>
            <Dropdown />
          </li>
          <li>MEN</li>
          <li>KIDS</li>
          <li>BEAUTY</li>
          <li>SHOES &amp; BAGS</li>
        </ul>
        <ul className="myMenu">
          <li
            className="search"
            onClick={() => setSearchActivated(prev => !prev)}
          >
            검색
          </li>
          <li>보기</li>
          <li>로그인</li>
          <li>도움말</li>
          <li>
            <span onClick={activateCart}>장바구니</span>
            <div className={`cartWarp${classOfCartWrap}`}>
              <span className="basket">장바구니</span>
              <AiOutlineClose className="close" onClick={closeCart} />
              {cartValue.result &&
                cartValue.result.map((el, i) => (
                  <Cart
                    key={i}
                    cart_id={el.cart_id}
                    product_id={el.product_id}
                    product_name={el.product_name}
                    product_number={el.product_number}
                    price={el.price}
                    size={el.size}
                    image_url={el.image_urls}
                    quantity={el.quantity}
                    size_id={el.size_id}
                    classOfCartWrap={classOfCartWrap}
                    closeCart={closeCart}
                  />
                ))}
              <input type="button" value="장바구니로 가기" />
            </div>
          </li>
        </ul>
        <span className={`searchBox ${searchActivated && 'activated'}`}>
          <AiOutlineSearch />
          <input type="search" />
        </span>
      </div>
    </nav>
  );
}
