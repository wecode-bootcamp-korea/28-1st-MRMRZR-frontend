import React, { useState, useEffect } from 'react';
import '../Login/SignUp.scss';
import { useNavigate } from 'react-router-dom';

const isValidEmail =
  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const isValidPw = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/;

export default function SignUp() {
  const [userEmail, setUserEmail] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userRePw, setUserRePw] = useState('');
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const handleEmail = event => {
    setUserEmail(event.target.value);
  };

  const handlePw = event => {
    setUserPw(event.target.value);
  };

  const handleRePw = event => {
    setUserRePw(event.target.value);
  };

  const handleName = event => {
    setUserName(event.target.value);
  };

  const validateCheck = () => {
    const validator = {
      email: isValidEmail.test(userEmail),
      pw: isValidPw.test(userPw),
      pwSame: userPw === userRePw,
    };

    let keyValue;
    for (let key in validator) {
      keyValue = !validator[key] ? key : null;
      if (keyValue !== null) break;
    }
    return keyValue;
  };

  const joinUser = event => {
    event.preventDefault();

    // if (validateCheck() === null) {
    const userData = {
      email: userEmail,
      password: userPw,
      name: userName,
    };

    // fetch('http://13.124.143.239:8000/users/signup', {
    fetch(' http://8a05-211-106-114-186.ngrok.io/users/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.result === 'CREATED') {
          alert('회원가입 되었습니다. 로그인을 진행해주세요!');
          navigate('/login');
        } else {
          alert('아이디나 비밀번호를 확인해주세요.');
        }
      });
  };

  return (
    <section className="makeSignUp">
      <div className="signUpContainer">
        <header className="signUpContainerHeader">
          <h1 className="signUpContainerTitle">개인 정보</h1>
        </header>
        <div className="signUpEmail">
          <input
            type="text"
            className="int"
            maxLength="20"
            placeholder="이메일"
            onChange={handleEmail}
            value={userEmail}
          />
        </div>
        <div className="signUpPassContent">
          <div className="signUpPassword">
            <input
              type="password"
              className="int"
              maxLength="20"
              placeholder="비밀번호"
              onChange={handlePw}
              value={userPw}
            />
          </div>

          <div className="signUpRePassword">
            <input
              type="password"
              className="int"
              maxLength="20"
              placeholder="비밀번호를 한 번 더 입력해 주십시오"
              onChange={handleRePw}
              value={userRePw}
            />
          </div>
        </div>

        <div className="signupName">
          <input
            type="text"
            className="int"
            maxLength="20"
            placeholder="이름"
            onChange={handleName}
            value={userName}
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
          <span>계정 만들기</span>
        </button>
      </div>
    </section>
  );
}
