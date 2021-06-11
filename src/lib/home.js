export const home = () => {
    const divHome = document.createElement("div");

    const viemHome = `
    <h1> hola estoy en el home </h1>
    `

    divHome.innerHTML = viemHome;

    return divHome;
}
