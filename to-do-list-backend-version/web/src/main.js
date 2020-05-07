'use strict'



// axios is already declared globally
const api = axios.create({
    baseURL: 'http://localhost:3000'
})


async function handleLogin(){
    event.preventDefault();
    try {
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value


        await api.get('/',{
            params: {
                email,
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
        let username = document.getElementById('username').value
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value

        await api.post('/', {
            username,
            email,
            password,
        }).then(function(response){
            const _id = response.data._id
            localStorage.setItem('user_id', _id)
            history.replaceState('profilePage', 'profile page', `${_id}/profile`)
        })

    } catch (err) {
        console.log(err)
    }
}

// onClick function to put the client into the register page

function goToRegisterNewUser(){
    history.replaceState('registerPage','register page', 'register')
    registerPageRenderer()
}

function goToLoginUser(){
    history.replaceState('loginPage','login page', 'login')
    loginPageRenderer()

}


function registerPageRenderer(){

    const mainDiv = document.getElementById('mainDiv')
    const style = document.querySelector('#additionalCss')
    mainDiv.innerHTML = ''
    style.setAttribute('href', './pages/register/registerStyle.css')

    let form = document.createElement('form')
    let div = document.createElement('div')
    let logoSpan = document.createElement('span')
    let img = document.createElement('img')
    let usernameInput = document.createElement('input')
    let emailInput = document.createElement('input')
    let passwordInput = document.createElement('input')
    let usernameLabel = document.createElement('label')
    let emailLabel = document.createElement('label')
    let passwordLabel = document.createElement('label')
    let button = document.createElement('button')
    let p = document.createElement('p')
    let redirectSpan = document.createElement('span')

    // events and classes definition
    div.classList.toggle('logo-container')
    form.setAttribute('onsubmit', 'handleRegister()')
    redirectSpan.setAttribute('onclick', 'goToLoginUser()')

    // logo image and span text
    img.src = './assets/pencil-logo.png'
    img.setAttribute('alt', 'pencil-logo')
    logoSpan.innerText = "Make your own task lists"


    // username area
    usernameLabel.innerText = 'Your username:'
    usernameInput.id = 'username'
    usernameInput.setAttribute('name', 'username')
    usernameInput.setAttribute('type', 'text')
    usernameInput.placeholder = 'create a username'


    // user email area
    emailLabel.innerText = 'Your email:'
    emailInput.id = 'email'
    emailInput.setAttribute('name', 'email')
    emailInput.setAttribute('type', 'email')
    emailInput.placeholder = 'Put your email'


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
    form.appendChild(usernameLabel)
    form.appendChild(usernameInput)
    form.appendChild(emailLabel)
    form.appendChild(emailInput)
    form.appendChild(passwordLabel)
    form.appendChild(passwordInput)
    form.appendChild(button)
    form.appendChild(p)
    mainDiv.appendChild(form)


}

function loginPageRenderer(){

    const mainDiv = document.getElementById('mainDiv')
    const style = document.querySelector('#additionalCss')
    mainDiv.innerHTML = ''
    style.setAttribute('href', './pages/login/styles.css')

    let form = document.createElement('form')
    let div = document.createElement('div')
    let logoSpan = document.createElement('span')
    let img = document.createElement('img')
    let passwordInput = document.createElement('input')
    let emailLabel = document.createElement('label')
    let emailInput = document.createElement('input')
    let passwordLabel = document.createElement('label')
    let button = document.createElement('button')
    let p = document.createElement('p')
    let redirectSpan = document.createElement('span')

    // events and classes definition
    div.classList.toggle('logo-container')
    form.setAttribute('onsubmit', 'handleLogin()')
    redirectSpan.setAttribute('onclick', 'goToRegisterNewUser()')

    // logo image and span text
    img.src = './assets/pencil-logo.png'
    img.setAttribute('alt', 'pencil-logo')
    logoSpan.innerText = "Make your own task lists"



    // user login area
    emailLabel.innerText = 'Email:'
    emailInput.id = 'email'
    emailInput.setAttribute('name', 'email')
    emailInput.setAttribute('type', 'email')
    emailInput.placeholder = 'Put your email'


    // user password area
    passwordLabel.innerText = 'Password:'
    passwordInput.id = 'password'
    passwordInput.setAttribute('name', 'password')
    passwordInput.setAttribute('type', 'password')
    passwordInput.placeholder = 'Put your password'


    // button and login span
    button.innerText = 'Sign in'
    button.setAttribute('type', 'submit')
    p.innerText = `Don't have an account yet?`
    redirectSpan.innerText = 'Sign In here'

    //putting the elements on the screen
    div.appendChild(img)
    div.appendChild(logoSpan)
    form.appendChild(div)
    form.appendChild(emailLabel)
    form.appendChild(emailInput)
    form.appendChild(passwordLabel)
    form.appendChild(passwordInput)
    form.appendChild(button)
    form.appendChild(p)
    p.appendChild(redirectSpan)
    mainDiv.appendChild(form)


}

goToLoginUser()