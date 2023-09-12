import './style.css';
import { loadPage } from './modules/initial-load-page';
import loadLogin from './modules/login';
import loadSignup from './modules/signup';
import formsHandler, { UsersManager } from './modules/user';

function addNavEvents() {
  const signUpBtn = document.getElementById('signBtn');
  const logInBtn = document.getElementById('logBtn');

  signUpBtn.addEventListener('click', () => {
    // Load the signup page
    loadSignup();
    const getLogin = document.querySelector('#account');
    getLogin.addEventListener('click', loadLogin);

  });

  logInBtn.addEventListener('click', () => {
    loadLogin();
    const getSignup = document.querySelector('#no-account');
    getSignup.addEventListener('click', loadSignup);

  });
}

function init() {
  loadPage();
  addNavEvents();


}

init();
