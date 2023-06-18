const user = JSON.parse(localStorage.getItem('user'))
const postList = document.getElementById('post');
const postLimit = document.getElementById('postLimit')
const paginationItem = document.querySelectorAll('#pagination span')

if (!localStorage.getItem("currentUser")) {
    window.location.href = 'index.html'
}

getCurrentUser()
getOtherUsers()

function getCurrentUser() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"))
    let nameEl = document.getElementById('name')
    nameEl.textContent = currentUser.name
    let surnameEl = document.getElementById('surname')
    surnameEl.textContent = currentUser.surname
    let ageEl = document.getElementById('age')
    ageEl.textContent = currentUser.age
}

//=============================================================================

function logOut() {
    localStorage.removeItem("currentUser")
    window.location.href = 'index.html'
}

function deleteAcc() {
    let users = JSON.parse(localStorage.getItem("users"))
    let currentUser = JSON.parse(localStorage.getItem("currentUser"))
    localStorage.setItem("users", JSON.stringify(
        users.filter(user => user.email != currentUser.email)
    ))
    logOut()
}

//=============================================================================

paginationItem.forEach(item => {
    item.addEventListener('click', () => {
        const page = (item.innerHTML-1) * postLimit.value;
        setPostList(postLimit.value, page)
    })
})

async function setPostList(limit, page) {
    const posts = await getPosts(limit, page);
    let str = '';
    posts.forEach(element => {
        str +=
            `
        <div class="posts__item">
            <h1>${element.title}</h1>
            <img src="${element.url}" alt="">
        </div>
        `
    });
    postList.innerHTML = str
}

setPostList()
