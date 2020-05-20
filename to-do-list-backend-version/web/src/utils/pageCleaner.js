export default function pageCleaner(page = "login"){

    const mainDiv = document.getElementById('mainDiv')
    const style = document.querySelector('#additionalCss')
    mainDiv.innerHTML = ''
    style.setAttribute('href', `./pages/${page}/style.css`)

}