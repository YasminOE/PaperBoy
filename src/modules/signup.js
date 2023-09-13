import { loadSuccess } from "./succuss";
import signupHandler ,{ UsersManager, errorMessages, registerUser, User } from "./user";
function createSignupPage(){
  // areas
  const signupContent = document.createElement('div')
  signupContent.setAttribute('id', 'signup-content');

  const headArea = document.createElement('div');
  headArea.setAttribute('id', 'head-area');
  signupContent.appendChild(headArea);


  const formArea = document.createElement('div');
  formArea.setAttribute('id', 'form-area');
  signupContent.appendChild(formArea);


  // head content
  // const headImg = document.createElement('img');
  // Object.assign(headImg, {
  //   id: 'head-img',
  //   alt: 'An image'
  // });
  // headImg.src = 'imgs/loginB.png';
  // headArea.appendChild(headImg);

  const headText = document.createElement('p')
  headText.setAttribute('id', 'head-text');
  headText.innerHTML = "Let us take care of your journals";
  headArea.appendChild(headText);

  const account = document.createElement('p')
  account.setAttribute('id', 'account');
  // account.href = '#';
  account.innerHTML = 'You have an account? <span>Login.</span>';
  headArea.appendChild(account);

// form content
  const signForm = document.createElement('form');
  signForm.setAttribute('class', 'sign-form');
  signForm.action = loadSuccess();
  signForm.method = 'POST';
  signForm.name = 'signForm';
  formArea.appendChild(signForm);

  const SuccessMessage = document.createElement('p');
  SuccessMessage.setAttribute('id', 'successMsg');
  SuccessMessage.innerHTML = 'Yay <span class="material-symbols-outlined">sentiment_very_satisfied</span>, You\'re a step closer!';
  signForm.appendChild(SuccessMessage);

  const ErrorMessage = document.createElement('p');
  ErrorMessage.setAttribute('id', 'errorMsg');
  ErrorMessage.innerHTML = 'Oh, <span class="material-symbols-outlined">sentiment_sad</span> please double-check your registration!';
  signForm.appendChild(ErrorMessage);

  const signName = document.createElement('input')
  // logEmail.setAttribute('class', 'login-email');
  Object.assign(signName, {
    // class: 'sign-name',
    type: 'text',
    placeholder: 'full name',
    required: true,
    pattern: '^[A-Za-z\\s]{3,}$',
    value: ''
  });
  signName.classList.add('sign-name');
  // signName.pattern = '^[A-Za-z\\s]{3,}$';
  signForm.appendChild(signName);

  const signEmail = document.createElement('input')
  Object.assign(signEmail, {
    // class: 'sign-email',
    type: 'email',
    placeholder: 'example@gmail.com',
    required: true,
    pattern: '^(.+)@(.+).(.+)$',
    value: ''
  });
signEmail.classList.add('sign-email');
  // signEmail.pattern = '^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$';
  // signEmail.pattern = '^(.+)@(.+)$';
  signForm.appendChild(signEmail);

  const signPassword = document.createElement('input')
  Object.assign(signPassword, {
    // class: 'sign-password',
    type: 'password',
    placeholder: '*****',
    required: true,
    // minLength: '8',
    value: ''

  });
  signPassword.classList.add('sign-password');
  signPassword.minLength = '8';
  signForm.appendChild(signPassword);


  const confirmPassword = document.createElement('input');
  Object.assign(confirmPassword, {
    // class: 'confirm-sign-password',
    type: 'password',
    placeholder: '*****',
    required: true,
    // minLength: '8',
    value: '',
  });
  confirmPassword.classList.add('confirm-sign-password');
  confirmPassword.minLength = '8';
  confirmPassword.setAttribute('match', 'sign-password');
  signForm.appendChild(confirmPassword);


  const confirmSignBtn = document.createElement('button');
  confirmSignBtn.setAttribute('class', 'sign-up-btn');
  confirmSignBtn.type = 'submit';
  confirmSignBtn.innerHTML = 'Sign up';
  signForm.appendChild(confirmSignBtn);


  
  return signupContent;
}

