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


export function afterRender() {
  let dataPost21 = JSON.parse(localStorage.getItem('Post'))
  let botonPost = document.querySelector('#btnPost')
  botonPost.addEventListener('click', () => {

  const titlePost = document.querySelector('#title').value;
  const contentPost = document.querySelector('#content').value;
  const categoryPost = document.querySelector('#category').value;
  const locationPost = document.querySelector('#location').value;

savePostLS(titlePost, contentPost, categoryPost, locationPost);
printPost(dataPost21)
})
}

function ObtenerPost() {
  let dataPost = JSON.parse(localStorage.getItem('Post'))

  console.log("funciona")
  if (dataPost === null) {
    console.log(':( no')
  } else {
    console.log('si hay post')
  }
  /*}else{
    document.getElementById('cardPost').innerHTML = 'No hay Post en el momento';
  }*/
  /* if (titlePost, contentPost, categoryPost, locationPost == ''){    
     document.getElementById('cardPost').innerHTML = pintarLodelLocal;
     }else { 
     localStorage.setItem('Post', JSON.stringify(arrayPost));
     savePostLS(titlePost, contentPost, categoryPost, locationPost);
     paintPost()*/
}


// funcion para obtener el nombre del emprendimiento y del contenido

// variables para guardar el array de lo que el usuario escriba
let arrayPost = [];
export function savePostLS(title, content, category, location) {
  const item = {
    title1: title,
    content1: content,
    category1: category,
    location1: location,
  };
  arrayPost.push(item);
  localStorage.setItem('Post', JSON.stringify(arrayPost));
  printPost()
}

export function printPost(arrayPost1) {

  arrayPost1.forEach((o) => {
    // console.log(arGetTitle)
    const container = document.createElement('div');
    const celdaTitle = document.createElement('h2');
    const celdaContent = document.createElement('p');
    const categoryLocation = document.createElement('p');
    let deleteFila = document.createElement('img')
    // para darle estilos a la tarjeta
    container.classList.add('fila1');
    celdaTitle.classList.add('celdaTitle');
    celdaContent.classList.add('celdaContent');
    categoryLocation.classList.add('category');

    const nodoTextoTitle = document.createTextNode(`${o.title1}`);
    const nodoTextoContent = document.createTextNode(`${o.content1}`);
    const nodoTextoCategory = document.createTextNode(`${o.category1}`);
    const nodoTextoLocation = document.createTextNode(`${o.location1} `);
    deleteFila.setAttribute("src", "/imagen/delete.png ");
    // console.log(nodoTextoTitle)

    celdaTitle.appendChild(nodoTextoTitle);
    celdaContent.appendChild(nodoTextoContent);
    categoryLocation.appendChild(nodoTextoCategory);
    categoryLocation.appendChild(nodoTextoLocation);

    container.appendChild(celdaTitle);
    container.appendChild(celdaContent);
    container.appendChild(categoryLocation);
    container.appendChild(categoryLocation);
    container.appendChild(deleteFila)
    // nodoTextoContent.appendChild(post1);

    listPost.appendChild(container);

  });
}

//funcion para capturar la tarjeta y poder eliminar 
/*export const cardPost = () => {
let miCard = document.querySelector('#cardPost');
miCard.addEventListener('click', (e) => {

  e.preventDefault();
console.log(e);
});
}*/