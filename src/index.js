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
    const userManager = new UsersManager();

    // Attach event listener for signup form submission
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
      const submitBtn = signupForm.querySelector('.sign-up-btn');
      signupForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting
        submitBtn.addEventListener('click', ()=> {
          const validate = formsHandler.validateForm();
          console.log('i am wroing from index.js');
          if (validate) {
            formsHandler.registerUser(userManager, signupForm);
          }
        })
      });
    }
  });

  logInBtn.addEventListener('click', loadLogin);
}

function init() {
  loadPage();
  addNavEvents();
}

init();
