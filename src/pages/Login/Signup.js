import React from 'react'; //  { useState, useEffect }

// import { BsExclamationCircle } from '';
import '../Login/SignUp.scss';

export default function SignUp() {
  // const [userEmail, setUserEmail] = useState('');
  // const [userPW, setUserPW] = useState('');
  // const [user2PW, setUser2Pw] = useState('');
  // const [username, setUsername] = useState('');
  // const [isSuccess, setIsSuccess] = useState('');

  // const handleEmail = event => {
  //   setUserEmail(event.target.value);
  // };

  // const handlePW = event => {
  //   setUserPW(event.target.value);
  // };

  // const handle2PW = event => {
  //   setUser2Pw(event.target.value);
  // };

  // const handlename = event => {
  //   setUsername(event.target.value);
  // };

  // const joinUser = event => {
  //   event.preventDefault();
  //   if (userPW === user2PW) {
  //     const userData = {
  //       email: userEmail,
  //       password: userPW,
  //       name: username,
  //     };

  //     fetch('http://cd66-59-187-202-238.ngrok.io/users/signup', {
  //       method: 'POST',
  //       body: JSON.stringify(userData),
  //     })
  //       .then(res => res.json())
  //       .then(data => setIsSuccess(data));
  //   }
  // };

  // useEffect(() => {
  //   if (typeof setIsSuccess !== 'undefined') console.log(isSuccess);
  // }, [isSuccess]);

  return (
    <section className="signup">
      <div className="signupContainer">
        <header className="main-class-header">
          <h1 className="main-class-header-name">개인 정보</h1>
        </header>
        <div className="email-input">
          <input
            type="text"
            id="id"
            class="int"
            maxlength="20"
            placeholder="이메일"
            // onChange={handleEmail}
            // value={userEmail}
          />
        </div>
        <div className="email-input-error">
          {/* <span>필수 입력란입니다.</span> */}
          <div className="signup-repassword">
            <div className="password-input">
              <input
                type="text"
                id="id"
                class="int"
                maxlength="20"
                placeholder="비밀번호"
                // onChange={handlePW}
                // value={userPW}
              />
            </div>
            <div className="password-input-error">
              {/* <span>필수 입력란입니다.</span> */}

              <div className="repassword-input">
                <input
                  type="text"
                  id="id"
                  class="int"
                  maxlength="20"
                  placeholder="비밀번호 확인"
                  // onChange={handle2PW}
                  // value={user2PW}
                />
              </div>
              <div className="repassword-input-error">
                {/* <span>필수 입력란입니다.</span> */}
              </div>
            </div>
          </div>
          <div className="signup-name">
            <input
              type="text"
              id="id"
              class="int"
              maxlength="20"
              placeholder="이름"
              // onChange={handlename}
              // value={username}
            />
          </div>
          <div className="name-input-error">
            <span />
            {/* <span>필수 입력란입니다.</span> */}
          </div>
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
            <span>* 필수적 개인정보의 수집 및 이용에 대한 동의</span>
          </div>
          <div className="checkbox-each">
            <input type="checkbox" />
            <span>선택적 개인정보의 수집 및 이용에 대한 동의</span>
          </div>
          <div className="checkbox-each">
            <input type="checkbox" />
            <span>광고성 정보 수신에 대한 동의</span>
          </div>
        </div>
        <div className="signup-button-area">
          <button
            className="signup-button"
            type="button"
            // onClick={joinUser}
          >
            <span>계정만들기</span>
          </button>
        </div>
      </div>
    </section>
  );
}
