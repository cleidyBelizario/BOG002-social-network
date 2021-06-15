// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
// import { changeRouter } from './lib/routers.js';
import { myMenu } from './lib/menu.js';
import { showTemplate } from './lib/routers.js';



const iniciar = () => {
    document.getElementById("router").innerHTML = myMenu();

    window.addEventListener('hashchange', ()=> {
    myFunction();
    console.log(window.location.hash);
    showTemplate(window.location.hash);
    })
}
window.addEventListener('load', iniciar);
// Variables globales

//como capturar el nombre del usuario

let user1 = document.getElementById('user');
console.log(user1)
document.getElementById("btnLogin").addEventListener('click', getName) 

function getName(e) {
    e.preventDefault()
    let userName = user1.value
console.log(userName)

guardarName(userName);
}

const guardarName = () =>{

localStorage.setItem('user', document.getElementById('user').value);

}