function validateSignForm(formSelector, userManager) {
  formSelector = document.querySelector('.sign-form');
  userManager = new UsersManager();

  const formElement = formSelector;
  console.log('form is:',formElement);
  
  const formInputs = Array.from(formElement.querySelectorAll('input'));

  const validationOptions = [
    {
      attribute: 'required',
      isValid: theInput => theInput.value.trim() !== '',
      errorMessage: err => {
        err.classList.add('error');
        err.innerHTML = 'Oh <span class="material-symbols-outlined">sentiment_sad</span>, please double-check your registration!';
      },
    },
    {
      attribute: 'match',
      isValid: input => input.value === formElement.querySelector('.sign-password').value,
      errorMessage: err => {
        err.classList.add('error');
        err.innerHTML = 'Opps <span class="material-symbols-outlined">sentiment_sad</span>, passwords don\'t match.';
      }
    },
    {
      attribute: 'pattern',
      isValid: input => {
        const patternRegx = new RegExp(input.pattern);
        return patternRegx.test(input.value);
      },
      errorMessage: err => {
        err.classList.add('error');
        err.innerHTML = 'Opps <span class="material-symbols-outlined">sentiment_sad</span>,  not a valid value.';
      }
    },
    {
      attribute: 'minLength',
      isValid: input => input.value && input.value.length >= parseInt(input.minLength, 10),
      errorMessage: err => {
      err.classList.add('error');
      err.innerHTML = `Opps <span class="material-symbols-outlined">sentiment_sad</span>, value needs to be at least 8 characters.`;
    },
  }

  ];

  function validateSingleInput(input) {
    const errorMsg = document.querySelector('#errorMsg');
    let isValid = true; // Assume the input is valid initially

    for (const option of validationOptions) {
      if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
        option.errorMessage(errorMsg);
        input.classList.add('invalid');
        console.log(`Validation error for input with name ${input.value}`);
        isValid = false; // Set isValid to false if validation fails
      }
    }

    if (isValid) {
      // Clear error message and remove 'invalid' class if validation passes
      errorMsg.innerHTML = '';
      const successMsg = document.querySelector('#successMsg');
      input.classList.remove('invalid');
      successMsg.classList.add('success');
    }

    return isValid; // Return true if validation passes, false otherwise
  }

  formElement.setAttribute('novalidate', '');
  formElement.addEventListener('submit', event => {
      event.preventDefault(); // Prevent the default form submission

      let allInputsValid = true;

      formInputs.forEach(input => {
          if (!validateSingleInput(input)) {
              allInputsValid = false;
          }
      });

      if (allInputsValid) {
          // Retrieve the input values inside the form submission event handler
          let nameInput = formElement.querySelector('.sign-name').value;
          let emailInput = formElement.querySelector('.sign-email').value;
          let passwordInput = formElement.querySelector('.sign-password').value;
          let confirmPasswordInput = formElement.querySelector('.confirm-sign-password').value;

          console.log(nameInput , emailInput, passwordInput, confirmPasswordInput);
          // Get the form element's manager and register the user
          let user = new User(
              nameInput,
              emailInput,
              passwordInput,
              confirmPasswordInput
          );

          userManager.addUser(user);
          console.log(user);
          userManager.updateLoadUsers();
          // console.log(userManager);

          // // Redirect to the success page if needed
          // formElement.submit();
          // successPage = loadSuccess(user.nameInput);
          // formElement.action = successPage;
          // content.innerHTML = "";
          // content.appendChild(successPage);
      } else {
          console.log('Form is invalid');
      }
  });
}


