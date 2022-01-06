import React, { useState, useEffect } from 'react';

// import { BsExclamationCircle } from '';
import '../Login/SignUp.scss';

export default function SignUp() {
  const [userEmail, setUserEmail] = useState('');
  const [userPW, setUserPW] = useState('');
  const [user2PW, setUser2Pw] = useState('');
  const [username, setUsername] = useState('');
  const [isSuccess, setIsSuccess] = useState('');

  const handleEmail = event => {
    setUserEmail(event.target.value);
  };

  const handlePW = event => {
    setUserPW(event.target.value);
  };

  const handle2PW = event => {
    setUser2Pw(event.target.value);
  };

  const handlename = event => {
    setUsername(event.target.value);
  };

  const joinUser = event => {
    event.preventDefault();
    if (userPW === user2PW) {
      const userData = {
        email: userEmail,
        password: userPW,
        name: username,
      };

      fetch('http://b474-211-106-114-186.ngrok.io/users/signup ', {
        method: 'POST',
        body: JSON.stringify(userData),
      })
        .then(res => res.json())
        .then(data => setIsSuccess(data));
    }
  };

  useEffect(() => {
    if (typeof setIsSuccess !== 'undefined') console.log(isSuccess);
  }, [isSuccess]);

  return (
    <section className="makeSignUp">
      <div className="signUpContainer">
        <header className="signUpContainerHeader">
          <h1 className="signUpContainerTitle">개인 정보</h1>
        </header>
        <div className="signUpEmail">
          <input
            type="text"
            id="id"
            class="int"
            maxlength="20"
            placeholder="이메일"
            onChange={handleEmail}
            value={userEmail}
          />
        </div>
        <div className="signUpPassContent">
          <div className="signUpPassword">
            <input
              type="password"
              id="id"
              class="int"
              maxlength="20"
              placeholder="비밀번호"
              onChange={handlePW}
              value={userPW}
            />
          </div>

          <div className="signUpRePassword">
            <input
              type="password"
              id="id"
              class="int"
              maxlength="20"
              placeholder="비밀번호를 한 번 더 입력해 주십시오"
              onChange={handle2PW}
              value={user2PW}
            />
          </div>
        </div>

        <div className="signupName">
          <input
            type="text"
            id="id"
            class="int"
            maxlength="20"
            placeholder="이름"
            onChange={handlename}
            value={username}
          />
        </div>

        <span />
        {/* <span>필수 입력란입니다.</span> */}
      </div>
      <div className="checkboxs">
        <div className="checkbox-each">
          <input type="checkbox" />
          <span>모든 항목에 동의</span>
        </div>
        <div className="checkbox-each">
          <input type="checkbox" />
          <span>*만 14세 이상입니다. </span>
        </div>
        <div className="checkbox-each">
          <input type="checkbox" />
          <span>
            {' '}
            <u>* 필수적 개인정보의 수집 및 이용</u>에 대한 동의
          </span>
        </div>
        <div className="checkbox-each">
          <input type="checkbox" />
          <span>
            <u>선택적 개인정보의 수집 및 이용</u>에 대한 동의
          </span>
        </div>
        <div className="checkbox-each">
          <input type="checkbox" />
          <span>광고성 정보 수신에 대한 동의</span>
        </div>
      </div>
      <div className="signUpBtn">
        <button className="signup-button" type="button" onClick={joinUser}>
          <span>계정만들기</span>
        </button>
      </div>
    </section>
  );
}
