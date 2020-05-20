import DOM_HANDLER from '../../utils/DOM_HANDLER.js'
import { goToLoginUser } from '../../main.js'
import { handleRegister } from '../../services/api.js'

function registerPageRenderer(){

    const mainDiv = document.getElementById('mainDiv')

    let form = DOM_HANDLER.tagCreator('form')
    let div = DOM_HANDLER.tagCreator('div')
    let logoSpan = DOM_HANDLER.tagCreator('span')
    let img = DOM_HANDLER.tagCreator('img')
    let usernameInput = DOM_HANDLER.tagCreator('input')
    let emailInput = DOM_HANDLER.tagCreator('input')
    let passwordInput = DOM_HANDLER.tagCreator('input')
    let usernameLabel = DOM_HANDLER.tagCreator('label')
    let emailLabel = DOM_HANDLER.tagCreator('label')
    let passwordLabel = DOM_HANDLER.tagCreator('label')
    let button = DOM_HANDLER.tagCreator('button')
    let p = DOM_HANDLER.tagCreator('p')
    let redirectSpan = DOM_HANDLER.tagCreator('span')

    // events and classes definition
    DOM_HANDLER.classCreator(div, 'logo-container')

    form.addEventListener('submit', handleRegister, false)

    redirectSpan.addEventListener('click', goToLoginUser, false)

    // logo image and span text
    img.src = './assets/pencil-logo.png'
    img.setAttribute('alt', 'pencil-logo')
    logoSpan.innerText = "Make your own task lists"


    // username, email and password area
    usernameLabel.innerText = 'Your username:'
    DOM_HANDLER.setInputProperties(usernameInput, 'text', 'username', 'Create a username')

    emailLabel.innerText = 'Your email:'
    DOM_HANDLER.setInputProperties(emailInput, 'email', 'email', 'Put your email')

    passwordLabel.innerText = 'Your password:'
    DOM_HANDLER.setInputProperties(passwordInput, 'password', 'password', 'Put your password')


    // button and login span
    DOM_HANDLER.setButtonProperties(button, 'submit', 'Sign In')
    p.innerText = `Already has an account?`
    redirectSpan.innerText = 'Log In here'
    p.appendChild(redirectSpan)

    DOM_HANDLER.appendElement(div, [img, logoSpan])
    DOM_HANDLER.appendElement(form, [ div, usernameLabel, usernameInput, emailLabel, emailInput, passwordLabel, passwordInput, button, p ])
    DOM_HANDLER.appendElement(mainDiv, [form])


}

export default registerPageRenderer