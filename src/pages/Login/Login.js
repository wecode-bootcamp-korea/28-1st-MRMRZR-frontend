import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

// import React from 'react-dom';
import './Login.scss';

function Login() {
  const [userEmail, setUserEmail] = useState();
  const [userPW, setUserPW] = useState();
  const [isSuccess, setIsSuccess] = useState();

  const navigate = useNavigate();

  const handleEmail = event => {
    setUserEmail(event.target.value);
  };

  const handlePW = event => {
    setUserPW(event.target.value);
  };
  const loginUser = event => {
    event.preventDefault();

    const userData = {
      email: userEmail,
      password: userPW,
    };

    fetch('http://b474-211-106-114-186.ngrok.io/users/login', {
      method: 'POST',
      body: JSON.stringify(userData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.result.status === 200) {
          localStorage.setItem('token', data.result.token);
          navigate('/');
        } else if (data.result.message === 'UNAUTHORIZED') {
          alert('아이디나 비밀번호를 확인해주세요.');
        }
      });
  };
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
              onChange={handlePW}
              value={userPW}
            />
          </div>
          <a
            className="forgetPassword"
            href="https://www.zara.com/kr/ko/user/account/password/recover"
          >
            비밀번호를 잊으셨습니까?
          </a>
          <div className="loginBtn">
            <button type="button" onClick={loginUser}>
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
            <button type="button">
              <span>계정 만들기</span>
            </button>
          </div>
        </section>
      </article>
    </main>
  );
}

export default Login;
