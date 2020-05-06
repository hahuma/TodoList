'use strict'

// axios is already declared globally
const api = axios.create({
    baseURL: 'http://localhost:3000'
})


async function handleLogin(){
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
            history.replaceState(null, 'profile', `${_id}`)
        })

    } catch (err) {
        console.log(err)
    }
}

