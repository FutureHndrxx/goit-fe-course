'use strict';

//____________TASK_1

let message;
const ADMIN_PASSWORD = 'm4ng0h4ckz';

const value = prompt('Please enter your password');

if (value === null) {
  message = 'Отменено пользователем!';
} else if (value !== ADMIN_PASSWORD) {
  message = 'Доступ запрещен, неверный пароль!';
} else {
  message = 'Добро пожаловать!';
}

alert(message);

//____________TASK_2

const credits = 23580;
const pricePerDroid = 3000;
const quantity = 12;
const totalPrice = pricePerDroid * quantity;
const creditsLeft = credits - pricePerDroid * quantity;

if (totalPrice > credits) {
  alert('Недостаточно средств на счету!');
} else {
  alert(
    `Вы купили ${quantity} дроидов, на счету осталось ${creditsLeft} кредитов.`,
  );
}

//____________TASK_3

let price;
const country = prompt('Please set your country to ship');

switch (country.toLowerCase()) {
  case 'китай':
    price = 100;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  case 'южная америка':
    price = 250;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  case 'австралия':
    price = 170;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  case 'индия':
    price = 80;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  case 'ямайка':
    price = 120;
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  default:
    console.log('В вашей стране доставка не доступна');
}
