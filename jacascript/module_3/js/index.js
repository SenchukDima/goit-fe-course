"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  if (login.length < 17 && login.length > 3) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = function(logins, login) {
  for (let value of logins) {
      if (login === value) 
        return false;
    };
    };


const addLogin = function(logins, login) {
  if( isLoginValid(login) === false) {
    return alert('Ошибка! Логин должен быть от 4 до 16 символов');
  } else 
  if ( isLoginUnique(logins, login) === false) {
   alert('Такой логин уже используется!');
  } else {
    logins.push(login);
    return alert('Логин успешно добавлен!');
  }
};
// // Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins,"robotGoogles"); // 'Такой логин уже используется!'
addLogin(logins,   'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(logins);
