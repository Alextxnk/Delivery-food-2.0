"use strict";

/*
function sayMeow() {
  console.log("Meow"); //тело функции
}
sayMeow();
*/

/*
//function expression (anonim function)
const sayMeow = function () {
  console.log("Meow"); //тело функции
};
sayMeow();
*/

/*
//lyambda
const sayMeow = () => {
  console.log("Meow"); //тело функции
};
sayMeow();
*/

/*
//объекты
const obj = {
  //свойство
  name: "Alex",
  age: 19,
  //метод(хранит функцию)
  sayHello: function () {
    console.log("Привет, меня зовут Alex");
  },
};

obj.sayHello();
console.log(obj.age);
*/

/*
//массивы
const arr = [1, 2, 3, 4, 5];
console.log(arr[3]);
*/

/*
//счетчик
const counter = (a, b) => {
  //параметры функции a, b
  return a + b;
};
//аргументы 2,5,5,9
console.log(counter(2, 5));
console.log(counter(5, 9));
*/

const buttonAuth = document.querySelector(".button-auth");
const modalAuth = document.querySelector(".modal-auth");
const buttonOut = document.querySelector(".button-out");
const userName = document.querySelector(".user-name");
const closeAuth = document.querySelector(".close-auth");
const logInForm = document.getElementById("logInForm"); //идентификатор
const inputLogin = document.getElementById("login");
const inputPassword = document.getElementById("password");

const login = (user) => {
  buttonAuth.style.display = "none";
  buttonOut.style.display = "flex";
  userName.style.display = "flex";
  userName.textContent = user.login;
  modalAuth.style.display = "none";
};

const logout = () => {
  buttonAuth.style.display = "flex";
  buttonOut.style.display = "none";
  userName.style.display = "none";
  userName.textContent = "";
  localStorage.removeItem("user");
};

buttonAuth.addEventListener("click", () => {
  modalAuth.style.display = "flex";
}); //обработчик событий

closeAuth.addEventListener("click", () => {
  modalAuth.style.display = "none";
}); //закрывается по нажатию на крестик

buttonOut.addEventListener("click", () => {
  logout();
});

logInForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const user = {
    login: inputLogin.value,
    password: inputPassword.value,
  };
  localStorage.setItem("user", JSON.stringify(user));
  login(user);
});

if (localStorage.getItem("user")) {
  login(JSON.parse(localStorage.getItem("user")));
}
