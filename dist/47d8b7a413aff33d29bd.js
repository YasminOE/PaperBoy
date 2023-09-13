import{create}from"lodash";function createSuccessPage(){const e=document.createElement("div");return e.setAttribute("id","success-page"),e}function createMainContent(){const e=document.createElement("img");return Object.assign(e,{id:"welcome-img",alt:"welcome image"}),e.src="imgs/loginA.png",e}function createTextSec(){const e=document.createElement("div");e.setAttribute("id","text-container");const t=document.createElement("p");Object.assign(t,{id:"welcome-text"}),e.appendChild(t);const n=document.createElement("p");return Object.assign(n,{id:"guide-text"}),n.innerHTML="Complete setting up your account with just a few clicks",e.appendChild(n),e}function createButtonSec(){const e=document.createElement("ul");e.setAttribute("id","buttonsUl");const t=document.createElement("button");t.setAttribute("id","logout-btn"),t.type="submit",t.innerHTML="Log out",e.appendChild(t);const n=document.createElement("button");return n.setAttribute("id","setup-btn"),n.type="button",n.innerHTML="Set up",e.appendChild(n),e}export default function loadSuccess(e){const t=document.getElementById("content"),n=createSuccessPage();t.appendChild(n);const c=createMainContent();n.appendChild(c);const o=createTextSec();n.appendChild(o);const i=createButtonSec();n.appendChild(i);const u=`Welcome, ${e}`,d=document.getElementById("welcome-text");document.addEventListener("DOMContentLoaded",(()=>{!function(e){let t=0;if(d){!function n(){t<e.length&&(d.textContent+=e.charAt(t),t++,setTimeout(n,50))}()}}(u)}))}