export default function loadSignup() {
    // document.addEventListener('DOMContentLoaded', () => {
      const content = document.getElementById('content');
      const signupPage = createSignupPage();
  
      content.textContent = '';
      content.appendChild(signupPage);
  
      const form = document.querySelector('.sign-form');
      const manager = new UsersManager();
  
      // console.log('this is the form', form);
      // console.log('this is the manager', manager);
  
      // Move the call to validateSignForm here, after the form is added to the DOM
      validateSignForm(form, manager);
  
      return { content, form };
    // });
  }
  






       // if (user) {

        //   // formElement.action = loadSuccess(user.nameInput);
        //   successPage = loadSuccess(user.nameInput);
        //   // formElement.submit();
        //   content.innerHTML = "";
        //   content.appendChild(successPage);
        //   // window.location.href=loadSuccess(user.nameInput);
        // }
  
  // {


  

  // export default function loadSignup() {
  //   document.addEventListener('DOMContentLoaded', () => {
  //     const content = document.getElementById('content');
  //     const signupPage = createSignupPage();
  
  //     content.textContent = '';
  //     content.appendChild(signupPage);
  
  //     const form = document.querySelector('.sign-form');
  //     const manager = new UsersManager();

  //     console.log('this is the form', form);
  //     console.log('this is the manger', manager);

  //     function validateSignForm(formSelector, userManager) {
  //       const formElement = formSelector;
  //       console.log('form is:',formElement);
        
  //       const formInputs = Array.from(formElement.querySelectorAll('input'));
  
  //       const validationOptions = [
  //         {
  //           attribute: 'required',
  //           isValid: theInput => theInput.value.trim() !== '',
  //           errorMessage: err => {
  //             err.classList.add('error');
  //             err.innerHTML = 'Oh <span class="material-symbols-outlined">sentiment_sad</span>, please double-check your registration!';
  //           },
  //         },
  //         {
  //           attribute: 'match',
  //           isValid: input => input.value === formElement.querySelector('.sign-password').value,
  //           errorMessage: err => {
  //             err.classList.add('error');
  //             err.innerHTML = 'Opps <span class="material-symbols-outlined">sentiment_sad</span>, passwords don\'t match.';
  //           }
  //         },
  //         {
  //           attribute: 'pattern',
  //           isValid: input => {
  //             const patternRegx = new RegExp(input.pattern);
  //             return patternRegx.test(input.value);
  //           },
  //           errorMessage: err => {
  //             err.classList.add('error');
  //             err.innerHTML = 'Opps <span class="material-symbols-outlined">sentiment_sad</span>,  not a valid value.';
  //           }
  //         }
  //       ];
  
  //       formElement.setAttribute('novalidate', '');
  
  //       formInputs.forEach(input => {
  //         input.addEventListener('blur', () => {
  //           validateSingleInput(input);
  //         });
  //       });
  
  //       function validateSingleInput(input) {
  //         const errorMsg = document.querySelector('#errorMsg');
  //         let formError = false;
        
  //         for (const option of validationOptions) {
  //           if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
  //             formError = true;
  //             option.errorMessage(errorMsg);
  //             input.classList.add('invalid');
  //             console.log(`Validation error for input with name ${input.value}`);
  //           }
  //         }
  //         if (!formError) {
  //           input.classList.remove('invalid');

  //         }
  //       }
        
  
  //       formElement.addEventListener('submit', event => {
  //         const valid = validateFullForm(formElement);
  
  //         event.preventDefault(); // Prevent the default form submission

  //         if (valid) {
  //           // Retrieve the input values inside the form submission event handler
  //           const nameInput = formElement.querySelector('.sign-name').value;
  //           const emailInput = formElement.querySelector('.sign-email').value;
  //           const passwordInput = formElement.querySelector('.sign-password').value;
  //           const confirmPasswordInput = formElement.querySelector('.confirm-sign-password').value;
        
  //           // Get the form element's manager and register the user
  //           const user = new User(
  //             nameInput,
  //             emailInput,
  //             passwordInput,
  //             confirmPasswordInput
  //           );
        
  //           userManager.addUser(user);
  //           console.log(user);
  //           manager.updateLoadUsers();
  //           console.log(userManager);
        
  //           // Redirect to the success page if needed
  //           // formElement.action = loadSuccess(user.nameInput);
  //           // successPage = loadSuccess(user.nameInput);
  //           // content.innerHTML = "";
  //           // content.appendChild(successPage);
  //         } else {
  //           console.log('Form is invalid');
  //         }
  //       });

  //       function validateFullForm(formToValidate) {
  //         const formInputs = Array.from(formToValidate.querySelectorAll('input'));
  //         let allInputsValid = true;
  
  //         formInputs.forEach(input => {
  //           validateSingleInput(input);
  
  //           if (input.classList.contains('invalid')) {
  //             allInputsValid = false;
  //           }
  //         });
  
  //         // Only clear the errorMsg if all inputs are valid
  //         if (allInputsValid) {
  //           const errorMsg = document.querySelector('#errorMsg');
  //           const successMsg = document.querySelector('#successMsg');
  //           errorMsg.innerHTML = '';
  //           successMsg.classList.add('success');
  //         };

  //       }
  //     }
  
  //     validateSignForm(form, manager);
  
  //     return { content, form };
  //   });
  // }
  
  