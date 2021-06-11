import { myMenu } from "./menu"
import { home } from "./home"
import { post } from "./post"
import { error404 } from "./404"

export const changeRouter = (ruta) => {

}

const showTemplate = (ruta) => {
    const containerRoot = document.getElementById("router");
    containerRoot.innerHTML = myMenu();

    switch (ruta) {
        case '#home':
            containerRoot.appendChild(home());
            break
        case '#post':
            containerRoot.appendChild(post());
            break
        default:
            containerRoot.appendChild(error404());
    }
}