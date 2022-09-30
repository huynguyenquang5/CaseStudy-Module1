function register(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let passwordConfirm = document.getElementById("passwordConfirm").value;
    let name = document.getElementById("name").value;
    let tel = document.getElementById("tel").value;
    let address = document.getElementById("address").value;
    let customerCode = document.getElementById("customerCode").value;
    if (username === "" || username === null){
        alert("Something is not fully written");
        return false;
    } else if (password === "" || password === null){
        alert("Something is not fully written");
        return false;
    } else if (passwordConfirm === "" || passwordConfirm === null) {
        alert("Something is not fully written");
        return false;
    } else if (name === "" || name === null){
        alert("Something is not fully written");
        return false;
    } else if (tel === "" || tel === null) {
        alert("Something is not fully written");
        return false;
    } else if (address === "" || address === null) {
        alert("Something is not fully written");
        return false;
    } else if (customerCode === "" || customerCode === null) {
        alert("Something is not fully written");
        return false;
    } else if (passwordConfirm !== password ){
        alert("Password confirm is not true")
        return false;
    } else {
        alert("Register successful. Go to login page")
        window.location.href = "CaseStudy-login.html";
        }
    }

