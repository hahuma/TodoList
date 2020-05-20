import DOM_HANDLER from '../../utils/DOM_HANDLER.js'
import { handleLogin } from '../../services/api.js'
import { goToRegisterNewUser } from '../../main.js'

function loginPageRenderer(){

    const mainDiv = document.getElementById('mainDiv')

    let form = DOM_HANDLER.tagCreator('form')
    let div = DOM_HANDLER.tagCreator('div')
    let logoSpan = DOM_HANDLER.tagCreator('span')
    let img = DOM_HANDLER.tagCreator('img')
    let passwordInput = DOM_HANDLER.tagCreator('input')
    let emailLabel = DOM_HANDLER.tagCreator('label')
    let emailInput = DOM_HANDLER.tagCreator('input')
    let passwordLabel = DOM_HANDLER.tagCreator('label')
    let button = DOM_HANDLER.tagCreator('button')
    let p = DOM_HANDLER.tagCreator('p')
    let redirectSpan = DOM_HANDLER.tagCreator('span')

    // events and classes definition
    DOM_HANDLER.classCreator(div, 'logo-container')
    form.addEventListener('submit', handleLogin, false)
    redirectSpan.addEventListener('click', goToRegisterNewUser, false)

    // logo image and span text
    img.src = './assets/pencil-logo.png'
    img.setAttribute('alt', 'pencil-logo')
    logoSpan.innerText = "Make your own task lists"



    // user login and password area
    emailLabel.innerText = 'Email:'
    DOM_HANDLER.setInputProperties(emailInput, 'email', 'email', 'Put your email')
    passwordLabel.innerText = 'Password:'
    DOM_HANDLER.setInputProperties(passwordInput,'password', 'password', 'Put your password')

    // button and login span
    DOM_HANDLER.setButtonProperties(button, 'submit', 'Log in')
    p.innerText = `Don't have an account yet?`
    redirectSpan.innerText = 'Sign In here'

    //putting the elements on the screen
    DOM_HANDLER.appendElement(div, [img, logoSpan])
    DOM_HANDLER.appendElement(form, [ div, emailLabel, emailInput, passwordLabel, passwordInput ])
    DOM_HANDLER.appendElement(form, [ button, p ])
    p.appendChild(redirectSpan)
    DOM_HANDLER.appendElement(mainDiv, [ form ])


}

export default loginPageRenderer