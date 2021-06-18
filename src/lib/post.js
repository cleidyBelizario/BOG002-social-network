export const post = () => {
    const divPost = document.createElement("div");

    const viewPost = `
    <h3> hola estoy en el post </h3>
    
    `

    divPost.innerHTML = viewPost;

    return divPost;
}
