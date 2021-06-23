//import { myMenu } from './menu.js';
import { home } from './home.js';

export const login = () => {
    const divLogin = document.createElement("div");

    const viewLogin = `
    <section>
    <form id="form">
        <img src="imagen/SqualoLogo.png" alt="" class="logo">
        <img src="imagen/user.png" alt="" class="img-user">
        <input type="user" class="input1 user" id="user" name='user' placeholder= "User Name" required>
        <button class="button user" type="submit" id="btnLogin"><b>LOGIN</b></button>
        
</form>
</section>
`
    divLogin.innerHTML = viewLogin
    return divLogin
}


//capturar nombre y guardarlo en el localStorage
export function prueba() {
    let user1 = document.querySelector("#user");
   // console.log(user1)
    const btnlogin1 = document.querySelector("#btnLogin")
    btnlogin1.addEventListener('click', getName)

    //funcion para capturar el nombre que el usuario escriba y se guarde en local
    function getName(e) {
        e.preventDefault()
        //console.log('hola estoy funcionando')
        let userName = user1.value
        if ( userName ){
        console.log(userName)
        window.location.href="#/home"
    
    } else {
    alert("Rellenar campo")
    }
    
        

/*    //funcion para guardar el nombre en el localStorage
    const saveName = () => {
let user1 = divLogin.querySelector("#user");
console.log(user1)
const btnlogin1 = divLogin.querySelector("#btnLogin")
btnlogin1.addEventListener('click', getName) 

function getName (e){
    e.preventDefault()
    let userName = user1.value
    console.log(userName)
    saveName(userName);

    if (userName == ""){
alert("rellena plis")
    } else{
        window.location.href="#/home"
    }
}*/


//funcion para guardar el nombre en el localStorage
const saveName = () =>{

        let myUser = localStorage.setItem('name', document.getElementById('user').value);
        //console.log(`hola bienvenida  ${myUser}`)
    }

}

}


