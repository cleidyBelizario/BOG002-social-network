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


//funcion para guardar el titulo y el contenido que el usuario ingrese a traves de un evento .
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
        let post1 =document.querySelector('#tblPost tbody');
      post1.innerHTML = '';
     //variables para de donde nos traemos lo que esta guardado en el local storage 
    let arrayPost = JSON.parse(localStorage.getItem('Post'));
    console.log(arGetTitle)
    // let nCantidadPost = arGetTitle.length;
    // for(let i=0; i < nCantidadPost; i++ ){
      arrayPost.forEach(o => {
        // arGetContent.forEach(e => { 
       console.log(o);
    // post1.innerHTML += `<div> <b>${o.title1} </b></div>`//})
        let fila = document.createElement('div');
        let celdaTitle = document.createElement('h2');
        let celdaContent = document.createElement('p');
        let category = document.createElement('p')
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
  //funcion para pintar la linea 
  /*function showPost(){
    let post1 =document.querySelector('#tblPost tbody');
     post1.innerHTML = '';
     //variables para de donde nos traemos lo que esta guardado en el local storage 
    let arGetTitle = JSON.parse(localStorage.getItem('Post'));
    console.log(arGetTitle)
    // let nCantidadPost = arGetTitle.length;
    // for(let i=0; i < nCantidadPost; i++ ){
      arGetTitle.forEach(o => {
        // arGetContent.forEach(e => { 
          console.log(o);
            // post1.innerHTML += `<div> <b>${o.title1} </b></div>`
        //})
        let fila = document.createElement('div');
        let celdaTitle = document.createElement('h2');
        let celdaContent = document.createElement('p');
        let category = document.createElement('p')
    let nodoTextoTitle = document.createTextNode(`${o.title1}`);
      let nodoTextoCategory = document.createTextNode(`${o.category1}`);
      let nodoTextoLocation = document.createTextNode(`${o.location1}`);
    // console.log(nodoTextoTitle)
    let nodoTextoContent = document.createTextNode(`${o.content1}`);
    // title2.textContent = 
    fila.appendChild(celdaTitle.appendChild(nodoTextoTitle));
    fila.appendChild(category.appendChild(nodoTextoCategory));
    fila.appendChild(category.appendChild(nodoTextoLocation));
    fila.appendChild(celdaContent.appendChild(nodoTextoContent));
    // nodoTextoContent.appendChild(post1);
  post1.appendChild(fila); 
    })
  }
  */
  
  
