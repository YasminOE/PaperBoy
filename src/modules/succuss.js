import { create } from "lodash";

function createSuccessPage(){
  const mainPage = document.createElement('div');
  mainPage.setAttribute('id', 'sucssess-page');
  return mainPage;
}

function createMainContent(){
  const logo = document.createElement('img');
  Object.assign(logo, {
    id: 'logo',
    alt: 'logo image',
  })
  logo.src ='imgs/loginB.png';
  return logo;
}

function createTextSec(uName){

  const welcomeText = document.createElement('p');
  Object.assign(welcomeText,{
    id:'welcome-text',
  });
  welcomeText.innerHTML = `Welcome, ${uName}`;

  return welcomeText;
}


function createButtonSec(){

  const buttonsUl = document.createElement('ul');
  buttonsUl.setAttribute('id', 'buttonsUl')

  const logoutBtn = document.createElement('button');
  logoutBtn.setAttribute('id', 'logout-btn');
  logoutBtn.type="submit";
  logoutBtn.innerHTML = 'Logout';
  buttonsUl.appendChild(logoutBtn);
  
  // const logInBtn = document.createElement('button');
  // logInBtn.setAttribute('id', 'logBtn');
  // logInBtn.type="submit";
  // logInBtn.innerHTML = 'Login';
  // buttonsUl.appendChild(logInBtn);

  return buttonsUl;
}



export function loadSuccess(){
  const content = document.getElementById('content');

  const main = createSuccessPage();
  content.appendChild(main);

  const mainContent = createTextSec('Yasmin');
  main.appendChild(mainContent);

  const buttons = createButtonSec();
  main.appendChild(buttons);
}

