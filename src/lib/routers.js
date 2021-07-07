import { myMenu } from './menu.js';
import { home } from './home.js';
import { post, afterRender } from './post.js';
import { login, prueba } from './login.js';

// import { showPost } from './home.js'

const containerRoot = document.getElementById('root');

const showTemplate = (route) => {
  containerRoot.innerHTML = '';
  switch (route) {
    case '#/':
    case '':
      containerRoot.appendChild(login());
      prueba();
      break;
    case '#/home':
      containerRoot.appendChild(home());
      break;
    case '#/post':
      containerRoot.innerHTML = myMenu();
      containerRoot.appendChild(post());
      afterRender();
      
      break;
    default:
      containerRoot.innerHTML = `<img src="imagen/error404.jpg" alt="" class="error404">`;
  }
};
export { showTemplate };
