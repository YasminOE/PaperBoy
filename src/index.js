import _ from 'lodash';
import './style.css';
import { loadPage } from './modules/inital-load-page';
import loadLogin from './modules/login';
import loadSignup from './modules/signup';

 function addNavEvents(){
   const signUpBtn = document.getElementById('signBtn')
  const logInBtn = document.getElementById('logBtn')

  signUpBtn.addEventListener('click', loadSignup);
  logInBtn.addEventListener('click', loadLogin)
}


init();


 function init(){
  loadPage();
  addNavEvents();
 }