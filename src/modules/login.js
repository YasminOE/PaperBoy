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
  noAccount.innerHTML = 'Don\'t have an account? <a href="#">Join now.</a>';
  headArea.appendChild(noAccount);

// form content
  const logForm = document.createElement('form');
  logForm.setAttribute('class', 'login-form');
  logForm.action = '';
  logForm.method = 'get';
  logForm.name = 'LoginForm';
  formArea.appendChild(logForm);

  const logEmail = document.createElement('input')
  // logEmail.setAttribute('class', 'login-email');
  Object.assign(logEmail, {
    class: 'login-email',
    type: 'email',
    placeholder: 'example@gmail.com',
    value: ''
  });
  logForm.appendChild(logEmail);

  const logPassword = document.createElement('input')
  // logEmail.setAttribute('class', 'login-email');
  Object.assign(logPassword, {
    class: 'login-password',
    type: 'password',
    placeholder: '*****',
    value: ''

  });
  logForm.appendChild(logPassword);

  const confirmLogInBtn = document.createElement('button');
  confirmLogInBtn.setAttribute('class', 'confirm');
  confirmLogInBtn.type = 'submit';
  confirmLogInBtn.innerHTML = 'Login';
  logForm.appendChild(confirmLogInBtn);

return loginContent;
}

function goToSignUp(signPage){
  const line = document.getElementById('no-account');

  line.addEventListener('click', signPage);

  return line;
}



export default function loadLogin(){
  const content = document.getElementById('content');
  const loginPage = createLoginPage();

  content.textContent = '';
  content.appendChild(loginPage);

  return content;
}



// export default function loadForms(){
//   const signUpForm = loadSignup();

//   const loginForm = loadLogin();

//   return {signUpForm, loginForm};

// }