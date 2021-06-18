export const error404 = () => {
    const divError404 = document.createElement("div");

    const viewError404 = `
    <img src="imagen/SqualoLogo.png" alt="" class="logo">
    `

    divError404.innerHTML = viewError404;

    return divError404;
}