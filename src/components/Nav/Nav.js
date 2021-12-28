import { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown/Dropdown';
import { AiOutlineSearch } from 'react-icons/ai';
import './Nav.scss';

export default function App() {
  const [searchActivated, setSearchActivated] = useState(false);

  return (
    <nav className="Nav">
      <div className="navInner">
        <h1>
          <Link to="/Main">
            MRMR
            <br />
            ZARA
          </Link>
        </h1>
        <ul className="categories">
          <li>
            <Link to="/Main">New Arrivals</Link>
          </li>
          <li className="woman">
            <Link to="/Main">WOMAN</Link>
            <Dropdown />
          </li>
          <li>MAN</li>
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
          <li>바스켓백(0)</li>
        </ul>
        <span className={`searchBox ${searchActivated && 'activated'}`}>
          <AiOutlineSearch />
          <input type="search" />
        </span>
      </div>
    </nav>
  );
}
