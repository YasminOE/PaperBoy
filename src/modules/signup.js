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
  account.innerHTML = 'You have an account? <a href="#">Login.</a>';
  headArea.appendChild(account);

// form content
  const signForm = document.createElement('form');
  signForm.setAttribute('class', 'sign-form');
  signForm.action = '';
  signForm.method = 'Post';
  signForm.name = 'signForm';
  formArea.appendChild(signForm);

  const message = document.createElement('p');
  message.setAttribute = ('id', 'successMsg')
  message.innerHTML = 'Yay <span class="material-symbols-outlined">sentiment_very_satisfied</span>, You\'re a member!';
  signForm.appendChild(message);

  const signName = document.createElement('input')
  // logEmail.setAttribute('class', 'login-email');
  Object.assign(signName, {
    class: 'sign-name',
    type: 'text',
    placeholder: 'full name',
    required: true,
    value: ''
  });
  signName.pattern = '\w{3,16}';
  signForm.appendChild(signName);

  const signEmail = document.createElement('input')
  Object.assign(signEmail, {
    class: 'sign-email',
    type: 'email',
    placeholder: 'example@gmail.com',
    required: true,
    value: ''
  });
  signEmail.pattern = '[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$';
  signForm.appendChild(signEmail);

  const signPassword = document.createElement('input')
  Object.assign(signPassword, {
    class: 'sign-password',
    type: 'password',
    placeholder: '*****',
    required: true,
    value: ''

  });
  signPassword.pattern = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$';
  signForm.appendChild(signPassword);


  const confirmPassword = document.createElement('input')
  Object.assign(confirmPassword, {
    class: 'confirm-sign-password',
    type: 'password',
    placeholder: '*****',
    required: true,
    value: ''

  });
  confirmPassword.pattern = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$';
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


export default function loadSignup(){
  const content = document.getElementById('content');
  const signupPage = createSignupPage();
  // const message = createSuccessMessage();

  content.textContent = '';
  content.appendChild(signupPage);
  // signupPage.appendChild(message);


  return content;
}