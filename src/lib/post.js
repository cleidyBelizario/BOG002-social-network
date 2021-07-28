export const post = () => {
  const divPost = document.createElement("div");

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
  let formPost = document.querySelector("#formPost");
  //console.log(formPost)
  
  let botonPost = document.querySelector("#btnPost");
  botonPost.addEventListener("click", (e) => {
    e.preventDefault();
    const titlePost = document.querySelector("#title").value;
    const contentPost = document.querySelector("#content").value;
    const categoryPost = document.querySelector("#category").value;
    const locationPost = document.querySelector("#location").value;

    if ((titlePost, contentPost, categoryPost, locationPost == "")) {
      document.getElementById("cardPost").innerHTML = "llenar los campos ";
    } else {
      savePostLS(titlePost, contentPost, categoryPost, locationPost);
      //printPost(variablePrueba)
      formPost.reset();
    }
  });
}
// funcion para conseguir los datos que estan almacenado en el localStorage
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(function () {
    ObtenerPost();
    // editarPost();
  }, 1000);
});

let arrayPost = [];

function ObtenerPost() {
  let dataPost = JSON.parse(localStorage.getItem("Post"));
  //console.log("funciona")
  if (dataPost === null) {
    document.getElementById("cardPost").innerHTML = "NO HAY POST";
  } else {
    arrayPost = dataPost;
    printPost(dataPost);
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
  localStorage.setItem("Post", JSON.stringify(arrayPost));
  printPost(arrayPost);
}

export function printPost(arrayPost1) {
  const post1 = document.querySelector("#cardPost");
  post1.innerHTML = "";
  if (post1 != null) {
    document.getElementById("cardPost").innerHTML = "POST";
    for (let i = 0; i < arrayPost1.length; i++) {
      // arrayPost1.forEach((o) => {
      const container = document.createElement("div");
      container.setAttribute("posicionid", [i]);
      const titleH2 = document.createElement("h2");
      const contentP = document.createElement("p");
      const categoryLocation = document.createElement("p");
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
      container.classList.add("containerStyle");
      titleH2.classList.add("titleStyle");
      contentP.classList.add("contentStyle");
      categoryLocation.classList.add("categoryLocationStyle");
      deletebtn.classList.add("deleteStyle");
      //editBtn.classList.add('editBtnStyle');
      const nodoTextoTitle = document.createTextNode(arrayPost1[i]["title1"]);
      const nodoTextoContent = document.createTextNode(
        arrayPost1[i]["content1"]
      );
      const nodoTextoCategory = document.createTextNode(
        arrayPost1[i]["category1"]
      );
      const nodoTextoLocation = document.createTextNode(
        arrayPost1[i]["location1"]
      );
      editarBtn.textContent = "edit";
      deletebtn.textContent = "delete";
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
  let miCard = document.querySelector("#cardPost");
  miCard.addEventListener("click", (e) => {
    //console.log(e)
    e.preventDefault();
    let tarjeta = e.target.parentNode;
    //console.log(tarjeta.getAttribute('posicionid'))
    if (e.target.innerHTML === "delete") {
      // Accción de eliminar
      EliminarPost(tarjeta.getAttribute("posicionid"));
    }
    if (e.target.innerHTML === "edit") {
     
      editarPost(tarjeta.getAttribute("posicionid"));
      //saveNewPost(tarjeta.getAttribute("posicionid"))
      // updateUser(tarjeta.getAttribute("posicionid"));
      // Accción de editar Post
      // console.log(editarPost(tarjeta.getAttribute('posicionid')))
     }
 });
  }
 
//funcion para eliminar datos de un array segun su posicion.
function EliminarPost(postId) {
  let dataPostEliminar = JSON.parse(localStorage.getItem("Post"));
  dataPostEliminar.splice(postId, 1);
  //convierto el objeto en un JSON
  let dataJSON = JSON.stringify(dataPostEliminar);
  //guardo mis datos en un JSON nuevamente
  localStorage.setItem("Post", dataJSON);
  ObtenerPost();
}

/*export function editarPost(index) {
  
  // console.log(index)
  let dataEdit = JSON.parse(localStorage.getItem("Post"));
   //console.log(dataEdit)
  for (let i = 0; i < dataEdit.length; i++) {
    // console.log(i);
    if (i == index) {
      let formPost = document.querySelector("#cardPost");
      //console.log(formPost)
      formPost.innerHTML += `
 <div
   <p> Title: </p>
   <input id="newTitle" placeholder="${arrayPost[i]["title1"]}"></input>
<p> Content:  </p>
   <input id="newContent" placeholder="${arrayPost[i]["content1"]}"></input>
 <button id="actualizar" onClick="saveNewPost(${i})" > Actualizar </button>
 <button onClick="${ObtenerPost(i)}"> Cancelar </button>
 </div>
  
   `;
  
    } 
  }
}*/

 //export function updatePost() {
 //let buttonActual = document.querySelector('#actualizar');
 //buttonActual.addEventListener('click', saveNewPost());


/*var precioDescuento = 6120
for (var i = 0; i < autos.length; i++) {
      autos[i].Precio = precioDescuento
     }
console.log(autos);*/ 

function editarPost(index) {

  const dataEditada = JSON.parse(localStorage.getItem('Post'));
  // console.log(editarPosteos, index);
  const titleID = document.querySelector("#title");
  const contentID = document.querySelector("#content");
  const categoryID = document.querySelector("#category");
  const locationID = document.querySelector("#location");
  
  titleID.value = dataEditada[index].title1;
  contentID.value = dataEditada[index].content1;
  categoryID.value = dataEditada[index].category1;
  locationID.value = dataEditada[index].location1;

  dataEditada.forEach(function(item, index2) {
    if(index.id === item.id){
      dataEditada.splice(index2, 1, index);
      localStorage.setItem('Post', JSON.stringify(dataEditada))
      obtenerPost();
    }
});
  }

  //for (var i = 0; i < dataEditada.length; i++) {
    //dataEditada[i].title1 = titleID
    //dataEditada.splice(i, 1, index);
  //  console.log(dataLinda)
  //  console.log(dataEditada)
  // let dataJSONN = JSON.stringify(dataEditada);
  // //guardo mis datos en un JSON nuevamente
  // localStorage.setItem("Post", dataJSONN);
  // // printPost();
    
   // localStorage.setItem('Post', JSON.stringify(dataEditada))
    // printPost();
     

  // let dataEdit2 = JSON.parse(localStorage.getItem('Post'));

  // const titleID = document.querySelector('#title1');
  // titleID.value = dataEdit2[i].title1;
  // dataEdit2.splice(i, 1);
  // localStorage.setItem('Post', JSON.stringify(dataEdit2));
  //console.log(dataEdit2)
//   dataEdit2 = document.getElementById('newTitle');
//   //dataEdit2[index] = document.getElementById('newContent').value;
//  /* if (dataEdit2[i] == '') {
//     console.log("completa");
// } else {*/
//    dataEdit2.splice(i, 1, dataEditar3);
//    let dataEditar3 = JSON.stringify(dataEdit2);
//   //guardo mis datos en un JSON nuevamente
//   localStorage.setItem("Post", dataEditar3);
//   ObtenerPost();

//  }
  // }

// export function EditarPost2(i){
//   let dataEdit2 = JSON.parse(localStorage.getItem('Post'));
//   dataEdit2[i] = document.getElementById('newPost');
//   if(dataEdit2[i]==''){
//   alert("Escribe una publicación");
//   } else {
//       localStorage.setItem('Post', JSON.stringify(dataEdit2));
//       ObtenerPost()
//   }
// }

// const EditarPost = (item) => {
//   const titlePost = document.querySelector('#title').value;
//   const contentPost = document.querySelector('#content').value;
//   const categoryPost = document.querySelector('#category').value;
//   const locationPost = document.querySelector('#location').value;
//   let editPost = savePostLS(titlePost, contentPost, categoryPost, locationPost);

//   let indexArray = arrayPost.findIndex((elemento)=>elemento.item === item);

//   arrayPost[indexArray].title1 = editPost;

//   afterRender();
// }

/*var precioDescuento = 6120
autos.forEach(function(item){
      item.precio = precioDescuento
    })
console.log(autos);*/