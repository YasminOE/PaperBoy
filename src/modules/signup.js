import { loadSuccess } from "./succuss";
import signupHandler ,{ UsersManager, errorMessages, registerUser } from "./user";
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
    class: 'sign-name',
    type: 'text',
    placeholder: 'full name',
    required: true,
    pattern: '^[A-Za-z\\s]{3,}$',
    value: ''
  });
  // signName.pattern = '^[A-Za-z\\s]{3,}$';
  signForm.appendChild(signName);

  const signEmail = document.createElement('input')
  Object.assign(signEmail, {
    class: 'sign-email',
    type: 'email',
    placeholder: 'example@gmail.com',
    required: true,
    pattern: '^(.+)@(.+)$',
    value: ''
  });
  // signEmail.pattern = '^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$';
  // signEmail.pattern = '^(.+)@(.+)$';
  signForm.appendChild(signEmail);

  const signPassword = document.createElement('input')
  Object.assign(signPassword, {
    class: 'sign-password',
    type: 'password',
    placeholder: '*****',
    required: true,
    minLength: '8',
    value: ''

  });
  // signPassword.minLength = '8';
  signForm.appendChild(signPassword);


  const confirmPassword = document.createElement('input');
  Object.assign(confirmPassword, {
    class: 'confirm-sign-password',
    type: 'password',
    placeholder: '*****',
    required: true,
    minLength: '8',
    value: '',
  });
  // confirmPassword.minLength = '8';
  // confirmPassword.setAttribute('match', 'sign-password');
  signForm.appendChild(confirmPassword);


  const confirmSignBtn = document.createElement('button');
  confirmSignBtn.setAttribute('class', 'sign-up-btn');
  confirmSignBtn.type = 'submit';
  confirmSignBtn.innerHTML = 'Sign up';
  signForm.appendChild(confirmSignBtn);


  
  return signupContent;
}

// function createSuccessMessage(){
//   const message = document.createElement('p');
//   message.setAttribute = ('id', 'successSignUp')
//   message.innerHTML = 'Yay <span class="material-symbols-outlined">sentiment_very_satisfied</span>, You\'er a member!';
//   signForm.appendChild(message)

//   return message;
// }

// function goToLogin(LogPage){
//   const line = document.getElementById('account');
//   line.addEventListener('click', LogPage);

//   return line;
// }
export default function loadSignup() {
  const content = document.getElementById('content');
  const signupPage = createSignupPage();

  content.textContent = '';
  content.appendChild(signupPage);

  const form = document.querySelector('.sign-form');
  const userManager = new UsersManager();


  function validateSignForm(formSelector) {
    const formElement = formSelector; // Use the provided form element directly
  
    const validationOptions = [
    {
      attribute: 'required',
      isValid: theInput => theInput.value.trim() !== '',
      errorMessage: err => {
        err.classList.add('error');
        err.innerHTML = 'Oh <span class="material-symbols-outlined">sentiment_sad</span> , please double-check your registration!';
      },
    },
    // {
    //   attribute: 'minLength',
    //   isValid: input => input.value && input.value.length >= parseInt(input.minLength, 10),
    //   errorMessage: err => {
    //     err.classList.add('error');
    //     err.innerHTML = `Opps <span class="material-symbols-outlined">sentiment_sad</span>, value needs to be at least 8 characters.`;
    //   },
    // },
      {
        attribute: 'match',
        isValid: input => input.value === document.querySelector('.sign-password').value,
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
      }
    ];
  
    const validateSingleInput = input => {
      const errorMsg = document.querySelector('#errorMsg');
  
      let formError = false;
      for (const option of validationOptions) {
        if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
          formError = true;
          option.errorMessage(errorMsg);
          input.classList.add('invalid');
          console.log('i work');
        }
      }
      if (!formError) {
        input.classList.remove('invalid');
        console.log('i work too');
      }
    };
  
    formElement.setAttribute('novalidate', '');
    formElement.addEventListener('submit', event => {
      // event.preventDefault();
      const validForm = validateFullForm(formElement);

      if (!validForm) {
        event.preventDefault();
        return user;
      } else {
        console.log('Form is valid');
      }
    });
  
    const validateFullForm = formToValidate => {
      const formInputs = Array.from(formToValidate.querySelectorAll('input'));
      let allInputsValid = true; // Track if all inputs are valid
  
      formInputs.forEach(input => {
        validateSingleInput(input);
  
        if (input.classList.contains('invalid')) {
          allInputsValid = false;
        }
      });
  
      // Only clear the errorMsg if all inputs are valid
      if (allInputsValid) {
        const errorMsg = document.querySelector('#errorMsg');
        const successMsg = document.querySelector('#successMsg');
        errorMsg.innerHTML = '';
        successMsg.classList.add('success');
      }
    };
  }
  
  
  validateSignForm(form);

  return content;
}
