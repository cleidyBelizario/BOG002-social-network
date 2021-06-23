

export const post = () => {
  
  const divPost = document.createElement("div");

  const viewPost = `
    
    <form id="formPost" class="form">
    <img src="imagen/SqualoLogo.png" alt="" class="logoPH">
    <h3> Crea tu post </h3>
    <input type="text" placeholder="Nombre de empremdimiento" id="title" class="input1 inputTittle" > 
    <input type="text" placeholder="Descripción..."  id= "content" class="input1 inputContent">
    <select id="category" class="category" name="category">
                <option value= "" disabled selected >Categorías</option>
                <option value= "tienda" >Tienda de regalo</option>
                <option value= "ali" >Alimento</option>
        </select> 

    <select id="location" class="location" name="location">
    <option value= "" disabled selected >Ubicación</option>
    <option value= "bog" >Bogota</option>
    <option value= "bq" >Barranquilla</option>
            </select> 
    <button class="button post" type="submit" id="btnPost"><b>POST</b></button>
    </form>
    <table id="tblPost">
   <thead>
   <tr>
    <th> Title  </th>
    <th>Content </th>
   </tr>
   </thead>
   <tbody>

   </tbody>
   </table>
`

  divPost.innerHTML = viewPost;

// let posTitle = divPost.querySelector("#title");
// let postContent = divPost.querySelector("#content")
// // console.log(posTitle)
// const btnPost1 = divPost.querySelector("#btnPost")
// btnPost1.addEventListener('click', getTitleContent)

// function getTitleContent (e){
//   e.preventDefault()
//   let title = posTitle.value
//   let content = postContent.value
//   console.log(content, title)
// }

// saveTitleContent(title);


 
  // window.location.href="#/home"

 
// const saveTitleContent = () =>{
//   localStorage.setItem('user', document.getElementById('title').value);
// }

  return divPost;

}



//funcion para guardar el titulo y el contenido que el usuario ingrese.



export function savePost(){
  let arrayTitle = [];
let arrayContent = [];

let botonPost = document.querySelector('#btnPost');
botonPost.addEventListener('click', async ()=>{
  let getTitle = document.querySelector('#title').value;
  
  let getContent = document.querySelector('#content').value;
  // console.log(getTitle, getContent)
  arrayTitle.push(getTitle);
  // console.log(arrayTitle)
  arrayContent.push(getContent);
// title2.textContent = getTitle;

localStorage.setItem('title', JSON.stringify(arrayTitle));
localStorage.setItem('content', JSON.stringify(arrayContent));
await showPost();
});

  

}

function showPost(){
  let post1 =document.querySelector('#tblPost');
  // let title2 = document.getElementById('tittleTH');
// console.log(post1)
   post1.innerHTML = '';
  let arTitle = JSON.parse(localStorage.getItem('title'));
  let arContent = JSON.parse(localStorage.getItem('content'))

  let nCantidadPost = arTitle.length;

  for(let i=0; i < nCantidadPost; i++ ){
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

  }
}
// function savePost(title, content) {
  
//   let item = {
//     title1: title,
//     content1: content,
// } 
//  arrayPost.push(item);
  
//  return item;
// }

// let peluqueria = savePost("peluqueria", "es una sociedad nueva")
// console.log(peluqueria)



//funcion para capturar lo que el usuario escriba en titulo y contenido 

/*const formularioPost = document.querySelector('#formPost')
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
// const btnPost1 = divPost.getElementById('btnPost')
// console.log(btnPost1)
// btnPost1.addEventListener('click', getPost) 

/*function getPost (e){
    e.preventDefault()
    let titlePost = saveTitle.value
    let contentPost = saveContent.value
console.log(titlePost, contentPost)
}*/
