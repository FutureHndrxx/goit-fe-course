'use strict';

const allLogins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = login => {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = (allLogins, login) => {
  if (allLogins.includes(login)) {
    return false;
  } else {
    return true;
  }
};

const addLogin = (allLogins, login) => {
  if (login === null) {
    return 'Отмена добавления логина!';
  }
  if (isLoginValid(login) === true) {
    if (isLoginUnique(allLogins, login) === true) {
      allLogins.push(login);
      return 'Логин успешно добавлен!';
    } else {
      return 'Такой логин уже используется!';
    }
  } else {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
};

const input = prompt('Введите логин:');

console.log(addLogin(allLogins, input));
