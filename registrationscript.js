function signUp() {
    let users
    if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"))
    } else {
        users = []
    }
    let user = {
        email: document.getElementById('mail').value,
        password: document.getElementById('password').value,
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        age: document.getElementById('age').value,
    }

    let findUser = users.filter(person => person.email == user.email)
    if (findUser.length > 0) {
        alert("This e-mail already exist")
        return
    }

    if (checkData(user)) {
        users.push(user)
        localStorage.setItem("users", JSON.stringify(users))
        window.location.href = 'index.html'
    }
}

function checkData(user) {
    if (!validateEmail(user.email)) {
        alert("Incorrect email!")
        return false;
    } else if (!validateAge(user.age)) {
        alert("Incorrect age")
        return false;
    } else if (!spaceValidation(user.password)) {
        alert("Shouldn't be blank or contain blank space!")
        return false;
    } else if (user.name.length < 1 || user.surname.length < 1
        || user.password.length < 1) {
        alert('Complete all data!')
        return false;
    } else {
        return true;
    }
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

const validateAge = (age) => {
    return String(age)
        .match(
            /^[1-9][0-9]$|^[1-9]$|^100$/
        );
}

const spaceValidation = (password) => {
    return String(password)
        .match(
            /^\S*[A-Z]\S*$/
        );
}