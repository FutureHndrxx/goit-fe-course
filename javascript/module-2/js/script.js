//Task-1
let input;
const numbers = [];
let total = 0;

while (input !== 0) {
  input = prompt('Введите число');
  input = Number(input);
  if (Number.isNaN(input) === false) {
    numbers.push(input);
  }
  if (Number.isNaN(input) === true) {
    alert('Было введено не число');
  }
}

numbers.pop();
console.log(numbers);

if (numbers.length !== 0) {
  for (let i = 0; i < numbers.length; i += 1) {
    numbers[i] = Number(numbers[i]);
    total += numbers[i];
  }
  console.log(`Общая сумма чисел равна ${total}`);
}

//Task-2

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;

while (attemptsLeft > 0) {
  const input = prompt('Введите пароль');
  if (passwords.includes(input) === true) {
    alert('Добро пожаловать!');
    break;
  }
  if (passwords.includes(input) === false) {
    attemptsLeft -= 1;
    if (attemptsLeft > 0) {
      alert(`Неверный пароль, осталось ${attemptsLeft} попыток!`);
    }
    if (attemptsLeft === 0) {
      alert('У вас закончились попытки, аккаунт заблокирован!');
    }
  }
}
