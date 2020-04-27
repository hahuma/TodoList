const tasksContainer = document.querySelector('#tasks-container')
const toDo = {}

function handleSubmit(){

    let text = document.getElementById('input').value
    let date = document.getElementById('date').value

    if(text !== "" && date !== ""){

        toDo.date = date
        toDo.text = text
        addTask()

        }else if(text !== "" && date === ""){

                toDo.date = "There's no due date"
                toDo.text = text
                addTask()

            }else{

                alert("The task field should not be blank.")

            }
    event.preventDefault()

}
function addTask(){
    let taskbox = document.createElement('div') 
    let textArea = document.createElement('p')
    let dateArea = document.createElement('h2') 
    let br = '<br>'
    taskbox.classList.add('task')
    taskbox.id = `${toDo.date}`
    
    textArea.innerHTML = `Task: ${br}${br}${toDo.text}`
    dateArea.innerHTML = `Due to: ${br}${br}${toDo.date}`

    tasksContainer.appendChild(taskbox)
    taskbox.appendChild(textArea)
    taskbox.appendChild(dateArea)
}