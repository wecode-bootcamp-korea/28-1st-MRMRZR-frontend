import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

// import React from 'react-dom';
import './Login.scss';

const validEmail =
  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

const validPw = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/;

export default function Login() {
  const [userEmail, setUserEmail] = useState();
  const [userPw, setUserPw] = useState();

  const navigate = useNavigate();

  const handleEmail = event => {
    setUserEmail(event.target.value);
  };

  const handlePw = event => {
    setUserPw(event.target.value);
  };

  const loginUser = event => {
    event.preventDefault();

    const userData = {
      email: userEmail,
      password: userPw,
    };

    fetch('http://13.124.143.239:8000/users/login', {
      method: 'POST',
      body: JSON.stringify(userData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.result.token) {
          localStorage.setItem('token', data.result.token);
          navigate('/products');
        } else if (data.result.message === 'INVALID_USER') {
          alert('아이디나 비밀번호를 확인해주세요.');
        }
      });
  };

  const isValidLogin = validEmail.test(userEmail) && validPw.test(userPw);

  return (
    <main className="userContainer">
      <article className="userContainerView">
        <section className="userLogin">
          <div className="userLoginTitle">
            <h2 className="userLoginSpan">
              <span>로그인</span>
            </h2>
          </div>
          <div className="userLoginId">
            <input
              id="id"
              type="text"
              placeholder="이메일"
              onChange={handleEmail}
              value={userEmail}
            />
          </div>
          <div className="userLoginPassword">
            <input
              id="pw"
              type="password"
              placeholder="비밀번호"
              onChange={handlePw}
              value={userPw}
            />
          </div>
          <a
            className="forgetPassword"
            href="https://www.zara.com/kr/ko/user/account/password/recover"
          >
            비밀번호를 잊으셨습니까?
          </a>
          <div className="loginBtn">
            <button
              type="button"
              onClick={loginUser}
              className={isValidLogin ? '' : 'deactivate'}
              disabled={!isValidLogin}
            >
              <span>로그인</span>
            </button>
          </div>
        </section>

        <section className="userSignUp">
          <div className="userSignUptitle">
            <h2 className="userSignUpSpan">
              <span>등록</span>
            </h2>
          </div>
          <p className="userSignUpText">
            <span>
              <strong>Zara.com</strong>회원으로 가입하시면 빠르고 편리하게
              이용하실 수 있습니다.{' '}
            </span>
          </p>
          <div className="userSignUpNextText">
            <span>
              아직
              <strong> Zara.com</strong> 의 회원이 아니시라면 이메일로 간편하게
              가입하실 수 있습니다.
            </span>
          </div>
          <div className="userSignUpBtn">
            <button className="goSignUp" type="button">
              <Link to="/SignUp">계정 만들기</Link>
            </button>
          </div>
        </section>
      </article>
    </main>
  );
}
