import _ from 'lodash';
import './style.css';
import { loadPage } from './modules/initial-load-page';
import loadLogin from './modules/login';
import loadSignup from './modules/signup';
import formsHandler from './modules/user';

 function addNavEvents(){
   const signUpBtn = document.getElementById('signBtn')
  const logInBtn = document.getElementById('logBtn')

  signUpBtn.addEventListener('click', () =>{
    loadSignup();
    document.addEventListener('DOMContentLoaded',() => {
      let submitBtn = document.querySelector('.sign-up-btn')
      submitBtn.addEventListener('click', formsHandler.checkingSignError);
    });

  });
  logInBtn.addEventListener('click', loadLogin)
}


init();


 function init(){
   loadPage();
   addNavEvents();
   const {checkingSignError} = formsHandler();
 }