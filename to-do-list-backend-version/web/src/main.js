'use strict'

// axios is already declared globally
const api = axios.create({
    baseURL: 'http://localhost:3000'
})


async function handleLogin(){
    event.preventDefault();
    try {
        let login = document.getElementById('login').value
        let password = document.getElementById('password').value


        await api.get('/',{
            params: {
                login,
                password
            }}).then(
            function(response){
                const data = response.data;
                return console.log(data)
            }
        )

    }catch (err) {
        console.log(err)
    }
}


async function handleRegister(){
    event.preventDefault()
    try {
        let login = document.getElementById('login').value
        let password = document.getElementById('password').value

        await api.post('/', {
            login,
            password,
        }).then(function(response){
            const _id = response.data._id
            localStorage.setItem('user_id', _id)
            history.replaceState('profilePage', 'profile page', `${_id}`)
        })

    } catch (err) {
        console.log(err)
    }
}

// onClick function to put the client into the register page

function goToRegisterNewUser(){
    history.replaceState('registerPage','register page', 'register')
    renderNewState()
    registerPageRenderer()
}

function goToLoginUser(){
    history.replaceState('loginPage','login page', 'login')
    renderNewState()

}



function renderNewState(){

    const mainDiv = document.querySelector('#mainDiv');
    mainDiv.innerHTML = '';
    //let actualState = history.state;

}


function registerPageRenderer(){

    const mainDiv = document.getElementById('mainDiv')
    const style = document.querySelector('#css')
    style.setAttribute('href', '../register/registerStyle.css')

    let form = document.createElement('form')
    let div = document.createElement('div')
    let logoSpan = document.createElement('span')
    let img = document.createElement('img')
    let nameInput = document.createElement('input')
    let loginInput = document.createElement('input')
    let passwordInput = document.createElement('input')
    let nameLabel = document.createElement('label')
    let loginLabel = document.createElement('label')
    let passwordLabel = document.createElement('label')
    let button = document.createElement('button')
    let p = document.createElement('p')
    let redirectSpan = document.createElement('span')

    // events and classes definition
    div.classList.toggle('logo-container')
    form.onsubmit = handleRegister()
    redirectSpan.onclick = goToLoginUser()

    // logo image and span text
    img.src = '../../assets/pencil-logo.png'
    img.setAttribute('alt', 'pencil-logo')
    logoSpan.innerText = "Make your own task lists"


    // user name area
    nameLabel.innerText = 'Your name:'
    nameInput.id = 'name'
    nameInput.setAttribute('name', 'name')
    nameInput.setAttribute('type', 'text')
    nameInput.placeholder = 'Put your name'


    // user login area
    loginLabel.innerText = 'Your login:'
    loginInput.id = 'login'
    loginInput.setAttribute('name', 'login')
    loginInput.setAttribute('type', 'email')
    loginInput.placeholder = 'Put your login'


    // user password area
    passwordLabel.innerText = 'Your password:'
    passwordInput.id = 'password'
    passwordInput.setAttribute('name', 'password')
    passwordInput.setAttribute('type', 'password')
    passwordInput.placeholder = 'Put your password'


    // button and login span
    button.innerText = 'Sign in'
    button.setAttribute('type', 'submit')
    p.innerText = `Already has an account?`
    redirectSpan.innerText = 'Log In here'
    p.appendChild(redirectSpan)

    div.appendChild(img)
    div.appendChild(logoSpan)
    form.appendChild(div)
    form.appendChild(nameLabel)
    form.appendChild(nameInput)
    form.appendChild(loginLabel)
    form.appendChild(loginInput)
    form.appendChild(passwordLabel)
    form.appendChild(passwordInput)
    form.appendChild(button)
    form.appendChild(p)
    mainDiv.appendChild(form)


}