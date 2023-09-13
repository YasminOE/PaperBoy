import loadSignup from "./signup";
import { loadSuccess } from "./succuss";
import { UsersManager } from "./user";


function createLoginPage(){
  // areas
  const loginContent = document.createElement('div')
  loginContent.setAttribute('id', 'login-content');

  const headArea = document.createElement('div');
  headArea.setAttribute('id', 'head-area');
  loginContent.appendChild(headArea);


  const formArea = document.createElement('div');
  formArea.setAttribute('id', 'form-area');
  loginContent.appendChild(formArea);


  // head content
  const headImg = document.createElement('img');
  Object.assign(headImg, {
    id: 'head-img',
    alt: 'An image'
  });
  headImg.src = 'imgs/loginB.png';
  headArea.appendChild(headImg);

  const headText = document.createElement('p')
  headText.setAttribute('id', 'head-text');
  headText.innerHTML = "Good to see you!";
  headArea.appendChild(headText);

  const noAccount = document.createElement('p')
  noAccount.setAttribute('id', 'no-account');
  // noAccount.href = '#';
  noAccount.innerHTML = 'Don\'t have an account? <span>Join now.</span>';
  headArea.appendChild(noAccount);

// form content
  const logForm = document.createElement('form');
  logForm.setAttribute('class', 'login-form');
  // logForm.action = loadSuccess;
  logForm.method = 'get';
  logForm.name = 'LoginForm';
  formArea.appendChild(logForm);

  const ErrorMessage = document.createElement('p');
  ErrorMessage.setAttribute('id', 'errorMsg');
  ErrorMessage.innerHTML = 'Oh, <span class="material-symbols-outlined">sentiment_dissatisfied</span> email or password incorrect!';
  logForm.appendChild(ErrorMessage);

  const logEmail = document.createElement('input')
  // logEmail.setAttribute('class', 'login-email');
  Object.assign(logEmail, {
    type: 'email',
    placeholder: 'example@gmail.com',
    value: ''
  });
  logEmail.classList.add('login-email');
  logForm.appendChild(logEmail);

  const logPassword = document.createElement('input')
  // logEmail.setAttribute('class', 'login-email');
  Object.assign(logPassword, {
    type: 'password',
    placeholder: '*****',
    value: ''

  });
  logPassword.classList.add('login-password');
  logForm.appendChild(logPassword);

  const confirmLogInBtn = document.createElement('button');
  confirmLogInBtn.setAttribute('class', 'confirm');
  confirmLogInBtn.type = 'submit';
  confirmLogInBtn.innerHTML = 'Login';
  logForm.appendChild(confirmLogInBtn);

return loginContent;
}

function goToSignUp(){
  const line = document.getElementById('no-account');

  line.addEventListener('click', loadSignup);

  return line;
}

function validateLogin(usersManager) {
  const form = document.querySelector('.login-form');
  const emailInput = document.querySelector('.login-email');
  const passwordInput = document.querySelector('.login-password');
  const message = document.querySelector('#errorMsg');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const usersData = usersManager.loadUsersForLogin();

    const foundUser = usersData.find((user) => {
      return user.email === emailInput.value && user.password === passwordInput.value;
    });

    if (foundUser) {
      // Successful login
      emailInput.classList.remove('error');
      passwordInput.classList.remove('error');
      message.classList.remove('error');
      console.log('Successful login');
      
      
      // // Load and execute the loadSuccess.js file with the user's fullName
      // loadSuccess(foundUser.fullName);

    } else {
      // Invalid login
      emailInput.classList.add('error');
      passwordInput.classList.add('error');
      message.classList.add('error');
      console.log('Invalid login');
    }
  });
}


export default function loadLogin(){
  const content = document.getElementById('content');
  const loginPage = createLoginPage();

  content.textContent = '';
  content.appendChild(loginPage);
  goToSignUp();

  const theManager = new UsersManager()
  validateLogin(theManager);
  return content;
}



// export default function loadForms(){
//   const signUpForm = loadSignup();

//   const loginForm = loadLogin();

//   return {signUpForm, loginForm};

// }


// function validateLogin(manager){
//   const form = document.querySelector('.login-form');
//   const emailInput=document.querySelector('.login-email');
//   const passwordInput=document.querySelector('.login-password');

//   manager = new UsersManager().loadUsers();
//   console.log(manager);
//   let loginInfo = Array.from(manager);
//   console.log(loginInfo);
//   let getLoginInfo = []
//   loginInfo.forEach(user => {
//     loginInfo[user];
//     // let userEmail =  loginInfo[user].email;
//     // let userPassword =loginInfo[user].password;
//     getLoginInfo.push(loginInfo);
//   })
//   console.log(getLoginInfo);
//   // console.log(`getLoginInfo ${JSON.stringify(getLoginInfo)}`);
//   // let loginInfo = [manager.fullName , manager.email, manager.password];
//   console.log(form, emailInput, passwordInput);

//   // let valid = true;
//   // form.addEventListener('submit', (event) => {
//   //   event.preventDefault(); 
//   //   if(emailInput != )


//   // })

// }