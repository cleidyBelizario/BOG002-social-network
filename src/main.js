// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { changeRoute } from './lib/routers';
import { myMenu } from './lib/menu';

const iniciar = () => {
    document.getElementById("router"),innerHTML = myMenu();

    window.addEventListener('hashchange', ()=> {
    myFunction();
    console.log(window.location.hash);
    changeRoute(window.location.hash);
    })
}
window.addEventListener('load', init)



