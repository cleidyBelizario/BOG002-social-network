import { myMenu } from "./menu.js";
export const home = () => {
    const divHome = document.createElement('div');
    

    const viewHome = `
    <img src="imagen/SqualoLogo.png" alt="" class="logoPH">
   
    ${myMenu()}
    
    `

    
    divHome.innerHTML = viewHome;
    return divHome;
}

