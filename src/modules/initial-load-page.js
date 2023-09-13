function createMainPage(){
  const mainPage = document.createElement('div');
  mainPage.setAttribute('id', 'main-page');
  return mainPage;
}

function createMainContent(){
  const logo = document.createElement('img');
  Object.assign(logo, {
    id: 'logo',
    alt: 'logo image',
  })
  logo.src ='imgs/logo.png';
  return logo;
}

function createButtonSec(){

  const buttonsUl = document.createElement('ul');
  buttonsUl.setAttribute('id', 'buttonsUl')

  const signupBtn = document.createElement('button');
  signupBtn.setAttribute('id', 'signBtn');
  signupBtn.type="submit";
  signupBtn.innerHTML = 'Sign up';
  buttonsUl.appendChild(signupBtn);
  
  const logInBtn = document.createElement('button');
  logInBtn.setAttribute('id', 'logBtn');
  logInBtn.type="submit";
  logInBtn.innerHTML = 'Login';
  buttonsUl.appendChild(logInBtn);

  return buttonsUl;
}



export function loadPage(){
  const content = document.getElementById('content');

  const main = createMainPage();
  content.appendChild(main);

  const mainContent = createMainContent();
  main.appendChild(mainContent);

  const buttons = createButtonSec();
  main.appendChild(buttons);
}

