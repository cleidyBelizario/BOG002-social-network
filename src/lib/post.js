export const post = () => {
  const divPost = document.createElement("div");

  const viewPost = `
    <img src="imagen/SqualoLogo.png" alt="" class="logoPH">
    <form id="formPost" class="form">
    <h3> Crea tu post </h3>
    <input type="text" placeholder="Nombre de empremdimiento" class="input1 inputTittle" > 
    <input type="text" placeholder="Descripción..." class="input1 inputContent">
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
    
    `;

  divPost.innerHTML = viewPost;

  return divPost;
};
