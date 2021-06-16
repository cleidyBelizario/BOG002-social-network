export const error404 = () => {
    const divError404 = document.createElement("div");

    const viewError404 = `
    <h4> Pagina No encontrada </h4>
    `

    divError404.innerHTML = viewError404;

    return divError404;
}