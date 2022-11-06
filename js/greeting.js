const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const STORAGE_USERNAME = "username"

let userName = localStorage.getItem(STORAGE_USERNAME);

function checkLogin(){
    loginForm.classList.add(HIDDEN_CLASSNAME);
    userName = loginInput.value;
    localStorage.setItem(STORAGE_USERNAME, userName);
    greeting.innerHTML = `Hello, ${userName}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event){
    event.preventDefault();
    checkLogin();    
}

loginForm.addEventListener("submit", onLoginSubmit);

if(userName !== null) {
    loginInput.value = userName;
    checkLogin();  
}