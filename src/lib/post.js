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
  //console.log("funciona")
  if (dataPost === null) {
    document.getElementById('cardPost').innerHTML = 'NO HAY POST';
  } else {
    arrayPost = dataPost
    printPost(dataPost)
  }
}

// funcion para guardar el array de datos en el localStorage de lo que el usuario escriba
function savePostLS(title, content, category, location) {
  const item ={
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
    document.getElementById('cardPost').innerHTML = 'POST';
      for (let i = 0; i < arrayPost1.length; i++) {
        // arrayPost1.forEach((o) => {
        const container = document.createElement('div');
        container.setAttribute('posicionid', [i])
        const titleH2 = document.createElement('h2');
        const contentP = document.createElement('p');
        const categoryLocation = document.createElement('p');
        const editarBtn = document.createElement("button");
        const deletebtn = document.createElement("button");
        //let updateEdit = document.createElement('td');
        //let editBtn = document.createElement('a');
        //updateEdit.setAttribute('class', 'btnEdit');
        //updateEdit.setAttribute('id', i)  
        //editBtn.href = '#/home?id' + '=' + i;
        // updateButton.setAtrribute('id', i)
        // const edit = document.createElement('button')
        // para darle estilos a la tarjeta
        container.classList.add('containerStyle');
        titleH2.classList.add('titleStyle');
        contentP.classList.add('contentStyle');
        categoryLocation.classList.add('categoryLocationStyle');
        deletebtn.classList.add('deleteStyle');
        //editBtn.classList.add('editBtnStyle');
        const nodoTextoTitle = document.createTextNode(arrayPost1[i]["title1"]);
        const nodoTextoContent = document.createTextNode(arrayPost1[i]["content1"]);
        const nodoTextoCategory = document.createTextNode(arrayPost1[i]["category1"]);
        const nodoTextoLocation = document.createTextNode(arrayPost1[i]["location1"]);
        editarBtn.textContent = 'Editar'
        deletebtn.textContent = 'delete'
        //editBtn.innerHTML = `<img src="imagen/editar.png" class="editStyle" id="editBtn" >`;
        // edit.innerHTML = ("src", 'imagen/editar.png');
        // console.log(nodoTextoTitle)
        // title2.textContent =
        titleH2.appendChild(nodoTextoTitle);
        contentP.appendChild(nodoTextoContent);
        categoryLocation.appendChild(nodoTextoCategory);
        categoryLocation.appendChild(nodoTextoLocation);
        //updateEdit.appendChild(editBtn);
        container.appendChild(titleH2);
        container.appendChild(contentP);
        container.appendChild(categoryLocation);
        container.appendChild(categoryLocation);
        container.appendChild(editarBtn);
        container.appendChild(deletebtn);
        // container.appendChild(edit);
        post1.appendChild(container);
      }
    }
  }
  
//funcion para capturar la tarjeta y poder eliminar 
export const cardPost = () => {
  let miCard = document.querySelector('#cardPost');
  miCard.addEventListener('click', (e) => {
    console.log(e)
    e.preventDefault();
      let tarjeta = e.target.parentNode;
      console.log(tarjeta.getAttribute('posicionid'))
    if(e.target.innerHTML === 'delete'){
      // Accción de eliminar
      EliminarPost(tarjeta.getAttribute('posicionid'));
    }
    
  })  
}

//funcion para eliminar datos de un array segun su posicion.
function EliminarPost (postId){
  
  let dataPostEliminar = JSON.parse(localStorage.getItem('Post'));
  dataPostEliminar.splice(postId, 1)
  //convierto el objeto en un JSON
  let dataJSON = JSON.stringify(dataPostEliminar);
  //guardo mis datos en un JSON nuevamente 
  localStorage.setItem('Post', dataJSON);
  ObtenerPost()
  };


const EditarPost = (item) => {
  const titlePost = document.querySelector('#title').value;
  const contentPost = document.querySelector('#content').value;
  const categoryPost = document.querySelector('#category').value;
  const locationPost = document.querySelector('#location').value;
  let editPost = savePostLS(titlePost, contentPost, categoryPost, locationPost);

  let indexArray = arrayPost.findIndex((elemento)=>elemento.item === item);

  arrayPost[indexArray].title1 = editPost;

  afterRender();
}

/*var precioDescuento = 6120
autos.forEach(function(item){
      item.precio = precioDescuento
    })
console.log(autos);*/