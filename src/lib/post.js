

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
  
    `
divPost.innerHTML = viewPost;
return divPost;

}
//
export function afterRender(){

let botonPost = document.querySelector('#btnPost');
botonPost.addEventListener('click', savePost )
function savePost(event){
  // console.log(event)
  event.preventDefault()
  
  let getTitle = document.querySelector('#title').value;
  let getContent = document.querySelector('#content').value;
  let getCategory = document.querySelector('#category').value;
  let getLocation = document.querySelector('#location').value;
 getPost(getTitle, getContent, getCategory, getLocation);

    if (getTitle, getContent, getCategory, getLocation == ""){
     
      alert("Completa los campos")
    } else{
      let post1 =document.querySelector('#cardPost');
    post1.innerHTML = "POST" + '';
   //variables para de donde nos traemos lo que esta guardado en el local storage 
  let arGetTitle = JSON.parse(localStorage.getItem('Post'));
  console.log(arGetTitle)
  // let nCantidadPost = arGetTitle.length;
  // for(let i=0; i < nCantidadPost; i++ ){
    arGetTitle.forEach(o => {
      // arGetContent.forEach(e => { 
     console.log(o);
  // post1.innerHTML += `<div> <b>${o.title1} </b></div>`//})
  
      let fila = document.createElement('div');
      let celdaTitle = document.createElement('h2');
      let celdaContent = document.createElement('p');
      let category = document.createElement('p')
      //para darle estilos a la tarjeta 
      fila.classList.add("fila1");
      celdaTitle.classList.add("celdaTitle");
      celdaContent.classList.add("celdaContent");
      category.classList.add("category");


  let nodoTextoTitle = document.createTextNode(`${o.title1}`);
  let nodoTextoContent = document.createTextNode(`${o.content1}`);
  let nodoTextoCategory = document.createTextNode(` ${o.category1}`);
  let nodoTextoLocation = document.createTextNode(`${o.location1}`);
  // console.log(nodoTextoTitle)
  
  // title2.textContent = 
  fila.appendChild(celdaTitle.appendChild(nodoTextoTitle));
  fila.appendChild(celdaContent.appendChild(nodoTextoContent));
  fila.appendChild(category.appendChild(nodoTextoCategory));
  fila.appendChild(category.appendChild(nodoTextoLocation));
  // nodoTextoContent.appendChild(post1);
   post1.appendChild(fila); 
  })
}
}
}
//funcion para obtener el nombre del emprendimiento y del contenido

//variables para guardar el array de lo que el usuario escriba 
let arrayPost = [];
export function getPost(title, content, category, location) {
  let item = {
    title1: title,
    content1: content,
    category1: category,
    location1:location,
  }
  arrayPost.push(item);
  
localStorage.setItem('Post', JSON.stringify(arrayPost));
}

