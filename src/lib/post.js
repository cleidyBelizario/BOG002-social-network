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
                <option value= "tienda"> Tienda de regalo</option>
                <option value= "ali" >Alimento</option>
        </select> 
    <select id="location" class="location" name="location">
    <option value= "" disabled selected >Ubicación</option>
    <option value= "bog" >Bogota</option>
    <option value= "bq" >Barranquilla</option>
            </select> 
    <button class="button post" type="submit" id="btnPost"> <b>POST</b></button>
</form>
</section>
<p id=parrafo></p>
    `
  divPost.innerHTML = viewPost;
  return divPost;
}

export function saveTitleContent() {
  let title = document.querySelector('#title');
  let content = document.querySelector('#content');
  //console.log(title)
  const btnPost = document.querySelector("#btnPost")
  btnPost.addEventListener('click', getTitle)

  function getTitle(e) {
    e.preventDefault()
    console.log('hola estoy funcionando')
    let userTitle = title.value
    let userContent = content.value
    if (userTitle, userContent) {
     savePost(userTitle, userContent);
     savePostLocal()
    } else {
      alert("Rellenar campo")
    }
  }
    // funcion para guardar el titulo y el contenido que el usuario ingrese.
    let arrayPost = [];
   
    function savePost(title, content) {
      let item = {
        title1: title,
        content1: content,
      }
      arrayPost.push(item);
      return item;
    }
    //funcion para guardar en el local storage 
  const savePostLocal = () => {
  localStorage.setItem('Post', JSON.stringify(arrayPost));
  paintPost();
  }
  
  const paintPost = () => {
    const postPaint = document.querySelector('#parrafo')
    postPaint.innerHTML = '';
    
    let arrayPost = JSON.parse(localStorage.getItem('Post'));
   // console.log(arrayPost)
   if(arrayPost === null){
    arrayPost = [];
  }else{

    arrayPost.forEach(element => {

      if(element.estado){
        postPaint.innerHTML += `<div class="alert alert-success" role="alert"><i class="material-icons float-left mr-2">accessibility</i><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><i class="material-icons">done</i><i class="material-icons">delete</i></span></div>`
      }else{
      postPaint.innerHTML += `<div class="alert alert-danger" role="alert"><i class="material-icons float-left mr-2">accessibility</i><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><i class="material-icons">done</i><i class="material-icons">delete</i></span></div>`
      }
    });

    formularioUI.addEventListener('submit', (e) => {

      e.preventDefault();
      let actividadUI = document.querySelector('#actividad').value;
    
      CrearItem(actividadUI);
      GuardarDB();
    
      formularioUI.reset();
    
    });
    
    //para borrar y pintar elemento 
    
    document.addEventListener('DOMContentLoaded', PintarDB);
    
    listaActividadesUI.addEventListener('click', (e) => {
    
      e.preventDefault();
    
      if(e.target.innerHTML === 'done' || e.target.innerHTML === 'delete'){
        let texto = e.path[2].childNodes[1].innerHTML;
        if(e.target.innerHTML === 'delete'){
          // Accción de eliminar
          EliminarDB(texto);
        }
        if(e.target.innerHTML === 'done'){
          // Accción de editar
          EditarDB(texto);
        }
      }
    
    });
  }
}

  }

  






/*let peluqueria = savePost("peluqueria", "es una sociedad nueva")
console.log(peluqueria)
//funcion para capturar lo que el usuario escriba en titulo y contenidoz
console.log(formularioPost);
formularioPost.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('estoy dentro de la funcion');
   saveTitle = document.getElementById("title").value;
  let saveContent = document.getElementById("content").value;
savePost(saveTitle, saveContent);

  formularioPost.reset();
})*/
// export function saveTitleContent () {
//   console.log("estoy funcionando")
// let saveTitle = document.getElementById("title")
// //console.log(saveTitle)
// let saveContent = document.getElementById("content")
// //console.log(saveContent)
//const btnPost1 = divPost.getElementById('btnPost')
//console.log(btnPost1)
// btnPost1.addEventListener('click', getPost) 
/*function getPost (e){
    e.preventDefault()
    let titlePost = saveTitle.value
    let contentPost = saveContent.value
console.log(titlePost, contentPost)
}*/





