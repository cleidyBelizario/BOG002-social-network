export const post = () => {
  const divPost = document.createElement('div');

  const viewPost = `
  <section>
    
    <form id="formPost" class="form">
    <img src="imagen/SqualoLogo.png" alt="" class="logoPH">
    
    <h3> Crea tu post </h3>
    <input type="text" placeholder="Nombre de empremdimiento" id="title" class="input1 inputTittle" > 
    <input type="text" placeholder="Descripción..."  id= "content" class="input1 inputContent">
    <select id="category" class="category" name="category">
    
        <option value= "" disabled selected >Categorías</option>
        <option value= " tienda " > Tienda   </option>
        <option value= " alimento " > Alimento </option>
        <option value= " spa " >Spa</option>
            </select> 
        <img src="imagen/ubi.png" alt="" class="locationimg">
    <select id="location" class="location" name="location">
    
        <option value= "" disabled selected >Ubicación</option>
        <option value= " bogota " > Bogota </option>
        <option value= " barranquilla " >Barranquilla</option>
            </select> 
    <button class="button post" type="submit" id="btnPost"><b>POST</b></button>

    </form>
    <div id="cardPost"> </div>
  
    `;
  divPost.innerHTML = viewPost;
  return divPost;
};

//funcion para cuando le demos click al boton de post, muestre la funcion de imprimir el post y lo que el usuario escriba en cada imput del formulario  
export function afterRender() {

  let botonPost = document.querySelector('#btnPost')
  botonPost.addEventListener('click', (e) => {
    e.preventDefault();
    const titlePost = document.querySelector('#title').value;
    const contentPost = document.querySelector('#content').value;
    const categoryPost = document.querySelector('#category').value;
    const locationPost = document.querySelector('#location').value;


    if (titlePost, contentPost, categoryPost, locationPost == '') {
      document.getElementById('cardPost').innerHTML = 'llenar los campos ';
    } else {
      savePostLS(titlePost, contentPost, categoryPost, locationPost);
      //printPost(variablePrueba)
    };
  })
}
// funcion para conseguir los datos que estan almacenado en el localStorage
document.addEventListener('DOMContentLoaded', () => {

  setTimeout(function () { ObtenerPost(); }, 1000)
})

let arrayPost = [];

function ObtenerPost() {
  let dataPost = JSON.parse(localStorage.getItem('Post'))

  console.log("funciona")
  if (dataPost === null) {
    console.log(':( no')
  } else {
    arrayPost = dataPost
    printPost(dataPost)
    
  }
}

// funcion para guardar el array de datos en el localStorage de lo que el usuario escriba

function savePostLS(title, content, category, location) {
  const item = {
    title1: title,
    content1: content,
    category1: category,
    location1: location,
  };
  arrayPost.push(item);
  localStorage.setItem('Post', JSON.stringify(arrayPost));
  printPost(arrayPost)
}

export function printPost(arrayPost1) {

  const post1 = document.querySelector('#cardPost');
  post1.innerHTML = '';
  if (post1 != null) {
      console.log('no hay nada en el post')
    arrayPost1.forEach((o) => {
      //console.log('arrayPost1', arrayPost1)

      const container = document.createElement('div');
      const titleH2 = document.createElement('h2');
      const contentP = document.createElement('p');
      const categoryLocation = document.createElement('p');
      const deleteContainer = document.createElement('img')
      // para darle estilos a la tarjeta
      container.classList.add('containerStyle');
      titleH2.classList.add('titleStyle');
      contentP.classList.add('contentStyle');
      categoryLocation.classList.add('categoryLocationStyle');

      const nodoTextoTitle = document.createTextNode(`${o.title1}`);
      const nodoTextoContent = document.createTextNode(`${o.content1}`);
      const nodoTextoCategory = document.createTextNode(` ${o.category1}`);
      const nodoTextoLocation = document.createTextNode(`${o.location1}`);
      deleteContainer.setAttribute("src", 'imagen/delete.png');
      // console.log(nodoTextoTitle)

      // title2.textContent =
      titleH2.appendChild(nodoTextoTitle);
      contentP.appendChild(nodoTextoContent);
      categoryLocation.appendChild(nodoTextoCategory);
      categoryLocation.appendChild(nodoTextoLocation);

      container.appendChild(titleH2);
      container.appendChild(contentP);
      container.appendChild(categoryLocation);
      container.appendChild(categoryLocation);
      container.appendChild(deleteContainer);

      post1.appendChild(container);

    })
  }
}

//funcion para capturar la tarjeta y poder eliminar 
export const cardPost = () => {
  let miCard = document.querySelector('#cardPost');
  miCard.addEventListener('click', (e) => {

    e.preventDefault();
    console.log(e);
  });
}