import { goToUserProfile } from '../main.js'
import listAllTasks from '../utils/listAlltasks.js'

// axios is already declared globally
const api = axios.create({
    baseURL: 'https://mytodohelper.herokuapp.com'
})

async function handleSubmitNewTask(){
    event.preventDefault()

    let taskText = document.getElementById('taskText').value
    let taskDate = document.getElementById('taskDate').value || "There's no due date"
    let user_id = localStorage.getItem('user_id')

    await api.post('/profile/:_id',{
        taskText,
        taskDate,
        user_id
    }).then((response) => {

        let data = response.data
        listAllTasks(data)
        document.querySelector('form').reset()

    })
}

async function renderAllTasks(){
    let user_id = localStorage.getItem('user_id')

    const { data } = await api.get('/profile/:_id', {
        params:{
            user_id
    }})


    data.map( e => (
        listAllTasks(e)
        ))

}


async function handleRegister(){
    event.preventDefault()

    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    await api.post('/register', {
        username,
        email,
        password,
    }).then((response) => {

        let { _id, username } = response.data
        localStorage.setItem('user_id', _id)
        localStorage.setItem('username', username)
        goToUserProfile( _id )
    }).catch(
        (error) => {
            alert(error)
        }
    )

}

async function handleLogin(){
    event.preventDefault();
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value


    await api.get('/',{
        params: {
            email,
            password
        }
    }).then((response) => {

        let { _id, username } = response.data
        localStorage.setItem('user_id', _id)
        localStorage.setItem('username', username)
        goToUserProfile( _id )

    }).catch(
        (error) => {
            alert(error)
        }
    )
}

export {
    handleLogin,
    handleRegister,
    handleSubmitNewTask,
    renderAllTasks
}