import { myMenu } from './menu.js';


export const home = () => {
    const divHome = document.createElement('div');
    

    const viewHome = `${myMenu()}
    <h1> hola estoy en el home </h1>

    
    `
    
    divHome.innerHTML = viewHome;

    return divHome;
}
