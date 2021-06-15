export const home = () => {
    const divHome = document.createElement("div");

    const viewHome = `
    <h1> hola estoy en el home </h1>
    `

    divHome.innerHTML = viewHome;

    return divHome;
}
