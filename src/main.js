// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './lib/index.js';
import { login, prueba } from './lib/login.js';
import { showTemplate } from './lib/routers.js';


const iniciar = () => {
//document.getElementById('root').appendChild(login());
//prueba()
showTemplate(window.location.hash);
console.log(window.location.hash)
    showTemplate(window.location.hash);

    // document.getElementById("router").innerHTML = myMenu();

    window.addEventListener('hashchange', ()=> {
    console.log(window.location.hash)
        showTemplate(window.location.hash);
    })
}
window.addEventListener('load', iniciar);





