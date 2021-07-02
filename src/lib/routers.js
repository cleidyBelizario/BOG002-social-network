import { myMenu } from './menu.js';
import { home } from './home.js';
import { post, afterRender } from './post.js';
import { login } from './login.js';

// import { showPost } from './home.js'

const containerRoot = document.getElementById('router');

const showTemplate = (route) => {
  containerRoot.innerHTML = '';

  switch (route) {
    case '#/':
      containerRoot.appendChild(login());
      break;
    case '#/home':
      containerRoot.appendChild(home());
      // savePost();
      break;
    case '#/post':
      containerRoot.innerHTML = myMenu();
      containerRoot.appendChild(post());
      afterRender();
      break;
    default:
      containerRoot.innerHTML = '<h5> Pagina no encontrada </h5>';
  }
};
export { showTemplate };
