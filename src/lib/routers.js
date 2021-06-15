import { myMenu } from './menu.js'
import { home } from './home.js'
import { post } from './post.js'


// export const changeRouter = (hash) => {
// }

const showTemplate = (hash) => {
    const containerRoot = document.getElementById("router");
    containerRoot.innerHTML = myMenu();

    switch (hash) {
        case '#/home':
            containerRoot.appendChild(home());
            break
        case '#/post':
            containerRoot.appendChild(post());
            break
        default:
            containerRoot.innerHTML = `<h5> Pagina no encontrada </h5>`
    }
}
export {showTemplate}