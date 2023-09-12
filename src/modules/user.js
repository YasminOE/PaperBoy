// user.js

export function User(fullName, email, password, confirmPassword) {
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
// function displayErrMessage(){
//   const errorMessages = userForm.querySelector('#successMsg');
//   errorMessages.innerHTML = 'Oh, <span class="material-symbols-outlined">sentiment_sad</span> please double-check your registration!';
//   errorMessages.classList.add('error');

//   return errorMessages;
// }

// export function validateForm() {
//   const userForm = document.querySelector('.sign-form');
//   const inputFields = userForm.querySelectorAll('input');
//   const errorMessages = userForm.querySelector('#successMsg');
//   let valid = true;

//   inputFields.forEach(inputField => {
//     if(inputField.value == ''){
//       inputField.classList.add('invalid');
//       errorMessages.setCustomValidity(displayErrMessage());
//       valid = false;
//       console.log('I am working');
//     }
//     else if (!inputField.checkValidity()) {
//       inputField.classList.add('invalid');
//       errorMessages.setCustomValidity(displayErrMessage());
//       console.log('I am working');
//       error.push('not the value we are looking for');
//       valid = false;
//     }
//      else {
//       inputField.classList.remove('invalid'); // Remove 'invalid' class on valid input
//       console.log('things looks good');
//     }
//   });

//   return valid;
// }




export function registerUser(userManager, form) {
  form = document.querySelector('.sign-form');
  if (form) {
    console.log('we are in signup page');
    let nameInput = form.querySelector('.sign-name');
    let emailInput = form.querySelector('.sign-email');
    let passwordInput = form.querySelector('.sign-password');
    let confirmPasswordInput = form.querySelector('.confirm-sign-password');
  
    let user = new User(nameInput.value, emailInput.value,passwordInput.value, confirmPasswordInput.value);
  
    userManager.addUser(user);
    userManager.updateLoadUsers();
    console.log(userManager);
  
    return user;

  }else{
  console.log('we are not in signup page yet');
  }
}

export default function formsHandler() {
  const theManager = new UsersManager();
  const theSignForm = document.querySelector('.sign-form'); // Add this line to get the form element

  // You should check if the form exists before calling registerUser
  if (theSignForm) {
    registerUser(theManager, theSignForm);
  } else {
    console.log('The signup form does not exist on this page.');
  }

  return { registerUser };
}

