"use strict";

const adminLogin = "admin";
const adminPassword = "m4ngo1zh4ackz0r";
const canceled = "Отменено пользователем!";
const loginDenied = "Доступ запрещен, неверный логин!";
const passwordDenied = "Доступ запрещен, неверный пароль!";
const accessAllowed = "Добро пожаловать!";

const login = prompt("Введите логин:");
let password;

if (login === null) {
  alert(canceled);
} else if (login !== adminLogin) {
  alert(loginDenied);
} else {
  password = prompt("Введите пароль:");

  if (password === null) {
    alert(canceled);
  } else if (password !== adminPassword) {
    alert(passwordDenied);
  } else {
    alert(accessAllowed);
  }
}
