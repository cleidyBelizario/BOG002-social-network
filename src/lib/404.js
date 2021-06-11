export const error404 = () => {
    const divError404 = document.createElement("div");

    const viemError404 = `
    <h4> Pagina No encontrada </h4>
    `

    divError404.innerHTML = viemError404;

    return divError404;
}