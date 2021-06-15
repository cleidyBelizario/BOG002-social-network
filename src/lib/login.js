
export const login = () => {
    const divLogin = document.createElement("div");

    const viewLogin = `
    <section>
    <form id="form">
        <img src="imagen/SqualoLogo.png" alt="" class="logo">
        <img src="imagen/user.png" alt="" class="img-user">
        <input type="user" class="input1 user" id="user" name='user' placeholder= "User Name" required>
        <button class="button user" type="submit"><b>LOGIN</b></button>
        
</form>
</section>
    `
divLogin.innerHTML = viewLogin
    return divLogin;
}
