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





