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
    console.log('Loaded Users from localStorage:', usersJSON); // Log the loaded data
    return JSON.parse(usersJSON) || [];
  }

  updateLoadUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
    console.log('Updated Users in localStorage:', this.users); // Log the updated data
  }


  addUser(user) {
    this.users.push(user);
    this.updateLoadUsers();
  }
}


// export function registerUser(userManager, form , userFullName , uEmail, uPassword , uConfirmPassword) {
//   // The form values should be retrieved after the form is submitted
//   // form.addEventListener('submit', event => {
//     event.preventDefault(); // Prevent the default form submission
//     // Retrieve the form values after submission
//     console.log('we are in signup about to submit values page');
//      userFullName = form.querySelector('.sign-name').value;
//      uEmail = form.querySelector('.sign-email').value;
//      uPassword= form.querySelector('.sign-password').value;
//      uConfirmPassword = form.querySelector('.confirm-sign-password').value;

//     // if (nameInput && emailInput && passwordInput && confirmPasswordInput) {
//       // Now you can create the user object and perform further actions
//       let user = new User(
//         userFullName,
//         uEmail,
//         uPassword,
//         uConfirmPassword
//       );
//       console.log(user);
//       userManager.addUser(user);
//       userManager.updateLoadUsers();
//       console.log(userManager);

//       return user;
// }

// document.addEventListener('DOMContentLoaded', () => {
//   // Your code here
//   formsHandler();
// });

// export default function formsHandler() {
//   const theManager = new UsersManager();
//   const theSignForm = document.querySelector('.sign-form'); // Add this line to get the form element

//   // const newUser = new User('Gin', 'test@gmail.com', '123', '123');
//   // console.log(newUser);

//   // theManager.addUser(newUser);

//   // console.log(theManager);

//   // You should check if the form exists before calling registerUser
//   if (theSignForm) {
//     registerUser(theManager, theSignForm, theName, theEmail, thePassword, theConfirmedPass);
//   } else {
//     console.log('The signup form does not exist on this page.');
//   }

//   return { registerUser };
// }

