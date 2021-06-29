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

<p id=parrafo> </p>
    `
  divPost.innerHTML = viewPost;
  return divPost;
}


//para capturar lo que el usuario escriba y capturar el boton y se guarde en el local storage
export function capturarBtn(e){
let btnPost = document.querySelector('#btnPost') //para capturar el boton 
btnPost.addEventListener('click', getPostUsuarios)


function getPostUsuarios(e) {
  e.preventDefault()
 // console.log('hola estoy funcionando')
let userTitle = document.querySelector('#title').value;
let userContent = document.querySelector('#content').value;
userContent.reset

savePost(userTitle, userContent);
savePostLocal()
}
}
/*function getPost(e) {
  e.preventDefault()
let paintPost = document.querySelector('#parrafo')
paintPost.innerHTML = '';
}*/

//funcion para ontener el nombre del emprendimiento y el contenido 
let arrayPost = [];
export function savePost(title, content) {
  
  let item = {
    title1: title,
    content1: content,
  }
  arrayPost.push(item);
  return item;
}
//funcion para guardar en el local storage 
export const savePostLocal = () => {
localStorage.setItem('Post', JSON.stringify(arrayPost));
paintPost()
}

export function paintPost(){
  let post1 =document.querySelector('#parrafo');
  // let title2 = document.getElementById('tittleTH');
   //console.log(post1)
  post1.innerHTML = '';
  let arrayGetPost = JSON.parse(localStorage.getItem('post'));
  savePost()
console.log(arrayGetPost)
  /*for(let i=0; i < nCantidadPost; i++ ){
      let fila = document.createElement('div');
      let celdaTitle = document.createElement('div');
      let celdaContent = document.createElement('div');

  let nodoTextoTitle = document.createTextNode(arTitle[i]);
  // console.log(nodoTextoTitle)
  let nodoTextoContent = document.createTextNode(arContent[i]);
  // title2.textContent = 

  let nodito = fila.appendChild(celdaTitle.appendChild(nodoTextoTitle));
  let nodito2 = fila.appendChild(celdaContent.appendChild(nodoTextoContent));
  // console.log(fila.appendChild(celdaTitle.appendChild(nodoTextoTitle)))
  // fila.appendChild(celdaContent.appendChild(nodoTextoContent));

  // nodoTextoContent.appendChild(post1);
   post1.appendChild(nodito) 
   post1.appendChild(nodito2)
 console.log(post1)

  }*/
}
