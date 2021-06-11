export const post = () => {
    const divPost = document.createElement("div");

    const viemPost = `
    <h3> hola estoy en el post </h3>
    `

    divPost.innerHTML = viemPost;

    return divPost;
}
