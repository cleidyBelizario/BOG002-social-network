import { myMenu } from './menu.js'
import { home } from './home.js'
import { post } from './post.js'
import { login, prueba  } from './login.js'
import { savePost } from './post.js'


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
            
            // showPost();
            break
        case '#/post':
            containerRoot.innerHTML = myMenu();
            containerRoot.appendChild(post());
            savePost();
            break
        default:
            containerRoot.innerHTML = `<img src="imagen/error404.jpg" alt="" class="error404">`
    }
}
export {showTemplate}