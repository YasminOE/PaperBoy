import { create } from "lodash";

function createSuccessPage(){
  const mainPage = document.createElement('div');
  mainPage.setAttribute('id', 'success-page');
  return mainPage;
}

function createMainContent(){
  const logo = document.createElement('img');
  Object.assign(logo, {
    id: 'welcome-img',
    alt: 'welcome image',
  })
  logo.src ='imgs/loginA.png';
  return logo;
}

function createTextSec(){

  const textContainer = document.createElement('div');
  textContainer.setAttribute('id', 'text-container')
  const welcomeText = document.createElement('p');
  Object.assign(welcomeText,{
    id:'welcome-text',
  });
  // welcomeText.innerHTML = `Welcome, ${uName}`;
  textContainer.appendChild(welcomeText);

  const guideText = document.createElement('p')
  Object.assign (guideText ,{
    id: 'guide-text'
  })
  guideText.innerHTML = 'Complete setting up your account with just a few clicks';
  textContainer.appendChild(guideText);
  return textContainer;
}


function createButtonSec(){

  const buttonsUl = document.createElement('ul');
  buttonsUl.setAttribute('id', 'buttonsUl')

  const logoutBtn = document.createElement('button');
  logoutBtn.setAttribute('id', 'logout-btn');
  logoutBtn.type="submit";
  logoutBtn.innerHTML = 'Log out';
  buttonsUl.appendChild(logoutBtn);
  
  const setUpBtn = document.createElement('button');
  setUpBtn.setAttribute('id', 'setup-btn');
  setUpBtn.type="button";
  setUpBtn.innerHTML = 'Set up';
  buttonsUl.appendChild(setUpBtn);

  return buttonsUl;
}




export function loadSuccess(uName){
  const content = document.getElementById('content');

  const main = createSuccessPage();
  content.appendChild(main);

  const mainImg = createMainContent();
  main.appendChild(mainImg);

  const mainContent = createTextSec();
  main.appendChild(mainContent);

  const buttons = createButtonSec();
  main.appendChild(buttons);


  const welcomeText = `Welcome, ${uName}`;

  const text = document.getElementById('welcome-text');

  // Add an event listener for DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    // Call the typeWriter function here, when the DOM is fully loaded
    typeWriter(welcomeText);
  });

  // ...

  function typeWriter(fullText) {
    const speed = 50;
    let i = 0;

    // Check if the text element exists
    if (text) {
      function addNextCharacter() {
        if (i < fullText.length) {
          text.textContent += fullText.charAt(i);
          i++;
          setTimeout(addNextCharacter, speed);
        }
      }

      // Start typing animation
      addNextCharacter();
    }
  }
}


