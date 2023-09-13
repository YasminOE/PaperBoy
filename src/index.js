import './style.css';
import { loadPage } from './modules/initial-load-page';
import loadLogin from './modules/login';
import loadSignup from './modules/signup';
import formsHandler, { UsersManager , registerUser } from './modules/user';
import './modules/success';
import _ from 'lodash';


init();

function addNavEvents() {
  const signUpBtn = document.getElementById('signBtn');
  const logInBtn = document.getElementById('logBtn');

  signUpBtn.addEventListener('click', loadSignup);

  logInBtn.addEventListener('click',loadLogin);
}

function init() {
  loadPage();
  addNavEvents();
  // loadSignup();
  // loadLogin();
}


