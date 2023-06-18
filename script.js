if(localStorage.getItem("currentUser")){
    if (JSON.parse(localStorage.getItem("currentUser")).isRemember){
        window.location.href = "homepage.html"
    } else {
        localStorage.removeItem("currentUser")
    }
}

function signIn() {
    let currentUser = {
        email: document.getElementById('mail').value,
        password: document.getElementById('password').value,
    }

    let users = JSON.parse(localStorage.getItem("users"))
    
    let findUser = users.filter(user => user.email == currentUser.email)[0]

    if(!findUser){
        alert("No users with that e-mail")
        return
    }

    if(findUser.password != currentUser.password){
        alert("Password is incorrect")
        return
    }

    localStorage.setItem("currentUser", JSON.stringify(findUser))
    window.location.href = "homepage.html"
}
