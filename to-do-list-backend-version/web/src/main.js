'use strict'
import DOM_HANDLER from './utils/DOM_HANDLER.js'
import pageCleaner from './utils/pageCleaner.js'


import loginPageRenderer from './pages/login/index.js'
import dashboardPageRenderer from './pages/profile/index.js'
import registerPageRenderer from './pages/register/index.js'

function goToUserProfile( _id ){
    pageCleaner('profile')
    history.replaceState('profilePage', 'profile page', `profile/${_id}`)
    dashboardPageRenderer()

}

function goToRegisterNewUser(){
    pageCleaner('register')
    history.replaceState('registerPage', 'register page', 'register')
    registerPageRenderer()
}

function goToLoginUser(){
    history.replaceState('loginPage', 'login page', 'login')
    pageCleaner('login')
    loginPageRenderer()

}


goToLoginUser()

export {
    goToUserProfile,
    goToRegisterNewUser,
    goToLoginUser
 }