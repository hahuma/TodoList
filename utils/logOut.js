import loginPageRenderer from "../pages/login/index.js";
import pageCleaner from "./pageCleaner.js";
export default function logOut(){
    localStorage.removeItem('user_id')
    document.querySelector('.welcomeHeader').remove()
    history.replaceState('loginPage', 'login page', '../login')
    pageCleaner('login')
    loginPageRenderer()
}