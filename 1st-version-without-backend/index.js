const tasksContainer = document.querySelector('#tasks-container')
const toDo = {}

function handleSubmit(){

    let text = document.getElementById('input').value
    let date = document.getElementById('date').value

    if(text !== ""){
        toDo.date = date
        toDo.text = text
        addTask()
    }else{
        alert("The task field should not be blank.")
    }
    event.preventDefault()

}
function addTask(){
    let taskbox = document.createElement('div')    
    taskbox.classList.add('task')
    taskbox.id = `${toDo.date}`
    tasksContainer.appendChild(taskbox)
}