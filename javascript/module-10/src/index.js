import generatePost from './templates/post-feed.hbs';
import menu from './menu.json';
import './styles.css';

const refs = {
  menu: document.querySelector('.menu'),
  button: document.querySelector('[data-action = "theme-switch"]'),
};

classAdd();

buildPostFeed(menu);

refs.button.addEventListener('click', handleTheme);

function buildPostFeed(posts) {
  const markup = posts.map(post => generatePost(post)).join('');
  refs.menu.insertAdjacentHTML('beforeend', markup);
}

function handleTheme(e) {
  const icon = e.currentTarget.firstElementChild;

  if (document.body.classList.contains('theme-light')) {
    localStorage.setItem('theme', 'theme-dark');
    localStorage.setItem('icon', 'wb_sunny');

    document.body.classList.replace('theme-light', 'theme-dark');
    icon.textContent = 'wb_sunny';
  } else {
    localStorage.clear();

    document.body.classList.replace('theme-dark', 'theme-light');
    icon.textContent = 'brightness_3';
  }
}

function classAdd() {
  if (localStorage.getItem('theme')) {
    try {
      document.body.classList.add(localStorage.getItem('theme'));
      const localIcon = localStorage.getItem('icon');
      refs.button.firstElementChild.textContent = localIcon;
    } catch {
      console.error('woooooow error');
    }
  } else {
    document.body.classList.add('theme-light');
  }
}
