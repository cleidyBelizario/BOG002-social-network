
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

//capturar nombre y guardarlo en el localStorage

let user1 = divLogin.querySelector("#user");
console.log(user1)
const btnlogin1 = divLogin.querySelector("#btnLogin")
btnlogin1.addEventListener('click', getName) 

function getName (e){
    e.preventDefault()
    let userName = user1.value
    console.log(userName)
    saveName(userName);
}

//funcion para guardar el nombre en el localStorage
const saveName = () =>{

    localStorage.setItem('user', document.getElementById('user').value);
    
    }
return divLogin
}
