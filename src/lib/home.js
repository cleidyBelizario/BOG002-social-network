import { myMenu } from "./menu.js";
export const home = () => {
    const divHome = document.createElement('div');

    const viewHome = `
    <img src="imagen/SqualoLogo.png" alt="" class="logoPH">
    <h1> hola estoy en el home </h1>
    ${myMenu()}
    `

    divHome.innerHTML = viewHome;

    return divHome;
}
// 