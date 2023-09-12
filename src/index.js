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

    // Handle signup form submission
    // const userManager = new UsersManager();
  });

  logInBtn.addEventListener('click', loadLogin);
}

function init() {
  loadPage();
  addNavEvents();
}

init();
