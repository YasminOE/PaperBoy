import { update } from "lodash";

export function User(fullName, email, password, confirmPassword){
    this.fullName = fullName;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
}

export class UsersManager {
  constructor() {
    this.users = this.loadUsers() || [];
  }

  loadUsers() {
    const usersJSON = localStorage.getItem('users');
    return JSON.parse(usersJSON) || [];
  }

  updateLoadUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  addUser(user) {
    this.users.push(user);
    this.updateLoadUsers();
  }
}

function errorMessages(btn, someFunction){
 
  userForm = document.querySelector('.sign-form');
  errorFace = userForm.querySelector('#successMsg');
  nameError = userForm.querySelector('.sign-name');
  emailError = userForm.querySelector('.sign-email');
  passwordError = userForm.querySelector('.sign-password');
  confirmPasswordError = userForm.querySelector('.confirm-sign-password');

  btn = userForm.querySelector('.sign-up-btn');
  btn.addEventListener('click' , () => {

    if(nameError.value === ValidityState.patternMismatch){
      errorFace.innerHTML = 'Oh, <span class="material-symbols-outlined">sentiment_sad</span> Looks like you\'ev missed something!';
      errorFace.className.add('error');
      nameError.className.add('invalid');
    }
    else if(emailError.value === ValidityState.patternMismatch){
      errorFace.innerHTML = 'Oh, <span class="material-symbols-outlined">sentiment_sad</span> Looks like you\'ev missed something!';
      errorFace.className.add('error');
      nameError.className.add('invalid');
    }
  
    else if(passwordError.value === ValidityState.patternMismatch){
      errorFace.innerHTML = 'Oh, <span class="material-symbols-outlined">sentiment_sad</span> Looks like you\'ev missed something!';
      errorFace.className.add('error');
      nameError.className.add('invalid');
    }
    else if(passwordError.value !== confirmPasswordError.value){
      errorFace.innerHTML = 'Oh, <span class="material-symbols-outlined">sentiment_sad</span> Looks like you\'ev missed something!';
      errorFace.className.add('error');
      nameError.className.add('invalid');
    }
    else{
      someFunction;
      errorFace.className.add('success');
    }

  })

  return userForm;
}

export function signupHandler(manager, message){
// i need this function to keep an eye when the 
let form = document.querySelector('.sign-form');
let nameInput = form.querySelector('.sign-name').value;
let emailInput = form.querySelector('.sign-email').value;
let passwordInput = form.querySelector('.sign-password').value;
let confirmPasswordInput = form.querySelector('.confirm-sign-password').value;

let user = new User(nameInput, emailInput,passwordInput, confirmPasswordInput);


  manager.addUser(user);
  manager.updateLoadUsers();
  console.log(manager);

  message;

  return user;
}

// export function loginHandler(manager){
//   if (manager.users.email === user.email || manager.users.password === user.password) {
//     console.log('user\'s emails and password are correct');
//     return true;
//   }
//   else{
//     console.log("wrong");
//     return false;
//   }
// }

export default function formsHandler(){

  const theManger = new UsersManager();
  const theSuccessMsg = document.querySelector('#successMsg');
  // theSuccessMsg;
  const theSignBtn = document.querySelector('.sign-up-btn');

  const getSignupInfo = signupHandler(theManger, theSuccessMsg)
  const checkSignUpErrors = errorMessages(theSignBtn, getSignupInfo)

  return {checkSignUpErrors};


}