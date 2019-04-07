// //Task-1
// let input;
// const numbers = [];
// let total = 0;

// while (input !== 0) {
//   input = Number(prompt('Введите число'));
//   if (Number.isNaN(input) === false) {
//     numbers.push(input);
//   } else {
//     alert('Было введено не число');
//   }
// }

// numbers.pop();
// console.log(numbers);

// if (numbers.length !== 0) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     total += numbers[i];
//   }
//   console.log(`Общая сумма чисел равна ${total}`);
// }

// //Task-2

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;

while (attemptsLeft > 0) {
  const input = prompt('Введите пароль');
  if (passwords.includes(input) === true) {
    alert('Добро пожаловать!');
    break;
  } else {
    attemptsLeft -= 1;
    if (attemptsLeft > 0) {
      alert(`Неверный пароль, осталось ${attemptsLeft} попыток!`);
    } else {
      alert('У вас закончились попытки, аккаунт заблокирован!');
    }
  }
}
