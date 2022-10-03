const loginInputId = document.querySelector("#username");
const loginInputPassword = document.querySelector("#password");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const CLASSNAME_HIDDEN = "hidden";
const IOGININPUT_KEY = "loginInput";

//입력받은 id, password 값이 정의된 object를 JSON 을 이용해 String형태로 변환
//변환된 값을 localStorage에 저장하고 변환된 값으로 paintGreetings 호출
function loginSubmit(event) {
  event.preventDefault();
  const username = loginInputId.value;
  const password = loginInputPassword.value;
  const loginInput = {
    id: username,
    passwd: password,
  };
  loginForm.classList.add(CLASSNAME_HIDDEN);
  localStorage.setItem(IOGININPUT_KEY, JSON.stringify(loginInput));
  paintGreetings(loginInput);
}

//전달받은 object중에서 username을 화면에 표시
function paintGreetings(loginInput) {
  const username = loginInput.id;
  greeting.classList.remove(CLASSNAME_HIDDEN);
  greeting.innerText = `환영합니다 ${username}님!`;
}

//localStorage에 저장된 값을 object로 변환 후 변수에 저장
const savedLoginInput = localStorage.getItem(IOGININPUT_KEY);
const parsedLoginInput = JSON.parse(savedLoginInput);

//localStorage에 저장된 값이 없으면 로그인창을, 있으면 환영합니다 창을 띄움
if (parsedLoginInput === null) {
  loginForm.classList.remove(CLASSNAME_HIDDEN);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintGreetings(parsedLoginInput);
}
