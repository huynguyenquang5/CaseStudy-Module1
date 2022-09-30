const usernameAdmin = "admin";
const passwordAdmin = "123456"

function login() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    if (username === usernameAdmin && password === passwordAdmin ){
        alert("Login Successful")
        localStorage.setItem("username", usernameAdmin)
    } else if (username !== usernameAdmin || password !== passwordAdmin){
        alert("Login failed");
    }
}