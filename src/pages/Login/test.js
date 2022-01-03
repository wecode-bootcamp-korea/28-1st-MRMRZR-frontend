
    <div>
    hello world signUp
    <main>
      <section className="user-info-content">
         sign-up 
        <div className="main-class-header">
          <h1 className="main-class-header">
            <span>개인 정보</span>
          </h1>
        </div>
        <form
          className="personal-info"
          id="adress form"
          autocomplete="off"
          method="POST"
        />
        <div>
          <div className="form-email-input-label" placeholder="" type="text">
            <input className="form-email-input"> </input>
            <label className='form-email-input' id="이메일" />
          </div>
          <div className="form-email-input-error">
            <span className="email-title">이메일</span>
            <svg className="email-title-info"> </svg>
            <path></path>
            <span> 필수 입력란입니다. </span>
          </div>
        </div>
        <div className="form_column"> </div>
        <div className="form_column" data-name="password">
          {' '}
        </div>
        <div className="form-pw-input-label" placeholder="" type="text">
          <input className="form-pw-input"> </input>
          <label className='form-pw-input'  /> 
        </div>
        <div className="form-pw-input-error">
          <span className="email-title">비밀번호</span>
          <svg className="email-title-info"> </svg>
          <path></path>
          <span> 필수 입력란입니다. </span>
        </div>
        <div className="form_column" data-name="password-confirm">
          {' '}
        </div>
        <div className="form-email-input-label" placeholder="" type="text">
          <input className="form-email-input"> </input>
          <label className='form-email-input' for='' id=' ' > 비밀번호를 한 번 더 입력해 주십시오. </label>
        </div>
        <div className="form-email-input-error">
          <span className="email-title">
            비밀번호를 한 번 더 입력해 주십시오.
          </span>
          <svg className="email-title-info"> </svg>
          <path></path>
          <span> 필수 입력란입니다. </span>
        </div>
        <div className="form_column" form_column--empty>
          {' '}
        </div>
        <div className="form_column" data-name="name">
          {' '}
        </div>
        <div className="form-email-input-label" placeholder="" type="text">
          <input className="form-email-input"> </input>
          <label className='form-email-input' for='' id=' ' > 이름 </label>
        </div>
        <div className="form-email-input-error">
          <span className="email-title">이름</span>
          <svg className="email-title-info"> </svg>
          <path></path>
          <span> 필수 입력란입니다. </span>
        </div>

        <BsExclamationCircle/> 
          </div>
         </section>
       </main>
     </div>