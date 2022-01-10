## [FE] 무럭무럭ZARA

## 프로젝트 소개

ZARA 홈페이지를 참고해 제작한 커머스사이트입니다.

## 개발 인원 및 기간

### 개발기간 ( 총 11일)

- 2021/12/27 ~ 2022/1/7
- 프로젝트 관리 : <a href="https://trello.com/b/2f3aGMvW/first-sprint" >Trello</a>

### FRONTEND (3명)

<a href="https://github.com/sseunn1" >김선주</a>

<a href="https://github.com/hyeonze" > 안현재 </a>

<a href="https://github.com/wjdgotn77" > 정해수 </a>

### BACKEND (3명)

이정석, 장우경, 지원석(https://github.com/wecode-bootcamp-korea/28-1st-MRMRZR-backend)

## 적용 기술 및 구현 기능 적용 기술

`Front-End` : JavaScript, React.js, SASS, React-router-dom </br>
`Back-End` : Django, Python, MySQL, 미니콘다 </br>
`Common` : Git, GitHub, Slack, Trello, Notion </br>

## 담당페이지

### 김선주
**Login / Sign Up**
<로그인 페이지></br>
1. 직관적 UI구현으로 알아보기 쉬운 로그인 페이지
2. 이메일 input창과 비밀번호 input창을 구현
3. 이메일과 비밀번호를 입력하였을때, 유효성검사가 가능 
4. 회원가입 후 로그인을 했을때, 서버와 통신을 완료하였습니다.
5. 로그인 페이지에서 회원가입 페이지로의 연결을 완료했습니다. 

<회원가입 페이지></br>
1. 회원가입 페이지 또한 알아보기 쉽게 만들었고,
2. 이메일 input창과 비밀번호 input창, 비밀번호 재입력 input창을 구현
3. 이메일 유효성 검사와 비밀번호 같은값 재입력 유효성검사가 가능하도록 하였습니다.


### 정해수
**Product List** </br>
 1. 사이즈 필터 및 가격별 정렬기능 구현.
   - 체크박스에서 원하는 사이즈를 선택시 해당 사이즈만 쿼리스트링으로 요청해 화면에 정렬해줍니다. </br>
   - 가격낮은순 / 가격높은순 버튼을 클릭했을 때, 조건에 해당하는 순서대로 상품들이 정렬됩니다. </br>
   - clear 버튼을 클릭시, 모든 필터가 해제됩니다.
 2. 쿼리스트링을 사용한 무한 스크롤 구현.
   - 사용자가 스크롤을 내렸을 때, 화면에 띄워진 제품이 마지막이라면, </br>
     offset과 limit을 이용해 백엔드에서 데이터를 요청하고 해당 데이터를 업데이트해줍니다.
     
### 안현재
**Navigation Bar**</br>
모든 페이지에서 공동적으로 사용할 네브바 컴포넌트
1. 장바구니를 누르면 우측에서 현재 장바구니 현황을 백엔드와 통신을 해서 화면에 표시
2. 장바구니에서 수량 수정 및 삭제기능 구현

**Product Detail**</br>
리스트에서 라우터를 통해 들어올 수 있는 제품화면
1. Path Parameter를 통해 선택한 상품에 맞는 데이터를 통신해서 화면에 표시
2. 사이즈선택 후 장바구니 버튼을 클릭 시 장바구니에 추가

## 영상

### 로그인

### 회원가입

### 프로덕트리스트

### 프로덕트디테일

### 장바구니
