import { myMenu } from './menu.js'
import { home } from './home.js'
import { post, saveTitleContent } from './post.js'
import { login, prueba  } from './login.js'


const containerRoot = document.getElementById("root");
//containerRoot.innerHTML = myMenu();

const showTemplate = (route) => {
    containerRoot.innerHTML = '';
    switch (route) {
        
        case '':
        case '#/':
            containerRoot.appendChild(login());
            prueba();
            break
        case '#/home':
            containerRoot.appendChild(home());
            
            break
        case '#/post':
            containerRoot.innerHTML = myMenu();
            containerRoot.appendChild(post());
            saveTitleContent ()
            break
        default:
            containerRoot.innerHTML = `<img src="imagen/error404.jpg" alt="" class="error404">`
    }
}
export {showTemplate}