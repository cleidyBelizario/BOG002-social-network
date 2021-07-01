

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
return divPost;

}

export function savePost(){

let botonPost = document.querySelector('#btnPost');
botonPost.addEventListener('click', savePost )
  let getTitle = document.querySelector('#title').value;
  
  let getContent = document.querySelector('#content').value;
  console.log(getPost(getTitle, getContent));
  // console.log(getTitle, getContent)
  // arrayTitle.push(getTitle);
  // // console.log(arrayTitle)
  // arrayContent.push(getContent);
// title2.textContent = getTitle;

localStorage.setItem('title', JSON.stringify(arrayTitle));
localStorage.setItem('content', JSON.stringify(arrayContent));
showPost();
}

//funcion para obtener el nombre del emprendimiento y del contenido
let arrayTitle = [];
let arrayContent = [];
export function getPost(title, content) {
  let item = {
    title1: title,
    content1: content,
  }
  arrayTitle.push(item);
  arrayContent.push(item)
  return item;
}

function showPost(){
  let post1 =document.querySelector('#tblPost tbody');
  // let title2 = document.getElementById('tittleTH');
// console.log(post1)
   post1.innerHTML = '';
  let arGetTitle = JSON.parse(localStorage.getItem('title'));
  let arGetContent = JSON.parse(localStorage.getItem('content'));
  // let x = (arGetTitle + arGetContent)
  // console.log(JSON.stringify(x))

  // let nCantidadPost = arGetTitle.length;

  // for(let i=0; i < nCantidadPost; i++ ){
    arGetTitle.forEach(o => {
    
      // arGetContent.forEach(e => { 
        console.log(o);
          // post1.innerHTML += `<div> <b>${o.title1} </b></div>`
      //})
  
      let fila = document.createElement('tr');
      let celdaTitle = document.createElement('td');
      let celdaContent = document.createElement('td');

  let nodoTextoTitle = document.createTextNode(`${o.title1}`);
  // console.log(nodoTextoTitle)
  let nodoTextoContent = document.createTextNode(`${o.content1}`);
  // title2.textContent = 

  fila.appendChild(celdaTitle.appendChild(nodoTextoTitle));
  // fila.appendChild(celdaContent.appendChild(nodoTextoContent));
  // console.log(fila.appendChild(celdaTitle.appendChild(nodoTextoTitle)))
  fila.appendChild(celdaContent.appendChild(nodoTextoContent));

  // nodoTextoContent.appendChild(post1);
   post1.appendChild(fila); 
  })
}
//  console.log(post1)


//funcion para guardar el titulo y el contenido que el usuario ingrese.

// export  function guardarboton (){
// let botonPost = document.querySelector('#btnPost');
// botonPost.addEventListener('click', async ()=>{
//   let getTitle = document.querySelector('#title').value;
  
//   let getContent = document.querySelector('#content').value;
//   // console.log(getTitle, getContent)
//   arrayTitle.push(getTitle);
//   // console.log(arrayTitle)
//   arrayContent.push(getContent);
// // title2.textContent = getTitle;

// localStorage.setItem('title', JSON.stringify(arrayTitle));
// localStorage.setItem('content', JSON.stringify(arrayContent));
// await savePost();
// });
// }

// let arrayTitle = [];
// let arrayContent = [];
// export function savePost(title, content) {


//   let titleContentItem = {
//     title1: title,
//     content1: content,
//     }
    
//   arrayTitle.push(titleContentItem.title1);
//   console.log(arrayTitle)
//   arrayContent.push(titleContentItem.content1);
//   return (titleContentItem )
// }
//console.log(savePost("peluqueria", "emprendimiento"))

// let arrayTitle = [];
// let arrayContent = [];

// let botonPost = document.querySelector('#btnPost');
// botonPost.addEventListener('click', async ()=>{
//   let getTitle = document.querySelector('#title').value;
  




  
