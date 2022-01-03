import React, { useState, useEffect } from 'react';
// import React from 'react-dom';
import './Login.scss';

function Login() {
  const [userEmail, setUserEmail] = useState();
  const [userPW, setUserPW] = useState();
  const [isSuccess, setIsSuccess] = useState();

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
    fetch('http://cd66-59-187-202-238.ngrok.io/users/login ', {
      method: 'POST',
      body: JSON.stringify(userData),
    })
      .then(res => res.json())
      .then(data => setIsSuccess(data));
  };

  useEffect(() => {
    if (typeof setIsSuccess !== 'undefined') console.log(isSuccess);
  }, [isSuccess]);

  return (
    <main className="user-container">
      <section className="login-view-content">
        <div className="login-view">
          <h2 className="login-view-title">
            <span>로그인</span>
          </h2>
        </div>
        <div className="login-content-id">
          <input
            id="id"
            type="text"
            placeholder="이메일"
            onChange={handleEmail}
            value={userEmail}
          />
        </div>
        <div className="login-content-password">
          <input
            id="pw"
            type="text"
            placeholder="비밀번호"
            onChange={handlePW}
            value={userPW}
          />
        </div>
        <a
          className="forget-password"
          href="https://www.zara.com/kr/ko/user/account/password/recover"
        >
          비밀번호를 잊으셨습니까?
        </a>
        <div className="login-button-area">
          <button type="button" onClick={loginUser}>
            <span>로그인</span>
          </button>
        </div>
      </section>

      <section className="login-signup">
        <div className="signup-view">
          <h2 className="login-signup-title">
            <span>등록</span>
          </h2>
        </div>
        <p className="login-signup-text">
          <span>
            Zara.com 회원으로 가입하시면 빠르고 편리하게 이용하실 수 있습니다.{' '}
          </span>
        </p>
        <div className="login-signup-text">
          <span>
            "아직"
            <strong> Zara.com </strong>
            "의 회원이 아니시라면 이메일로 간편하게 가입하실 수 있습니다. "
          </span>
        </div>
        <div className="signup-button-area">
          <button type="button">
            <span>계정 만들기</span>
          </button>
        </div>
      </section>
    </main>
  );
}

export default Login;
