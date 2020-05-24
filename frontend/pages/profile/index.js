import DOM_HANDLER from '../../utils/DOM_HANDLER.js'
import logOut from '../../utils/logOut.js'
import { handleSubmitNewTask, renderAllTasks } from '../../services/api.js'


function dashboardPageRenderer(){

    const body = document.querySelector('body')
    const mainDiv = document.getElementById('mainDiv')
    const username = localStorage.getItem('username')

    let taskForm = DOM_HANDLER.tagCreator('form')
    let h1 = DOM_HANDLER.tagCreator('h1')
    let createNewTaskTitle = DOM_HANDLER.tagCreator('h1')
    let buttonsDiv = DOM_HANDLER.tagCreator('div')
    let formDiv = DOM_HANDLER.tagCreator('div')
    let inputsDiv = DOM_HANDLER.tagCreator('div')
    let tasksContainer = DOM_HANDLER.tagCreator('div')
    let textarea = DOM_HANDLER.tagCreator('textarea')
    let inputTaskDate = DOM_HANDLER.tagCreator('input')
    let submitButton = DOM_HANDLER.tagCreator('button')
    let clearButton = DOM_HANDLER.tagCreator('button')
    let logOutButton = DOM_HANDLER.tagCreator('button')
    let logOutIcon = DOM_HANDLER.tagCreator('a')

    // events and classes definition
    DOM_HANDLER.classCreator(h1, 'welcomeHeader')
    DOM_HANDLER.classCreator(formDiv, 'formDiv')
    DOM_HANDLER.classCreator(inputsDiv, 'inputArea')
    DOM_HANDLER.classCreator(buttonsDiv, 'buttons')
    DOM_HANDLER.classCreator(logOutButton, 'logOut')
    DOM_HANDLER.classCreator(createNewTaskTitle, 'newTaskTitle')

    taskForm.addEventListener('submit', handleSubmitNewTask, false)
    logOutButton.addEventListener('click', logOut, false)
    tasksContainer.setAttribute('id', 'tasks-container')


    //header and logOut button
    h1.innerText = `Welcome ${username} , if you want to organize your tasks we are here to help you!`

    // inputs area
    createNewTaskTitle.innerText = 'Create a New Task'
    DOM_HANDLER.setTextareaProperties(textarea, 'taskText', 'taskText', '30', '10', 'Write here your task', true)
    DOM_HANDLER.setInputProperties(inputTaskDate, 'date', 'taskDate', '', '', 'taskDate')

    // buttons area

    DOM_HANDLER.setButtonProperties(submitButton, 'submit', 'Remind Me', 'button')
    DOM_HANDLER.setButtonProperties(clearButton, 'reset', 'Clear', 'button')

    //adding elements on screen

    DOM_HANDLER.appendElement(logOutButton, [  logOutIcon ])
    DOM_HANDLER.appendElement(inputsDiv, [  textarea, inputTaskDate ])
    DOM_HANDLER.appendElement(buttonsDiv, [  submitButton, clearButton ])
    DOM_HANDLER.appendElement(taskForm, [  createNewTaskTitle, inputsDiv, buttonsDiv ])
    DOM_HANDLER.appendElement(formDiv, [  taskForm ])
    DOM_HANDLER.appendElement(mainDiv, [  formDiv, tasksContainer, logOutButton ])
    body.insertBefore(h1, body.childNodes[0])

    renderAllTasks()
}

export default dashboardPageRenderer