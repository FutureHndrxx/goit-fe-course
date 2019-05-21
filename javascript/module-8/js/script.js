'use strict';

import quizData from './quizData.js';

const form = document.querySelector('form');
form.classList.add('wrapper', 'border');

createQuestionForm(quizData);

form.addEventListener('submit', submitFn);

const finishResult = document.createElement('p');
finishResult.classList.add('p');
form.after(finishResult);

function createQuestionForm(data) {
  const mainTitleOfTest = document.createElement('h2');
  mainTitleOfTest.textContent = data.title;
  mainTitleOfTest.classList.add('mb');

  form.prepend(mainTitleOfTest);

  const arrayOfQuestions = data.questions;

  arrayOfQuestions.forEach(element => {
    const titleOfQuestion = document.createElement('h3');
    titleOfQuestion.textContent = `${element.question}`;

    const section = document.createElement('section');
    section.classList.add('mb');

    const ul = document.createElement('ul');
    ul.classList.add('border');

    const button = form.lastElementChild;
    button.before(section);

    section.append(titleOfQuestion, ul);

    element.choices.forEach(choice => {
      const li = document.createElement('li');

      const label = document.createElement('label');
      label.textContent = choice;

      const input = document.createElement('input');
      input.setAttribute('type', 'radio');
      input.setAttribute('name', `${titleOfQuestion.textContent}`);

      const index = element.choices.indexOf(choice);
      input.setAttribute('value', `${index}`);

      ul.appendChild(li);
      li.appendChild(label);
      label.prepend(input);
    });
  });
}

function submitFn(event) {
  event.preventDefault();
  let result = 0;
  let quitFunction = 0;

  quizData.questions.forEach(elem => {
    const question = elem.question;
    const value = form.elements[question].value;
    const answer = elem.answer;

    if (value === '') {
      quitFunction = 1;
    }

    if (Number(value) === answer) {
      result += 1 / quizData.questions.length;
    }
  });

  if (quitFunction === 0) {
    result = Math.floor(result * 100);
    finishResult.style.display = 'block';

    if (result >= 80) {
      finishResult.textContent = `Вы прошли тест - результат ${result}% `;
      finishResult.style.color = 'green';
    } else {
      finishResult.textContent = `Вы не прошли тест - результат ${result}% `;
    }
  }
}
